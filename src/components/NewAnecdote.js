import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addAnecdote } from '../reducers/anecdoteReducer'
import {  removeNotification, setNotification } from '../reducers/notificationReducer'
import anecdoteService from '../services/anecdote'

const NewAnecdote = (props) => {
  const [anecdote, setAnecdote] = useState('')
  const dispatch = useDispatch()

  const handleAddAnecdote = async (e) => {
    e.preventDefault()
    const newAnecdote = await anecdoteService.createNew(anecdote)
    dispatch(addAnecdote(newAnecdote))
    dispatch(setNotification('Anecdote Added'))
    setTimeout(()=>{
      dispatch(removeNotification())
    }, 5000)
    setAnecdote('')
  }

  return (
    <div>
      <h2>create new</h2>
      <form>
        <div>
          <input
            value={anecdote}
            onChange={(e) => {
              setAnecdote(e.target.value)
            }}
          />
        </div>
        <button onClick={handleAddAnecdote}>create</button>
      </form>
    </div>
  )
}

export default NewAnecdote
