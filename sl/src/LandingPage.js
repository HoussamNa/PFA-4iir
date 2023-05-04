import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './static/landingPage.css';

function HomeVue(props) {
  const handleSignUpClick = () => {
    props.onSignUpClick();
  };



  useEffect(() => {
    const animation = document.querySelector('.text-animation');
    animation.classList.add('start-animation');
  }, []);

  return (
    <div className="landing-page">
      <h1>Bienvenue sur <span class="text-animation">QuickLinker</span></h1>
      <p>Inscrivez-vous pour commencer</p>
      <button onClick={handleSignUpClick} className="signup-button">Commancer</button>
    </div>
  );
}

export default HomeVue;



