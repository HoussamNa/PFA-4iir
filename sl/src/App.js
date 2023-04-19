import logo from './resources/logo.svg';
import './static/App.css';
import './Navber';
import Navbar from './Navber';
import Inscription from './Inscrir';
import HomeVue from './LandingPage';
import About from './about';
import { useState } from 'react';
import { BrowserRouter, Switch, Route, Link, Routes } from 'react-router-dom';
import Sidebar from './Sidebar';
import MainContent from './MainPage';
import ScanQrCode from './QrReader';
import MapContainer from './Map';
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

export default App;
