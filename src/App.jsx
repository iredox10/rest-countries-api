import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import Country from './components/Country'
import { useContext } from 'react'
import { DarkMode } from './context/modeContext'

function App() {
  const {darkMode, setDarkMode} = useContext(DarkMode)
  return (
    <div className={darkMode ? 'dark:bg-dark-color' : ''}>
    <Router >
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/country/:id' element={<Country />}/>
      </Routes>
    </Router>
    </div>
  )
}

export default App
