import React, { useState } from 'react';
import './Navbar.css';
//import pos from './pos.jpg';


function Navbar() {
    const [content, setContent] = useState('Bienvenue sur la page d\'accueil !');

    function handleContentClick() {
      setContent('Contenu différent pour Accueil !');
    }
  return (
    <nav>
      <ul>
        <li>
        
        </li>
        <li>
          <a href="#" className="nav-link" onClick={handleContentClick}>Accueil</a>
        </li>
        <li>
          <a href="#" className="nav-link">À propos</a>
        </li>
        <li>
          <a href="#" className="nav-link">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

