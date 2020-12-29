import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './navbar.css'

const Navbar = () => {
    return (
        <div className="navWrapp">
            <nav className="navContainer">
                <ul>
                    <NavLink exact activeClassName="activeLink" className="link" to="/">Home</NavLink>
                    <NavLink exact activeClassName="activeLink" className="link" to="/todo">Todo</NavLink>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
