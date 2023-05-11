import React, { useEffect } from 'react';
import Navbar from './Navber';
import HomeVue from './LandingPage';
import About from './about';
import ScanQrCode from './QrReader';

function Main(props) {
  const toggleInscription = () => {
    props.onSignUpClick1();
  };



  return (
    <div >
       <Navbar />
        <HomeVue onSignUpClick={toggleInscription} />
        <About />
        <ScanQrCode/>
    </div>
  );
}

export default Main;



