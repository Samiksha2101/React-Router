import React from 'react'
import {  NavLink, useNavigate } from 'react-router-dom'

function Navbar() {
    const navigate = useNavigate()
  return (
    <div className='navbar'>
        <img src={null} alt=''></img>
        <ul>
            <NavLink to='/'><li>Home</li></NavLink>
            <NavLink to={'/products'}> <li>Products</li></NavLink>
            <NavLink to='/about'><li>About</li></NavLink>
            <NavLink to={'/contact'}><li>Contacts</li></NavLink>
            <NavLink to={'/jobs'}><li>Jobs</li></NavLink>
        </ul>
        <button onClick={()=>navigate('/about',{replace:true})}>Get Started</button>
    </div>
  )
}

export default Navbar