const sort = (state = 'Tên sản phẩm', action) => {
  switch (action.type) {
    case 'SORT__BY':
      return action.sort
    default:
      return state
  }
}

export default sort