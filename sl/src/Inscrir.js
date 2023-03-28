import React, { useState } from 'react';
import './Inscrir.css';
import Func from './T';

function Inscription() {
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [email, setEmail] = useState('');
  const [telephone, setTelephone] = useState('');
  const [motDePasse, setMotDePasse] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Nom:', nom);
    console.log('Prénom:', prenom);
    console.log('Email:', email);
    console.log('Téléphone:', telephone);
    console.log('Mot de passe:', motDePasse);
  };

  return (
    <div className="popup-form">
      <form onSubmit={handleSubmit}>
        <h3>S'inscrire</h3>
        <label>
          Nom :
          <input type="text" value={nom} onChange={(event) => setNom(event.target.value)} />
        </label>
        <label>
          Prénom :
          <input type="text" value={prenom} onChange={(event) => setPrenom(event.target.value)} />
        </label>
        <label>
          Email :
          <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
        </label>
        <label>
          Mot de passe :
          <input type="password" value={motDePasse} onChange={(event) => setMotDePasse(event.target.value)} />
        </label>
        <label>
          Confirmation :
          <input type="password" value={motDePasse} onChange={(event) => setMotDePasse(event.target.value)} />
        </label>
        <button type="submit">Valider</button>
      </form>
    </div>
  );
}

export default Inscription;
