// src/components/Navbar.js

import React from 'react';
import './styles.css';

const Navbar = () => (
    <nav className="navbar">
        <div className="logo">My E-commerce</div>
        <div>
            <a href="/">Home</a>
            <a href="/login">Login</a>
            <a href="/register">Register</a>
            <a href="/cart">Cart</a>
        </div>
    </nav>
);

export default Navbar;
