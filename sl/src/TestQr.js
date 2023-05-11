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

  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [tel, setTel] = useState('');
  const [date, setDate] = useState('');
  const [adresse, setAdresse] = useState('');



  const qrRef = useRef(null);
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowQRCode(true);
  };
  const telecharger = (event) => {
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


  const handleClick=(e)=>{
    if (e) {
      e.preventDefault();
    }
      
      var inf={age:age,ddn:date,email:email,nom:nom,prenom:prenom,tel:tel};
    
      fetch("http://localhost:8080/profils/ajouter",
      {
        method:"POST",
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
        body:JSON.stringify(inf)
      }).then(()=>{
        window.alert("New profile added");

       
      })

    }
   
  
 
  


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
    <input type="text" name="nom" onChange={(event) => { handleInputChange(event); setNom(event.target.value);}} />
  </label>
  <label>
    Prénom :
    <input type="text" name="prenom" onChange={(event) => { handleInputChange(event); setPrenom(event.target.value);}} />
  </label>
  <label>
    Email :
    <input type="email" name="email" onChange={(event) => { handleInputChange(event); setEmail(event.target.value);}} />
  </label>
  <label>
    Tel :
    <input type="tel" name="tel" onChange={(event) => { handleInputChange(event); setTel(event.target.value);}}/>
  </label>
  <label>
    Date de naissance :
    <input type="date" name="dateNaissance" onChange={(event) => { handleInputChange(event); setDate(event.target.value);}}/>
  </label>
  <label>
    Âge :
    <input type="number" name="age" onChange={(event) => { handleInputChange(event); setAge(event.target.value);}} />
  </label>
  <label onClick={F3}>
    Adresse :
  </label>
  <input type="text" name="adresse" onChange={(event) => { handleInputChange(event); setAdresse(event.target.value);}} />          
  <button type="submit"  className="generate-button">
    Générer le code QR
  </button>
</form>

          <div ref={qrRef}>
          {showQRCode && <QRCode value={JSON.stringify(formData)} onClick={(event) => {telecharger(event); handleClick(event);}} className="qr-container"/>}
          </div>
         
        </div>
        </div>
      
      )}
   

    </div>
  );
}

export default TestQr;

