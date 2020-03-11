import * as types from '../actionTypes/actionTypes'

const products = (state = [], action) => {
  switch (action.type) {
    case types.GET__PRODUCT :
      return action.products
    default:
      return state
  }
}

export default products