import { combineReducers } from 'redux';
import user from './user'
import cart from './cart'
import products from './product'
import sort from './sort'

const allReducers = combineReducers({
  user,
  cart,
  products,
  sort
})

export default allReducers