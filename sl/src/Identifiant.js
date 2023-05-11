import React from 'react';
import './static/Identifiant.css';

function IdentityCard({ data }) {
  const { nom, prenom, email, tel,dateNaissance,age, adresse } = data;
  
  return (
   
    <div className='identity-card'>
    <label>FULL NAME:</label>
      <input type="text" value={`${nom} ${prenom}`} disabled />
      <label>EMAIL:</label>
      <input type="email" value={email} disabled />
      <label>TEL:</label>
      <input type="tel" value={tel} disabled />
      <label>date:</label>
      <input type="text" value={dateNaissance} disabled />
      <label>age:</label>
      <input type="number" value={age} disabled />
      <label>Adresse:</label>
      <input type="text" value={adresse} disabled />
    </div>
   

  );
}

export default IdentityCard;

