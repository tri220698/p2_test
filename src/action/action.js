import React from 'react'
import * as types from '../actionTypes/actionTypes'

export const getUserData = (user) => {
  return {
    type: types.GET__USER__DATA,
    user
  }
}

export const getUserCart = (cart) => {
  return {
    type: types.GET__USER__CART,
    cart
  }
}

export const userExist = () => {
  return {
    type: types.USER__EXIST
  }
}

export const getProducts = (products) => {
  return {
    type: types.GET__PRODUCT,
    products
  }
}
export const getSort = (sort) => {
  return {
    type: types.SORT__BY,
    sort
  }
}

export const addtoCart = (cart) => {
  return {
    type: types.ADD__CART,
    cart
  }
}

export const updateOneCart = (id) => {
  return {
    type: types.UPDATE__ONE__CART,
    id
  }
}

export const DeleteCart =(id) =>{
  return {
    type: types.DELETE__CART,
    id
  }
}

export const UpdateQuantity =(id,value)=>{
  return {
    type: types.UPDATE_QUANTITY,
    id,
    value
  }
}

export const UpdateDetailQuantity =(id,value)=>{
  return {
    type: types.UPDATE__DETAIL_QUANTITY,
    id,
    value
  }
}