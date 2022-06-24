import { createSlice } from "@reduxjs/toolkit"
import anecdoteService from "../services/anecdote"


const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers:{
    voteAnecdote(state, action){
      const id = action.payload

      const anecdoteToChange = state.find(n => n.id === id)
      const changedAnecdote = {
        ...anecdoteToChange,
        votes: anecdoteToChange.votes +1
      }
      const anecdotes = state.map(anec => 
        anec.id === id ? changedAnecdote : anec)

      anecdotes.sort((a,b) => (b.votes- a.votes))
      return anecdotes
    },
    pushAnecdote(state, action){
      const anecdote = action.payload
      state.push(anecdote)
    },
    setAnecdotes(state, action){
      return action.payload
    }
  }
})

export const {voteAnecdote, pushAnecdote, setAnecdotes} = anecdoteSlice.actions

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch(setAnecdotes(anecdotes))
  }
}

export const addAnecdote = (anecdote) => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.createNew(anecdote)
    dispatch(pushAnecdote(newAnecdote))
  }
}

export const addVote = (id) => {
  return async dispatch => {
    await anecdoteService.addVote(id)
    dispatch(voteAnecdote(id))
  }
}

export default anecdoteSlice.reducer