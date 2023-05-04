import { useState } from 'react';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Navbar from './Navber';
import Inscription from './Inscrir';
import HomeVue from './LandingPage';
import About from './about';
import Sidebar from './Sidebar';
import MainContent from './MainPage';
import ScanQrCode from './QrReader';

import MapContainer from './Map';
import Link3DModal from './Modal';
/*function App() {
  const [showInscription, setShowInscription] = useState(false);
  const [content, setContent] = useState('default');
  const [currentChoice, setCurrentChoice] = useState('option1');

  const toggleInscription = () => setShowInscription(!showInscription);

  const handleClick = () => {
    setContent('nouveau contenu');
    setShowInscription(!showInscription);
  };

  const handleChoiceSelect = (choice) => setCurrentChoice(choice);

  return (
    <div className="app-container">
      <div className="landing-page-container">
      {showInscription && (
        <div className="popup-container">
          <Inscription  onConnect={handleClick} />
        </div>
      )}
      {content === 'default' ? (
        <div>
        <Navbar />
        <HomeVue onSignUpClick={toggleInscription} />
        <About />
        <ScanQrCode/>
        </div>
      ) : (
        <div>
          <Sidebar  onChoiceSelect={handleChoiceSelect}/>
          <MainContent  currentChoice={currentChoice}/>
        </div>
      )}
   </div>    
    </div>
  );
}

export default App;*/

function App() {
  const [showInscription, setShowInscription] = useState(false);

  const toggleInscription = () => {
    setShowInscription(!showInscription);
  };
  const [content, setContent] = useState('default'); // le contenu initial est "default"
  
  const handleClick = () => {
    setContent('nouveau contenu'); // changer le contenu en cliquant sur le bouton
    setShowInscription(!showInscription);
  }

  const [currentChoice, setCurrentChoice] = useState("option1");

  function handleChoiceSelect(choice) {
    setCurrentChoice(choice);
  }
  return (
    <BrowserRouter>
 <Switch>
    <div className="app-container">
      <div className="landing-page-container">
      {showInscription && (
        <div className="popup-container">
          <Inscription  onConnect={handleClick} />
        </div>
      )}
      {content === 'default' ? (
        <div>
        <Navbar />
        <HomeVue onSignUpClick={toggleInscription} />
        <About />
        <ScanQrCode/>
        </div>
      ) : (
        <div>
          <Sidebar  onChoiceSelect={handleChoiceSelect}/>
          <MainContent  currentChoice={currentChoice}/>
        </div>
      )}
   </div>    
    </div>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
ReactDOM.render(
  <BrowserRouter basename="https://houssamna.github.io/PFA-4iir/">
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);