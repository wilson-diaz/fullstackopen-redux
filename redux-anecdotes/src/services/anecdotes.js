import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
  const resp = await axios.get(baseUrl)
  return resp.data
}

const createNew = async (content) => {
  const resp = await axios.post(baseUrl, { content, 'votes': 0 })
  return resp.data
}

const addVote = async (anecdote) => {
  const resp = await axios.put(`${baseUrl}/${anecdote.id}`, { 
    ...anecdote,
    votes: ++anecdote.votes
  })
  return resp.data
}

export default { getAll, createNew, addVote }