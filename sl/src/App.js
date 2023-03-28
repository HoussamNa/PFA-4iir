import logo from './logo.svg';
import './App.css';
import './Navber';
import Navbar from './Navber';
import Inscription from './Inscrir';
import HomeVue from './LandingPage';
import About from './about';
import { useState } from 'react';

function App() {
  const [showInscription, setShowInscription] = useState(false);

  const toggleInscription = () => {
    setShowInscription(!showInscription);
  };

  return (
    <div className="app-container">
      <div className="landing-page-container">
        <Navbar />
        <HomeVue onSignUpClick={toggleInscription} />
        <About />
   
      </div>
      {showInscription && (
        <div className="popup-container">
          <Inscription />
        </div>
      )}
    </div>
  );
}

export default App;
