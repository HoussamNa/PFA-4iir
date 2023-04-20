import React, { useState, useEffect } from "react";
import QrCode from "qrcode.react";
import "./static/TestQr.css";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";

const QuickLink = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [activeAddressType, setActiveAddressType] = useState("normal");
  const [selectedAddresses, setSelectedAddresses] = useState([]);
  const [qrData, setQrData] = useState("");
  const [currentLocation, setCurrentLocation] = useState(null);
  

  useEffect(() => {
    handleGetCurrentLocation();
  }, []);
  

  const normalAddresses = [
    {
      id: 1,
      address: "123 Main St, Anytown USA",
    },
    {
      id: 2,
      address: "456 Elm St, Anytown USA",
    },
    {
      id: 3,
      address: "789 Oak St, Anytown USA",
    },
  ];

  const handleGetCurrentLocation = () => {
    navigator.geolocation.watchPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setCurrentLocation({ latitude, longitude });
      },
      (error) => {
        console.error(error);
      }
    );
  };
  
  

  const businessAddresses = [
    {
      id: 1,
      address: "Acme Inc, 123 Main St, Anytown USA",
    },
    {
      id: 2,
      address: "Globex Corp, 456 Elm St, Anytown USA",
    },
    {
      id: 3,
      address: "Initech, 789 Oak St, Anytown USA",
    },
  ];

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const handleAddressTypeClick = (addressType) => {
    setActiveAddressType(addressType);
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
    const addresses = selectedAddresses.join("\n");
    const location = currentLocation
      ? `https://www.google.com/maps/search/?api=1&query=${currentLocation.latitude},${currentLocation.longitude}`
      : "";
    setQrData(`${addresses}\n\n${location}`);
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
            <div className="button-group">
              <button
                className={`address-type-button ${
                  activeAddressType === "normal" ? "active" : ""
                }`}
                onClick={() => handleAddressTypeClick("normal")}
              >
                Normal Addresses
              </button>
              <button
                className={`address-type-button ${
                  activeAddressType === "business" ? "active" : ""
                }`}
                onClick={() => handleAddressTypeClick("business")}
              >
                Business Addresses
              </button>
            </div>
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
            <button className="location-button" onClick={() => {
              handleGetCurrentLocation();
              navigator.geolocation.watchPosition(
                (position) => {
                  const { latitude, longitude } = position.coords;
                  setCurrentLocation({ latitude, longitude });
                },
                (error) => {
                  console.error(error);
                }
              );
            }}>
              Get Current Location
            </button>
            {currentLocation && (
              <div className="map-container">
                <iframe
                  src={`https://maps.google.com/maps?q=${currentLocation.latitude},${currentLocation.longitude}&output=embed`}
                  width="100%"
                  height="200"
                  frameBorder="0"
                  style={{ border: 0 }}
                  allowFullScreen
                ></iframe>
              </div>
            )}
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
            }  

export default QuickLink;

