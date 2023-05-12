import React, { useState } from 'react';
import './static/About.css';
import Img1 from './resources/Img1.png';

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
        <h3>Description</h3>
        <p>
QuickLinker est une application web et mobile puissante qui vous permet de partager facilement vos informations de contact et votre 
emplacement avec d'autres personnes. Générez un QR code unique contenant toutes vos informations et partagez-le avec d'autres personnes. 
L'application est polyvalente et peut être utilisée dans divers contextes professionnels ou personnels.</p>
<span> Téléchargez 
l'application mobile QuickLinker ou accédez à l'application web dès maintenant pour partager vos informations rapidement et facilement.</span>
      </div>
      
    </section>
  );
}

export default About;
