/*import React, { useState } from "react";
import QrCode from "qrcode.react";
import "./static/TestQr.css";

const TestQr = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [activeAddressType, setActiveAddressType] = useState("normal");
  const [selectedAddresses, setSelectedAddresses] = useState([]);
  const [qrData, setQrData] = useState("");

  

 

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };



  const handleAddressSelect = (selectedAddress) => {
    if (selectedAddresses.includes(selectedAddress)) {
      setSelectedAddresses(
        selectedAddresses.filter((address) => address !== selectedAddress)
      );
    } else {
      setSelectedAddresses([...selectedAddresses, selectedAddress]);
    }
  };

  const handleGenerateQr = () => {
    setQrData(selectedAddresses.join("\n"));
  };

  return (
    <div className="test-qr">
      <button className="share-button" onClick={togglePopup}>
        Share
      </button>
      {showPopup && (
        <div className="popup">
          <div className="popup-inner">
            <button className="popup-close" onClick={togglePopup}>
              X
            </button>
           
            <ul className="popup-list">
              {activeAddressType === "normal"
                ? normalAddresses.map((address) => (
                    <li key={address.id}>
                      <label>
                        <input
                          type="checkbox"
                          checked={selectedAddresses.includes(address.address)}
                          onChange={() => handleAddressSelect(address.address)}
                        />
                        {address.address}
                      </label>
                    </li>
                  ))
                : businessAddresses.map((address) => (
                    <li key={address.id}>
                      <label>
                        <input
                          type="checkbox"
                          checked={selectedAddresses.includes(address.address)}
                          onChange={() => handleAddressSelect(address.address)}
                        />
                        {address.address}
                      </label>
                    </li>
                  ))}
            </ul>
            <button className="generate-button" onClick={handleGenerateQr}>
              Generate QR Code
            </button>
            {qrData && (
              <div className="qr-container">
                <QrCode value={qrData} />
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default TestQr;*/




  
import React, { useState,useRef } from 'react';
import QRCode from 'qrcode.react';
import "./static/TestQr.css";
import html2canvas from 'html2canvas';
import { saveAs } from 'file-saver';
import MapContainer from './Map';
import ImageUploader from './UploadeImages';
function TestQr() {
  const [formData, setFormData] = useState({});
  const [showPopup, setShowPopup] = useState(false);
  const [showQRCode, setShowQRCode] = useState(false);
  const [showPopup1, setShowPopup1] = useState(false);
  const qrRef = useRef(null);
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowQRCode(true);
  };
  const telecharher = (event) => {
    event.preventDefault();
    html2canvas(qrRef.current).then(function(canvas) {
      canvas.toBlob(function(blob) {
        saveAs(blob, "qr-code.png");
      });
    });
  };
  const F1 = (event) => {
    event.preventDefault();
    setShowQRCode(false);
    setShowPopup(false);
    
  };
  const F2 = (event) => {
    event.preventDefault();
    setShowPopup1(false);
    setShowPopup(true);
  };
  const F3 = (event) => {
    event.preventDefault();
    setShowPopup(false);
    setShowPopup1(true);
  };
  return (
    <div className="test-qr">
      <button onClick={() => setShowPopup(true)}  className="share-button" >ajouter un profile</button>
      {showPopup1 && (
             <div className="popup">
              <div className="popup-inner">
              <button className="popup-close" onClick={F2}>
              X
            </button>
            <MapContainer/>
              </div>
          
             </div>
          
            
            )}
      {showPopup && (
        
        <div className="popup">
        <div className="popup-inner">
        
          <form onSubmit={handleSubmit}>
          <button className="popup-close" onClick={F1}>
              X
            </button>
            <label>
              Nom :
              <input type="text" name="nom" onChange={handleInputChange} />
            </label>
            <label>
              Prenom :
              <input type="text" name="Prenom" onChange={handleInputChange} />
            </label>
            <label>
              email :
              <input type="text" name="email" onChange={handleInputChange} />
            </label>
            <label>
              Tel :
              <input type="text" name="Tel" onChange={handleInputChange} />
            </label>
            <label onClick={F3}>
              Adresse :
              </label>
              <input type="text" name="adresse" onChange={handleInputChange}  />
              
            <button type="submit"  className="generate-button">Générer le code QR</button>
          </form>
          <div ref={qrRef}>
          {showQRCode && <QRCode value={JSON.stringify(formData)}  onClick={telecharher} className="qr-container"/>}
          </div>
         
        </div>
        </div>
      
      )}
   

    </div>
  );
}

export default TestQr;

