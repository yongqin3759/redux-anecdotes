import Anecdotes from './components/Anecdotes'
import Filter from './components/Filter'
import NewAnecdote from './components/NewAnecdote'
import Notification from './components/Notification'

const App = () => {
  return (
    <div>
      <h2>Anecdotes</h2>
      <Filter/>
      <Notification/>
      <Anecdotes/>
      <NewAnecdote/>
    </div>
  )
}

export default App