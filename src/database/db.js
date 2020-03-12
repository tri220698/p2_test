import React from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'

const url = "http://localhost:2020";

export const getData = (page) => {
  return axios.get(`${url}/${page}`)
    .then(res => {
      return res.data
    })
    .catch(error => console.log(error))
}

export const RegisUser = (data) => {
  axios.post(`${url}/user`, data)
    .then(res => {
      console.log(res)
    })
}

export const getProduct = (id) => {
  return axios.get(`${url}/products/${id}`)
    .then(res => {
      return res.data
    })
    .catch(error => console.log(error))
}

export const updateUser = (user) => {
  return axios.put(`${url}/user/${user.id}`,user)
    .then(res => {
      return res.data
    })
    .catch(error => console.log(error))
}

export const updateProduct = (product) => {
  return axios.put(`${url}/products/${product.id}`,product)
    .then(res => {
      return res.data
    })
    .catch(error => console.log(error))
}