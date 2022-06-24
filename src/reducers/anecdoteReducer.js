import { createSlice } from "@reduxjs/toolkit"


const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

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
    addAnecdote(state, action){
      const anecdote = action.payload
      state.push(anecdote)
    },
    initAnecdotes(state, action){
      return action.payload
    }
  }
})

export const {voteAnecdote, addAnecdote, initAnecdotes} = anecdoteSlice.actions
export default anecdoteSlice.reducer