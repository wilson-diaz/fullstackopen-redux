const initialState = 'Welcome to the anecdotes app!'

const notificationReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'SET_NEW': {
      return action.data
    }
    case 'CLEAR':
      return null
    default: return state
  }
}

export const setNotification = (message, seconds) => {
  return async dispatch => {
    dispatch({
      type: 'SET_NEW',
      data: message
    })
    return setTimeout(() => {
      dispatch(clearNotification())
    }, (seconds * 1000))
  }
}

export const clearNotification = () => {
  return {
    type: 'CLEAR'
  }
}

export default notificationReducer