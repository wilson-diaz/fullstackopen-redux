import anecdoteService from '../services/anecdotes'

const anecdotesAtStart = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

const initialState = anecdotesAtStart.map(asObject)

const anecdoteReducer = (state = [], action) => {
  console.log('state now: ', state)
  console.log('action', action)
  switch (action.type) {
    case 'VOTE': {
      return state.map(anec => anec.id === action.data.id ? action.data : anec)
    }
    case 'ADD_NEW':
      return [...state, action.data]
    case 'INIT_ANECS':
      return action.data
    default: return state
  }
}

export const addVote = (anecdote) => {
  return async dispatch => {
    const resp = await anecdoteService.addVote(anecdote)
    return dispatch({
      type: 'VOTE',
      data: resp 
    })
  }
}

export const addNew = (content) => {
  return async dispatch => {
    const resp = await anecdoteService.createNew(content)
    return dispatch({
      type: 'ADD_NEW',
      data: resp
    })
  }
}

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()

    return dispatch({
      type: 'INIT_ANECS',
      data: anecdotes
    })
  }
}

export default anecdoteReducer