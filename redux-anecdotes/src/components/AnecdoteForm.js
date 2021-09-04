import { useDispatch } from 'react-redux'
import { addNew } from '../reducers/anecdoteReducer'
import { sendNewNotification, clearNotification } from '../reducers/notificationReducer'

const AnecdoteForm = () => {
  const dispatch = useDispatch()

  const add = (e) => {
    e.preventDefault()
    const content = e.target.txtContent.value
    dispatch(addNew(content))
    e.target.txtContent.value = ''

    dispatch(sendNewNotification(`You added '${content}'`))
    setTimeout(() => dispatch(clearNotification()), 5000)
  }

  return (
    <form onSubmit={add}>
      <div><input name='txtContent'/></div>
      <button type='submit'>create</button>
    </form>
  )
}

export default AnecdoteForm