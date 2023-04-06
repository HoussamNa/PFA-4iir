import React, { useState } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
const MapContainer = ({ google }) => {
  const [markerPosition, setMarkerPosition] = useState(null);
  const [activeMarker, setActiveMarker] = useState(null);
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [address, setAddress] = useState('');

  const onMapClicked = (mapProps, map, clickEvent) => {
    const { latLng } = clickEvent;
    setMarkerPosition(latLng);
    getAddressFromLatLng(latLng);
  };

  const onMarkerClick = (props, marker) => {
    setActiveMarker(marker);
    setSelectedPlace(props.name);
  };

  const onInfoWindowClose = () => {
    setActiveMarker(null);
    setSelectedPlace(null);
  };

  const onAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const onAddressSubmit = (event) => {
    event.preventDefault();
    getAddressFromAddressString(address);
  };

  const getAddressFromAddressString = (addressString) => {
    const geocoder = new google.maps.Geocoder();
    geocoder.geocode({ address: addressString }, (results, status) => {
      if (status === 'OK') {
        const { location } = results[0].geometry;
        setMarkerPosition(location);
      } else {
        console.error('Geocode was not successful for the following reason:', status);
      }
    });
  };

  const getAddressFromLatLng = (latLng) => {
    const geocoder = new google.maps.Geocoder();
    geocoder.geocode({ location: latLng }, (results, status) => {
      if (status === 'OK') {
        setAddress(results[0].formatted_address);
      } else {
        console.error('Geocode was not successful for the following reason:', status);
      }
    });
  };

  return (
    <div>
      <form onSubmit={onAddressSubmit}>
        <input type="text" value={address} onChange={onAddressChange} />
        <button type="submit">Chercher</button>
      </form>

      <Map
        google={google}
        onClick={onMapClicked}
        style={{ height: '500px', position: 'relative', width: '100%' }}
        initialCenter={{ lat: 48.856614, lng: 2.3522219 }}
        zoom={12}
      >
        {markerPosition && (
          <Marker
            position={markerPosition}
            onClick={onMarkerClick}
            name={address}
          />
        )}
        <InfoWindow
          marker={activeMarker}
          onClose={onInfoWindowClose}
          visible={Boolean(activeMarker)}
        >
          <div>
            <h3>{selectedPlace}</h3>
          </div>
        </InfoWindow>
      </Map>
    </div>
  );
};
export default GoogleApiWrapper({
  apiKey: 'AIzaSyBgp_fpWY38WWNgUlo7xfCgnhCJ2A_Qy1M',
})(MapContainer);
//AIzaSyABuWIvTFcSEZmnaGRnS0HylI8Akz6Cvy0