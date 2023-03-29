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

  const handleClick=(e)=>{

    e.preventDefault()
    var inf={email:email,password:motDePasse,username:nom}
    console.log("hhhhhhhhhhh: "+{inf})

    fetch("http://localhost:8080/comptes/ajouter",
    {
      method:"POST",
      headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
      body:JSON.stringify(inf)
    }).then(()=>{
      console.log("New Account added")
    })
  }

  return (
    <div className="popup-form">
      <form onSubmit={handleSubmit}>
        <h3>S'inscrire</h3>
        <label>
          Nom d'utilisateur :
          <input type="text" value={nom} onChange={(event) => setNom(event.target.value)} />
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
        <button onClick={handleClick}>Valider</button>
      </form>
    </div>
  );
}

export default Inscription;
