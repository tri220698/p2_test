const user = (state = [], action) => {
  switch (action.type) {
    case 'GET__USER__DATA' :
      return action.user
    default:
      return state
  }
}

export default user