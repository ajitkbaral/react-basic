import React, { Component } from 'react';

//Stateless Functional Component

const NavBar = ({ totalCounters }) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">Navbar</a>
            <span className="badge badge-pill badge-secondary">{totalCounters}</span>
        </nav>
    );
}

export default NavBar;