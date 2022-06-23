import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addAnecdote } from '../reducers/anecdoteReducer'
import { notify, removeNotification, setNotification } from '../reducers/notificationReducer'

const NewAnecdote = (props) => {
  const [anecdote, setAnecdote] = useState('')
  const dispatch = useDispatch()

  const handleAddAnecdote = (e) => {
    e.preventDefault()
    dispatch(addAnecdote(anecdote))
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
