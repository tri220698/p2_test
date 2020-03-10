import { combineReducers } from 'redux';
import user from './user'
import cart from './cart'
import products from './product'


const allReducers = combineReducers({
  user,
  cart,
  products,
})

export default allReducers