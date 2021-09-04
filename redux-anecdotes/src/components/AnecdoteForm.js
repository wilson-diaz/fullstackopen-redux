import { useDispatch } from 'react-redux'
import { addNew } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const AnecdoteForm = () => {
  const dispatch = useDispatch()

  const add = async (e) => {
    e.preventDefault()
    const content = e.target.txtContent.value
    e.target.txtContent.value = ''
    dispatch(addNew(content))

    dispatch(setNotification(`You added '${content}'`, 5))
  }

  return (
    <form onSubmit={add}>
      <div><input name='txtContent'/></div>
      <button type='submit'>create</button>
    </form>
  )
}

export default AnecdoteForm