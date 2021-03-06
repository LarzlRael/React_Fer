import React from 'react'
import { Link, NavLink } from 'react-router-dom'
export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">

            <Link to="/" className="navbar-brand" href="#">Use Context</Link>

            <div className="collapse navbar-collapse" id="navbarNav">
                <div className="navbar-nav">
                    <NavLink exact activeClassName="active" className="nav-link" to="/" >Home </NavLink>

                    <NavLink exact activeClassName="active" className="nav-link" to="/login" >Login</NavLink>

                    <NavLink exact activeClassName="active" className="nav-link" to="/about" >About</NavLink>
                </div>
            </div>
        </nav>
    )
}
