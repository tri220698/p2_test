import React, { useState, useEffect } from 'react';
import { BreadCrum } from '../mixin/mixin'
import CartHeader from './cartHeader'
import CartItem from './CartItem'
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next';




const Cart = () => {

  const SaveUser = JSON.parse(sessionStorage.getItem('userData'))
  const cart = useSelector(state => state.cart)
  const { t } = useTranslation();


  if (SaveUser) {
    if (cart.length === 0) {
      return (
        <React.Fragment>
          <section className="main__user" style={{ display: 'flex' }}>
            <div className="login__text" style={{ margin: 'auto' }}>
              <h2 style={{ textAlign: 'center' }}>{t('cart.empty.1')}</h2>
              <div className="item__button" >
                <Link to="/" className="-right">{t('MUA HÀNG')}</Link>
              </div>
            </div>
          </section>
        </React.Fragment>
      )
    }
    else {
      return (
        <React.Fragment>
          <BreadCrum path="Giỏ hàng" />
          <section className="cart__main">
            <div className="container">
              <div className="row">
                <div className="cart__table">
                  <table>
                    <CartHeader />
                    <CartItem items={cart} />
                  </table>
                  <div className="sum__table">
                    <table>
                      <thead>
                        <tr>
                          <th>{t('cart.buy.1')}</th>
                          <td>{t('6.850.000 Đ')}</td>
                        </tr>
                        <tr>
                          <th>{t('cart.buy.2')}</th>
                          <td>{t('6850.000 Đ')}</td>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th>{t('cart.buy.3')}</th>
                          <td className="-red">{t('7.520.000 Đ')}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="cart__button">
                    <div className="item__button">
                      <Link className="-right" to="/">{t('cart.buy.4')}</Link>
                      <a className="-left" href="#">{t('cart.buy.5')}</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </React.Fragment>
      )
    }
  }
  else {
    return (
      <React.Fragment>
        <section className="main__user" style={{ display: 'flex' }}>
          <div className="login__text" style={{ margin: 'auto' }}>
            <h2 style={{ textAlign: 'center' }}>{t('cart.warning.1')}</h2>
            <div className="item__button" >
              <Link to="/login" className="-right">{t('button.login')}</Link>
            </div>
          </div>
        </section>
      </React.Fragment>
    )
  }

}

export default Cart

