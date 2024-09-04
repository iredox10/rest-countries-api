import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import Country from './components/Country'

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/country/:id' element={<Country />}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
