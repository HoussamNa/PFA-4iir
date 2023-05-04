import React, { useState } from 'react';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import { FaSpinner ,FaUbuntu,FaRegEyeSlash} from 'react-icons/fa';
import './static/Inscrir.css'; // fichier CSS pour les transitions

function Inscription(props) {
  const [isLogin, setIsLogin] = useState(true);

  const handleSwitch = () => {
    setIsLogin(!isLogin);
  };
  const handleonConnect = () => {
    props.onConnect();
  };
  return (
    <div className="popup-form">
    <div className="auth-form">
        
      <SwitchTransition mode="out-in">
        <CSSTransition
          key={isLogin ? 'login' : 'signup'}
          classNames="form"
          timeout={500}
        >
          {isLogin ? (
            <LoginForm onSwitch={handleSwitch}  onClick={handleonConnect}/>
          ) : (
            <SignupForm onSwitch={handleSwitch} />
          )}
        </CSSTransition>
      </SwitchTransition>
      </div>
    </div>
  );
}



function LoginForm({ onSwitch ,onClick}) {
    ///
     const [isLoggedIn, setIsLoggedIn] = useState(false);
    ////
    const [nom, setNom] = useState('');
    const [motDePasse, setMotDePasse] = useState('');
    
    const handlePasswordChange = () => {
      const passwordInput = document.getElementById('password');
      passwordInput.type = 'text';
      setTimeout(function() {
        passwordInput.type = 'password';
      }, 5000);
    };
    //////////////
    const handleLogin = () => {
      if (nom === 'nacer' && motDePasse === 'nacer') {
        setIsLoggedIn(true);
        onClick();
      }else{
        window.alert("user or password  is not correct");
      }
    };
  
    ///////////
  return (
    
    <div className="login-form">
      
      <form>
      <div onClick={onSwitch}>
      <FaUbuntu className="spin" />
      <span>connxion...</span>
    </div>
      <h2>Se connecter</h2>
        <label>
          User Name:
          <input type="text" value={nom} onChange={(event) => setNom(event.target.value)} />
        </label>
        <label>
          Mot de passe :
          <FaRegEyeSlash className='icon' onClick={handlePasswordChange}/>
          <input id="password" type="password" value={motDePasse} onChange={(event) => setMotDePasse(event.target.value)} />
         
        </label>
        <button onClick={handleLogin}  >Se connecter</button>
        <label>
  <a class="Label1" href="#"  onClick={onSwitch}>Vous avez déja un compte ?</a>
</label>
        
  </form>
     
     
    </div>
  );
}

function SignupForm({ onSwitch }) {
    const [nom, setNom] = useState('');
   
    const [email, setEmail] = useState('');
   
    const [motDePasse, setMotDePasse] = useState('');
    const [confirmation, setConfirmation] = useState('');
  
    const handlePasswordChange = () => {
      const passwordInput = document.getElementById('password');
      passwordInput.type = 'text';
      setTimeout(function() {
        passwordInput.type = 'password';
      }, 5000);
    };
    const handlePasswordChange1 = () => {
      const passwordInput = document.getElementById('conf');
      passwordInput.type = 'text';
      setTimeout(function() {
        passwordInput.type = 'password';
      }, 5000);
    };

    const handleClick=(e)=>{
      const element = document.getElementById("password");
      const element1 = document.getElementById("conf");
   
        if(element.value===element1.value)
        {
        e.preventDefault()
        var inf={email:email,password:motDePasse,username:nom}
        console.log("hhhhhhhhhhh: "+{inf})
      
        fetch("http://localhost:8080/comptes/ajouter",
        {
          method:"POST",
          headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
          body:JSON.stringify(inf)
        }).then(()=>{
          window.alert("New Account added");
  
         
        })
      }else{
        window.alert("confirmation is not valide");
      }
     
    
   
    }



  return (
    <div className="signup-form">
   
      <form >
      <div onClick={onSwitch}>
      <FaSpinner className="spin" />
      <span>Inscription...</span>
    </div>
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
          <FaRegEyeSlash className='icon' onClick={handlePasswordChange}/>
          <input  id="password" type="password" value={motDePasse} onChange={(event) => setMotDePasse(event.target.value)} />
        </label>
        <label>
          Confirmation :
          <FaRegEyeSlash className='icon' onClick={handlePasswordChange1}/>
          <input  id="conf" type="password" value={confirmation} onChange={(event) => setConfirmation(event.target.value)} />
        </label>
        <button onClick={handleClick} >S'inscrire</button>
        <a class="Label1" href="#"  onClick={onSwitch}>Vous avez  déja un compte ?</a>
  </form>
    </div>

  );
}

export default Inscription;
