const initialState = 'Welcome to the anecdotes app!'

const notificationReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'SEND_NEW': {
      return action.data
    }
    default: return state
  }
}

const sendNewNotification = (notification) => {
  return {
    type: 'SEND_NEW',
    data: notification
  }
}

export default notificationReducer