import React from 'react';
import './static/Identifiant.css';

function IdentityCard({ data }) {
  const { nom, Prenom, email, Tel, adresse } = data;
  
  return (
   
    <div className='identity-card'>
    <label>FULL NAME:</label>
      <input type="text" value={`${nom} ${Prenom}`} disabled />
      <label>EMAIL:</label>
      <input type="email" value={email} disabled />
      <label>TEL:</label>
      <input type="tel" value={Tel} disabled />
      <label>Adresse:</label>
      <input type="text" value={adresse} disabled />
    </div>
   

  );
}

export default IdentityCard;

