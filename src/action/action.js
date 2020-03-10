import React from 'react'

export const getUserData = (user)=>{
  return{
    type:'GET__USER__DATA',
    user
  }
}

export const getUserCart = (cart)=>{
  return{
    type:'GET__USER__CART',
    cart
  }
}

export const userExist = ()=>{
  return{
    type: 'USER__EXIST'
  }
}

export const getProducts = (products)=>
{
  return{
    type:'GET__PRODUCT',
    products
  }
}
export const getSort = (sort)=>{
  return{
    type:'SORT__BY',
    sort
  }
}