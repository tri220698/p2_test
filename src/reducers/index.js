import { combineReducers } from 'redux';
import user from './user'
import cart from './cart'
import products from './product'
import sort from './sort'
import order from './order'

const allReducers = combineReducers({
  user,
  cart,
  products,
  sort,
  order
})

export default allReducers