import React from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'

export const getData = (page) => {
  return axios.get(`http://localhost:2020/${page}`)
    .then(res => {
      return res.data
    })
    .catch(error => console.log(error))
}

export const RegisUser = (data) => {
  axios.post(`http://localhost:2020/user`, data)
    .then(res => {
      console.log(res)
    })
}

export const getProduct = (id) => {
  return axios.get(`http://localhost:2020/products/${id}`)
    .then(res => {
      return res.data
    })
    .catch(error => console.log(error))
}