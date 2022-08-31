import React from 'react'
import { Routes, Route } from 'react-router-dom'

import { NavBar, RepoCard } from './components'

function App() {
  return (
    <Routes>
        <Route path='/' element={<NavBar/>}>
            <Route path='/' element={<RepoCard/>}></Route>
        </Route>
        
    </Routes>
  )
}

export default App