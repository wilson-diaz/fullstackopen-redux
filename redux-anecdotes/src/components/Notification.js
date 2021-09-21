import React from 'react'
import { connect } from 'react-redux'

const Notification = (props) => {
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }

  const notification = props.notification

  if (!notification) { return null }

  return (
    <div style={style}>
      { notification }
    </div>
  )
}

const mapStateToProps = (state) => { 
  return {
    notification: state.notification 
  }
}

const ConnectedNotification = connect(mapStateToProps)(Notification)

export default ConnectedNotification