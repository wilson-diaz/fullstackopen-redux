import { useDispatch, useSelector } from 'react-redux'
import { addVote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const AnecdoteList = () => {
  const dispatch = useDispatch()
  const state = useSelector(state => state)

  const vote = (id) => {
    dispatch(addVote(state.anecdotes.find(anec => anec.id ===id)))
    dispatch(setNotification(`You voted for '${state.anecdotes.find(anec => id === anec.id).content}'`, 5))
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