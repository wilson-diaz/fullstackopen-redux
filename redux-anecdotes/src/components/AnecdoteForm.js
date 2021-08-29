import { useDispatch } from 'react-redux'
import { addNew } from '../reducers/anecdoteReducer'

const AnecdoteForm = () => {
  const dispatch = useDispatch()

  const add = (e) => {
    e.preventDefault()
    dispatch(addNew(e.target.txtContent.value))
    e.target.txtContent.value = ''
  }

  return (
    <form onSubmit={add}>
      <div><input name='txtContent'/></div>
      <button type='submit'>create</button>
    </form>
  )
}

export default AnecdoteForm