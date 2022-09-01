import React from 'react'
import { Routes, Route } from 'react-router-dom'

import { NavBar, RepoCard } from './components'
import { ReposProvider } from './contexts';
import { Display, Form, MainLayout } from './pages'

function App() {
  return (
    <ReposProvider>
      <Routes>
        <Route path='/' element={<MainLayout/>}>
            <Route path='/' element={<Display />}></Route>
            <Route path='/search' element={<Form />}></Route>
        </Route>
      </Routes>
    </ReposProvider>
  )
}

export default App