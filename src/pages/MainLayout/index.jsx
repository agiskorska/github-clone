import React from 'react'
import { Outlet } from 'react-router-dom'
import { NavBar } from '../../components';
function index() {
  return (
    <div>
        <NavBar />
        <Outlet />
    </div>
  )
}

export default index