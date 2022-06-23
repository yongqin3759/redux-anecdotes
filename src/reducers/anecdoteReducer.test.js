import anecdoteReducer, {voteAnecdote, addAnecdote} from './anecdoteReducer'
import deepFreeze from 'deep-freeze'

describe('anecdoteReducer', () => {
  test('voting and sorting works with anecdotes/voteAnecdote', () => {
    const state = [{
      content:  'If it hurts, do it more often',
      votes: 2,
      id: 1
    },{
      content:  'Adding manpower to a late software project makes it later!',
      votes: 1,
      id: 2
    }]

    const action = {
      type: 'anecdotes/voteAnecdote',
      payload: 2
    }

    deepFreeze(state)

    const newState = anecdoteReducer(state, action)
    expect(newState[1].votes).toEqual(2)

    deepFreeze(newState)
    const newState1 = anecdoteReducer(newState, action)
    expect(newState1[0].votes).toEqual(3)
    expect(newState1).toContainEqual({
      content:  'Adding manpower to a late software project makes it later!',
      votes: 3,
      id: 2
    })
  })

  test('add anecdote', ()=> {
    const state = []

    deepFreeze(state)

    const action = {
      type: 'anecdotes/addAnecdote',
      payload: 'added anecdote'
    }
    const newState = anecdoteReducer(state, action)

    expect(newState).toHaveLength(1)
    expect(newState.map(s=> s.content)).toContainEqual(action.payload)
  })
})