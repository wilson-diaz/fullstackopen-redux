import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addVote, addNew } from './reducers/anecdoteReducer'

const App = () => {
  const anecdotes = useSelector(state => state)
  const dispatch = useDispatch()

  const vote = (id) => {
    dispatch(addVote(id))
  }

  const add = (e) => {
    e.preventDefault()
    dispatch(addNew(e.target.txtContent.value))
    e.target.txtContent.value = ''
  }

  return (
    <div>
      <h2>Anecdotes</h2>
      {anecdotes.sort((a, b) => b.votes - a.votes)
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
      )}
      <h2>create new</h2>
      <form onSubmit={add}>
        <div><input name='txtContent'/></div>
        <button type='submit'>create</button>
      </form>
    </div>
  )
}

export default App