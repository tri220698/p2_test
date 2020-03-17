import React, { useState, useEffect } from 'react';
import { BreadCrum } from '../mixin/mixin'
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next';
import { formatter, TotalMoney, TotalQuan } from '../mixin/mixin'
import { removeCart } from '../../action/action'
import { updateHistory, getData, updatePro, updateUser } from '../../database/db'


const Order = () => {

  const { t } = useTranslation();
  const order = JSON.parse(sessionStorage.getItem('order'))
  const user = useSelector(state => state.user)
  const cart = useSelector(state => state.cart)
  const dispatch = useDispatch()

  const handeConfirm = async (e) => {
    e.preventDefault();
    const update = UpdateHistory(cart, user.username)
    const a = await updateHistory(update)
    const up = await updateBought(cart)
    user.cart = []
    dispatch(removeCart())
    const confirm = await updateUser(user)
    sessionStorage.setItem('userData', JSON.stringify(user))
    window.location.pathname = await '/confirm'
  }

  const UpdateHistory = (cart, username) => {
    let history = new Object()
    history.cart = cart
    history.cart.map((item, index) => {
      delete item.votes
      delete item.countRate
      delete item.bought
      delete item.timeActive
      delete item.addNewDate
    })
    history.username = username
    history.status = "pending"
    history.timeOrder = (new Date()).getTime()
    return history
  }

  const updateBought = async (cart) => {
    const productList = await getData('products')
    productList.map((item, index) => {
      cart.map(itemCart => {
        if (item.id === itemCart.id) {
          item.bought++
          item.timeActive = (new Date()).getTime()
          const update = async () => {
            const up = await updatePro(item)
          }
          update()
        }
      })
    })
  }

  if (order) {
    return (
      <React.Fragment>
        <BreadCrum path="Xác nhận" />
        <section className="main__user">
          <div className="container">
            <div className="row">
              <form action="" className="form__regis">
                <div className="confirm__text" style={{ textAlign: 'center' }}>
                  <h4>{t('header.hello')} {user.name}</h4>
                  <h5>{t('order.1')}<span>{TotalQuan(cart)}</span> {t('order.2')} <span>{formatter.format(TotalMoney(cart) + TotalMoney(cart) / 10)}</span></h5>
                </div>
                <div className="item__button" style={{ margin: '0 auto' }}>
                  <Link className="-right" to="/cart">{t('button.back')}</Link>
                  <Link className="-left" to="/confirm" onClick={e => handeConfirm(e)}>{t('button.confirm')}</Link>
                </div>
              </form>
            </div>
          </div>
        </section>
      </React.Fragment>
    )
  }
  else {
    return (
      <React.Fragment>
        <BreadCrum path="Xác nhận" />
        <section className="main__user">
          <div className="container">
            <div className="row">
              <form action="" className="form__regis">
                <div className="confirm__text" style={{ textAlign: 'center' }}>
                  <h5>{t('order.3')}</h5>
                </div>
                <div className="item__button" style={{ margin: '0 auto' }}>
                  <Link className="-left" to="/cart">{t('button.cart')}</Link>
                  <Link className="-right" to="/">{t('button.back')}</Link>
                </div>
              </form>
            </div>
          </div>
        </section>
      </React.Fragment>
    )
  }
}

export default Order