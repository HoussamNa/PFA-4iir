import React, { useState } from 'react';
import './static/Navbar.css';
//import pos from './pos.jpg';


function Navbar() {
    const [content, setContent] = useState('Bienvenue sur la page d\'accueil !');

    function handleContentClick() {
      setContent('Contenu différent pour Accueil !');
    }
  return (
    <nav className='nav'>
      <ul>
        <li>
        
        </li>
        <li>
          <a href="/HomeVue" className="nav-link" onClick={handleContentClick}>Accueil</a>
        </li>
        <li>
          <a href="/About" className="nav-link">À propos</a>
        </li>
        <li>
          <a href="/mobileInfo" className="nav-link">Mobile App</a>
        </li>
        <li>
          <a href="/ScanQrCode" className="nav-link">Scanner</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

