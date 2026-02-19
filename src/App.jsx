
import Home from './pages/Home'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css'

function App() {

  return (
    <div className="App">
      <Router>
         <Home />
         <Routes>
           <Route path="/" />
         </Routes>
      </Router>
       
    </div>
  )
}

export default App
