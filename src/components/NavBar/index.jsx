import React from 'react';
import { NavLink } from 'react-router-dom';

import "./index.css"

function NavBar () {
    return(
        <div className='nav' >
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/search'>Search your repos</NavLink>
            <NavLink to='/'>Github</NavLink>
        </div>
    )
   
}

export default NavBar;