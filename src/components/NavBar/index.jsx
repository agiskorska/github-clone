import React from 'react';
import { NavLink, Outlet } from 'react-router-dom'

function NavBar () {
    return(
        <div>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/'>About</NavLink>
            <NavLink to='/'>Github</NavLink>
            <Outlet />
        </div>
    )
   
}

export default NavBar;