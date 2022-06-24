import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { voteAnecdote , initAnecdotes} from '../reducers/anecdoteReducer'
import { setNotification, removeNotification } from '../reducers/notificationReducer'
import anecdoteService from '../services/anecdote'

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
  
  useEffect(() => {
    async function init(){
      const initialAnecdotes = await anecdoteService.getAll()
      dispatch(initAnecdotes(initialAnecdotes))
    }
    init()
  }, [dispatch])
  const vote = (id) => {
    dispatch(voteAnecdote(id))
    const anecdote = anecdotes.find(n => n.id === id)
    dispatch(setNotification('you voted ' + anecdote.content))
    setTimeout(()=>{
      dispatch(removeNotification())
    }, 5000)
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