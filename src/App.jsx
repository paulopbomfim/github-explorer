import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { User } from './pages/User'
import { NoMatch } from './pages/NoMatch'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={ <Home /> } />
        <Route path="/user" element={ <User /> } />
        <Route path="*" element={ <NoMatch /> } />
      </Routes>
    </div>
  )
}

export default App