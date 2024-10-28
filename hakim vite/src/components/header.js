// src/components/Header.js
import React from 'react';
import Navigation from './Navigation';

const Header = () => (
    <header>
        <h1>Abdihakim Abdirahman</h1>
        <img src="/assets/avatar.jpg" alt="Hakim's Portfolio" className="avatar" />
        <Navigation />
    </header>
);

export default Header;
