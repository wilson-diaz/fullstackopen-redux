import { connect } from 'react-redux'
import { addNew } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const AnecdoteForm = (props) => {
  const add = async (e) => {
    e.preventDefault()
    const content = e.target.txtContent.value
    e.target.txtContent.value = ''
    props.addNew(content)

    props.setNotification(`You added '${content}'`, 5)
  }

  return (
    <form onSubmit={add}>
      <div><input name='txtContent'/></div>
      <button type='submit'>create</button>
    </form>
  )
}

const mapDispatchToProps = {
  addNew,
  setNotification
}

const ConnectedAnecdoteForm = connect(null, mapDispatchToProps)(AnecdoteForm)
export default ConnectedAnecdoteForm