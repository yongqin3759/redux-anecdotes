import axios from 'axios'

const baseURL = 'http://localhost:3001/anecdotes'

const getAll = async () => {
  const res = await axios.get(baseURL)
  return res.data
}

const createNew = async (content) => {
  const res = await axios.post(baseURL, {content, votes: 0})
  return res.data
}


export default {getAll, createNew}