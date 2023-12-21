import React from 'react';
import "./navbar.scss";
import logo from "../../assets/images/logo.png";
import { Link } from 'react-router-dom';

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
                    <Link to="/">Home</Link>
                    <Link to="about">About</Link>
                    <Link to="doctors">Doctors</Link>
                    <Link to="appointment">Appointments</Link>
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