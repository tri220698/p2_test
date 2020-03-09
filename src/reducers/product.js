const products = (state = [], action) => {
  switch (action.type) {
    case 'GET__PRODUCT' :
      return action.products
    default:
      return state
  }
}

export default products