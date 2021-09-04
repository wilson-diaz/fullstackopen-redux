const initialState = 'Welcome to the anecdotes app!'

const notificationReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'SEND_NEW': {
      return action.data
    }
    case 'CLEAR':
      return null
    default: return state
  }
}

export const sendNewNotification = (notification) => {
  return {
    type: 'SEND_NEW',
    data: notification
  }
}

export const clearNotification = () => {
  return {
    type: 'CLEAR'
  }
}

export default notificationReducer