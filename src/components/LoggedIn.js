import React from 'react';

export default function LoggedIn({user, setLoggedIn}){
  return (
    <>
      <div className="ex6-results">
        <p>Bem vindo, {user}</p>
      </div>
      <div className="ex6-bege-button-container">
        <button 
          type="submit" 
          className="ex6-bege-button"
          onClick={() => setLoggedIn(false)}
        >
          Sair
        </button>
      </div>
    </>
  );
}