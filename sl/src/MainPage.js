import React, { useState } from 'react';
import TestQr from './TestQr';
import QuickLink from './QuickLink';
import './static/Mainp.css';
import ScanQrCode from './QrReader';
import MapContainer from './Map'
function MainContent(props) {
    const { currentChoice } = props;
  
    return (
      <div className='mainp'>
        {currentChoice === "option1" &&  <TestQr/>}
        {currentChoice === "option2" && <h2><ScanQrCode/></h2>}
        {currentChoice === "option3" && <h2><MapContainer/></h2>}
        {currentChoice === "option4" && <h2><QuickLink/></h2>}
      </div>
    );
  }
  export default MainContent;