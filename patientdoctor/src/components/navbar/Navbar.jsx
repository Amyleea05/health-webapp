import React from 'react';
import "./navbar.scss";
import logo from "../../assets/images/logo.png";
import { Link, NavLink } from 'react-router-dom';

function Navbar() {

    return (
        <header className='header'>

            <div className="logo-container">
                <div className="logo">
                    <img src={logo} alt="logo-img" />
                    <h1>WeHealthy</h1>
                </div>
            </div>

            <nav className="navbar">
                <ul className="nav-container">
                    <NavLink exact to="/" activeClassName="active-link">
                        Home
                    </NavLink>
                    <NavLink to="/about" activeClassName="active-link">
                        About
                    </NavLink>
                    <NavLink to="/doctors" activeClassName="active-link">
                        Doctors
                    </NavLink>
                    <NavLink to="/appointment" activeClassName="active-link">
                        Appointments
                    </NavLink>
                </ul>
                <div className="button-container">
                    <Link>Sign In</Link>
                    <Link>Sign Up</Link>
                </div>
            </nav>
        </header>
    )
}

export default Navbar;