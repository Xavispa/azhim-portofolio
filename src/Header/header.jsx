import React from 'react';
import '../Header/Header.css'

function header(){

    return (
        <div className="header">
        <h1 className="logo">Azhim Firdaus</h1>
        <nav>
          <ul>
            <a href="#portfolio">Portfolio</a>
            <a href="#linkedin">LinkedIn</a>
            <a href="#contact">Contact</a>
          </ul>
        </nav>
      </div>
    )
}

export default header;