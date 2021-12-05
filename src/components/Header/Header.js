import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <div>
           <nav className="menu">
               <a href="/www.google.com">Home</a>
               <a href="/countries">Countries</a>
               <a href="/privacy">Privacy</a>
               <a href="/about">About</a>
           </nav>
        </div>
    );
};

export default Header;