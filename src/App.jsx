import React from 'react'
import { Routes, Route } from 'react-router-dom'

import { NavBar, RepoCard } from './components'
import { Display, Form, MainLayout } from './pages'

function App() {
  return (
    <Routes>
        <Route path='/' element={<MainLayout/>}>
            <Route path='/' element={<Display />}></Route>
            <Route path='/search' element={<Form />}></Route>
        </Route>
        
    </Routes>
  )
}

export default App