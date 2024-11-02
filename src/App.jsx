import { Routes, Route } from 'react-router-dom'

import './style/main.css'

import Footer from './Components/Footer'
import Home from './Pages/Home'
import CharacterPage from './Pages/Character'
import Error from './Pages/Error'
import Cheatsheet from './Pages/Cheatsheet'

function App() {

  return (
    <>
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/cheat" element={ <Cheatsheet /> } />
          <Route path="/:name" element={ <CharacterPage /> } />
          <Route path="/*" element={ <Error err="unknown" /> } />
        </Routes>
    </>
  )
}

export default App