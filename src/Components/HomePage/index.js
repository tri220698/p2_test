import React, { useEffect, useState } from 'react';
import HightLight from './hightlight'
import Slider from './Slider'
import New from './new'
import FirstBanner from './banner1'
import Hot from './hot'
import SecondBanner from './banner2'
import Lastest from './lastest'
import Brand from './brand'
import Letter from './letter'
import { getData, updateUser } from '../../database/db'
import { useDispatch, useSelector } from 'react-redux';
import { new_theme } from '../../database/datatext'
import { addtoCart, updateOneCart, getUserCart } from '../../action/action'
import { useTranslation } from 'react-i18next';
import { checkInclude } from '../mixin/mixin'

export const localUrl = window.location.protocol+"//"+window.location.host;

const HomePage = () => {

  const [hightlightProduct, setHightlight] = useState(Object)
  const [newProduct, setNew] = useState(Object)
  const [lastestProdcut, setLasest] = useState(Object)
  const [hotProduct, setHot] = useState(Object)
  const [Bool, setBool] = useState(false)
  const dispatch = useDispatch()
  const { t } = useTranslation();
  const user = useSelector(state => state.user)
  const cart = useSelector(state => state.cart)

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
        dispatch(updateOneCart(item.id))
        dispatch(getUserCart(user.cart))
        sessionStorage.setItem('userData', JSON.stringify(user))
        const add = await updateUser(user)
        alert(t('detail.update'))
      }
    }
    else {
      alert(t('detail.warning'))
    }
  }

  const updateCart = async (item) => {
    item.quantity = 1
    user.cart = [...user.cart, item]
    dispatch(addtoCart(item))
    sessionStorage.setItem('userData', JSON.stringify(user))
    const add = await updateUser(user)
    alert(t('detail.addCart'))
  }

  useEffect(() => {
    const getProduct = async () => {
      const listProduct = await getData('products')
      setHightlight(() => listProduct.sort((a, b) => b.bought - a.bought).slice(0, 6))
      setNew(() => listProduct.sort(() => Math.random() - 0.5).slice(0, 3))
      setLasest(() => listProduct.sort((a, b) => b.id - a.id).slice(0, 4))
      setHot(() => listProduct.sort(() => Math.random() - 0.5).slice(0, 5))
      setBool(true)
    }
    getProduct()
  }, [dispatch])

  if (Bool) {
    return (
      <React.Fragment>
        <Slider />
        <HightLight products={hightlightProduct} add={AddToCart} />
        <New new_theme={new_theme} items={newProduct} add={AddToCart} />
        <FirstBanner />
        <Hot new_theme={new_theme} items={hotProduct} add={AddToCart} />
        <SecondBanner />
        <Lastest new_theme={new_theme} items={lastestProdcut} add={AddToCart} />
        <Brand />
        <Letter />
      </React.Fragment>
    )
  }
  else {
    return (
      <React.Fragment></React.Fragment>
    )
  }
}

export default HomePage

