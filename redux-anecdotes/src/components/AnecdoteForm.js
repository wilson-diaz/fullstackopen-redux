import { useDispatch } from 'react-redux'
import { addNew } from '../reducers/anecdoteReducer'
import anecdoteService from '../services/anecdotes'
import { sendNewNotification, clearNotification } from '../reducers/notificationReducer'

const AnecdoteForm = () => {
  const dispatch = useDispatch()

  const add = async (e) => {
    e.preventDefault()
    const content = e.target.txtContent.value
    e.target.txtContent.value = ''

    const resp = await anecdoteService.createNew(content)
    dispatch(addNew(resp))

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