import React, { Component } from 'react';
import { Link } from 'react-router'

export default () => {
    return(
        <nav className="navbar">
            <div className="container-fluid">
                <div className="navbar-header">
                    
                    <Link to="/" className="navbar-brand">Red Dice</Link>
                </div>

                <div className="collapse navbar-collapse">
                <ul className="nav navbar-nav navbar-right">
                    <li><Link to="/signup">Sign Up</Link></li>
                </ul>
            </div>
            </div>
        </nav>

    )
    
}