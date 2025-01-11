import React from 'react';
import '../Header/Header.css'

function header(){

    return (
        <header className="header">
        <h1 className="title">Azhim Firdaus</h1>
        <nav className="left-navbar">
          <ul>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#linkedin">LinkedIn</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>
    )
}

export default header;