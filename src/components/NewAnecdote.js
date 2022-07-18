import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addAnecdote } from '../reducers/anecdoteReducer'
import {  notify } from '../reducers/notificationReducer'

const NewAnecdote = (props) => {
  const [anecdote, setAnecdote] = useState('')

  const handleAddAnecdote = async (e) => {
    e.preventDefault()
    props.addAnecdote(anecdote)
    props.notify('Anecdote Added', 5000)
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

export default connect(null, {addAnecdote, notify})(NewAnecdote)
