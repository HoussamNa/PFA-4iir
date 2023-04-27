import { useState } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Navbar from './Navber';
import Inscription from './Inscrir';
import HomeVue from './LandingPage';
import About from './about';
import Sidebar from './Sidebar';
import MainContent from './MainPage';
import ScanQrCode from './QrReader';

function App() {
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
            <Inscription onConnect={handleClick} />
          </div>
        )}
        {content === 'default' ? (
          <div>
            <Navbar />
            <HomeVue onSignUpClick={toggleInscription} />
            <About />
            <ScanQrCode />
          </div>
        ) : (
          <div>
            <Sidebar onChoiceSelect={handleChoiceSelect} />
            <MainContent currentChoice={currentChoice} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
