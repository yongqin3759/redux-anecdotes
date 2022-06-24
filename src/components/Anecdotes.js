import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {addVote} from '../reducers/anecdoteReducer'
import { notify } from '../reducers/notificationReducer'

const Anecdotes = (props) => {

  const anecdotes = useSelector(state => {
    const filter = state.filter.toLowerCase()
    if(filter === ''){
      return state.anecdotes
    }else{
      return state.anecdotes.filter(n => n.content.toLowerCase().includes(filter))
    }
  })
  const dispatch = useDispatch()
  
  const vote = (id) => {
    const anecdote = anecdotes.find(n => n.id === id)
    dispatch(addVote(id))
    dispatch(notify(`voted for ${anecdote.content}`, 5000))
  }

  return (
    <div>
      {anecdotes.map(anecdote =>
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
    </div>
  )
}

export default Anecdotes