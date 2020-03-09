const cart = (state = [], action) => {
  switch (action.type) {
    case 'GET__USER__CART' :
      return action.cart
    default:
      return state
  }
}

export default cart