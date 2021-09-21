const initialState = {
  message: 'Welcome to the anecdotes app!',
  prevId: null
}

const notificationReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'SET_NEW': {
      clearTimeout(state.prevId)
      return {
        message: action.data.message,
        prevId: action.data.clearId
      }
    }
    case 'CLEAR':
      return {
        message: null,
        prevId: null
      }
    default: return state
  }
}

export const setNotification = (message, seconds) => {
  return async dispatch => {
    const clearId = setTimeout(() => {
      dispatch(clearNotification())
    }, (seconds * 1000))
    dispatch({
      type: 'SET_NEW',
      data: {
        message,
        clearId
      }
    })
  }
}

export const clearNotification = () => {
  return {
    type: 'CLEAR'
  }
}

export default notificationReducer