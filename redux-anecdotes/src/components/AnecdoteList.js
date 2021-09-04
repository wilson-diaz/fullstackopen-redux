import { useDispatch, useSelector } from 'react-redux'
import { addVote } from '../reducers/anecdoteReducer'
import { sendNewNotification, clearNotification } from '../reducers/notificationReducer'

const AnecdoteList = () => {
  const dispatch = useDispatch()
  const state = useSelector(state => state)

  const vote = (id) => {
    dispatch(addVote(id))
    dispatch(sendNewNotification(`You voted for '${state.anecdotes.find(anec => id === anec.id).content}'`))
    setTimeout(() => dispatch(clearNotification()), 5000)
  }

  return (
    state.anecdotes
      .filter(anec => anec.content.toLowerCase().indexOf(state.anecFilter.toLowerCase()) !== -1)
      .sort((a, b) => b.votes - a.votes)
      .map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      )  
  )
}

export default AnecdoteList