import React, { useState } from 'react';
import './About.css';
import Img1 from './Img1.png';

function About() {
  const [content, setContent] = useState('Bienvenue sur la page d\'accueil !');

  function handleContentClick() {
    setContent('Contenu différent pour Accueil !');
  }

  return (
    <section className="home" id="home">
      <div className="image">
        <img src={Img1} alt=""/>
      </div>
      <div className="content">
        <h3>Description, Anzidoha hna</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem sed autem vero? Magnam, est laboriosam!</p>
      </div>
    </section>
  );
}

export default About;
