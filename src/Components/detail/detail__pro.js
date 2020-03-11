import React, { useState } from 'react'
import * as img__Arr from '../../img/index'
import { DropdownList } from 'react-widgets'
import { useTranslation } from 'react-i18next';
import { formatter } from '../mixin/mixin'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { checkInclude } from '../mixin/mixin'
import { addtoCart, UpdateDetailQuantity } from '../../action/action'
import { updateUser } from '../../database/db'



const DetailPro = (props) => {

  const { item } = props
  const ListSize = ['Big', 'Normal', 'Small']
  const ListColor = ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Indigo blue', 'violet']
  const [amount, setAmount] = useState(1)
  const { t } = useTranslation();
  const dispatch = useDispatch()
  const user = useSelector(state => state.user)
  const cart = useSelector(state => state.cart)


  const handleChange = (e) => {
    const target = e.target;
    const { name, value } = target;
    setAmount(value);
  }

  const AddToCart = async (e, item) => {
    if (JSON.parse(sessionStorage.getItem('userData'))) {
      e.preventDefault();
      if (cart.length === 0) {
        updateCart(item)
      }
      else if (!checkInclude(cart, item)) {
        updateCart(item)
      }
      else {
        user.cart = cart.map((pro) => pro.id === item.id ? { ...pro, quantity: parseInt(pro.quantity) + parseInt(amount) } : pro)
        dispatch(UpdateDetailQuantity(item.id, amount))
        sessionStorage.setItem('userData', JSON.stringify(user))
        const add = await updateUser(user)
        alert(t('Đã cập nhật vào giỏ hàng'))

      }
    }
    else {
      alert(t('Đăng nhập để mua ngay '))
    }
  }

  const updateCart = async (item) => {
    item.quantity = amount
    user.cart = [...user.cart, item]
    dispatch(addtoCart(item))
    sessionStorage.setItem('userData', JSON.stringify(user))
    const add = await updateUser(user)
    alert(t('Đã thêm vào giỏ hàng'))
  }

  return (
    <React.Fragment>
      <div className="product__detail">
        <div className="product__detail__img">
          <img src={`http://localhost:3000/${item.image}`} className="img"></img>
          <div className="product__detail__bonus">
            <img className="img" src={img__Arr.product2} />
            <img className="img" src={img__Arr.product3} />
            <img className="img" src={img__Arr.product4} />
            <img className="img" src={img__Arr.product5} />
            <img className="img" src={img__Arr.product6} />
          </div>
        </div>
        <div className="product__detail__info">
          <h3>{item.name}</h3>
          <p className="star">
            <i className="fa fa-star" />
            <i className="fa fa-star" />
            <i className="fa fa-star" />
            <i className="fa fa-star" />
            <i className="far fa-star" />
            {12 + " ( " + t('common.rate') + " )"}
            <span />
            <a href="#">{t('common.feedback')}</a>
          </p>
          <h4>{formatter.format(item.price)}</h4>
          <h5>{t('detail.infoDetail')}</h5>
          <p>
            {t('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercition ullamco laboris nisi ut aliquip ex ea commodo consequat...')}
          </p>
          <div className="info__dropdown">
            <div className="dropdown__item">
              <h5>{t('Size:')}</h5>
              <DropdownList defaultValue={t('detail.size')} data={ListSize}
                style={{ maxWidth: '157px' }}
              />
            </div>
            <div className="dropdown__item">
              <h5>{t('Màu sắc:')}</h5>
              <DropdownList defaultValue={t('detail.color')} data={ListColor}
                style={{ maxWidth: '157px' }}
              />
            </div>
          </div>
          <div className="info__count">
            <div className="count__input">
              <input value={amount} type="number" min='1' name="number"
                onChange={handleChange} />
            </div>
            <div className="count__buy">
              <Link to="/login"
                onClick={e => { AddToCart(e, item) }}
              >{t('button.buyNow')}</Link>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment >
  )
}
export default DetailPro