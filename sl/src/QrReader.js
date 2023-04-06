/*import React, { useState,useRef } from 'react';
import {QrReader,useQrReader }from 'react-qr-reader';
import './static/QRreader.css';
function ScanQrCode() {
 const [result, setResult] = useState(null);

  const handleScan = async (data) => {
    if (data) {
      try {
        const response = await fetch(data);
        const dataJson = await response.json();
        setResult(dataJson);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleError = (error) => {
    console.log(error);
  };

  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      const dataUrl = reader.result;
      
      setResult(dataUrl);
      
    };
    reader.readAsDataURL(file);
  };

  const openImageDialog = () => {
    document.getElementById("file-input").click();
  };

  return (
    <div>
      <button onClick={openImageDialog}>Sélectionner une image</button>
      <input
        type="file"
        accept="image/*"
        capture="camera"
        style={{ display: "none" }}
        onChange={handleFileInputChange}
        id="file-input"
      />
      <QrReader
        delay={300}
        onError={handleError}
        onScan={handleScan}
        style={{ display: "none" }}
        legacyMode={true}
        resolution={800}
        showViewFinder={false}
        ref={(node) => {
          if (node) {
            node.openImageDialog();
          }
        }}
      />
      {result && (
        <div className='hh'>
          <h2>hhhhhhhhhhhhhhhh</h2>
          <h2>{JSON.stringify(result, null, 2)}</h2>
          <p>{JSON.stringify(result, null, 2)}</p>
          <img src={result} alt={result.title} />
        </div>
      )}
    </div>
  );
  
}

export default ScanQrCode;*/
import React, { useRef, useState } from 'react';
import QrScanner from "qr-scanner";
import './static/QRreader.css'

function ScanQrCode() {
  const [file, setFile] = useState(null);
  const [data, setData] = useState(null);
  const fileRef=useRef();
  const handleClick =()=>{
    fileRef.current.click();
  };
  const handleChange =async(e)=>{
    const file = e.target.files[0];
setFile(file);
const result=await QrScanner.scanImage(file);

setData(result);
  };
 
return(
  
<div className='container'>
  <h2>scanner le code</h2>
 
  <button type="button" onClick={handleClick}>
scanne code qr
  </button>
  <input type="file"  accept="image/*"  onChange={handleChange} ref={fileRef} capture="camera"
        style={{ display: "none" }}/>
  <div>
    { file  && <img src={URL.createObjectURL(file)}  />  }
    {data && <p> data: {data}</p>}
  </div>

</div>

);

}
export default ScanQrCode;