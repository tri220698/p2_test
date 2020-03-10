import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getUserData,getUserCart,getProducts } from '../../../action/action'
import MenuLogo from './menu__logo'
import Header from './header'
import MainMenu from './main__menu'

const MenuMaster = () => {

  const SaveUser = JSON.parse(sessionStorage.getItem('userData'))
  const dispatch = useDispatch()
  const user = useSelector(state => state.user)


  useEffect(() => {
    if (SaveUser) {
      dispatch(getUserData(SaveUser))
      dispatch(getUserCart(SaveUser.cart))
      dispatch(getProducts(null))
    }
    else {
      dispatch(getProducts(null))
      dispatch(getUserData(null))
    }
  }, [dispatch]);

  return (
    <React.Fragment>
      <Header user={user} />
      <MenuLogo />
      <MainMenu />
    </React.Fragment>
  )
}

export default MenuMaster