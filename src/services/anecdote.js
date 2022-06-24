import axios from 'axios'

const baseURL = 'http://localhost:3001/anecdotes'

const getAll = async () => {
  const res = await axios.get(baseURL)
  return res.data
}

const findOne = async (id) => {
  const res = await axios.get(`${baseURL}/${id}`)
  return res.data
}

const createNew = async (content) => {
  const res = await axios.post(baseURL, {content, votes: 0})
  return res.data
}

const addVote = async (id) => {
  try{
    const anecdote = await findOne(id)
    const updated = {...anecdote, votes: anecdote.votes +1}
    await axios.put(`${baseURL}/${id}`, updated)
    return updated
  }catch(err){
    console.log(err)
  }
}


export default {getAll, createNew, findOne, addVote}