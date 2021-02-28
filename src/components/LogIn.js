import React, {useState} from 'react';

export default function LogIn({setLoggedUp, setLoggedIn, user, setUser}){
  const [password, setPassword] = useState("");

  const handleLogIn = () => {
    if(user === "") alert("Usuário não inserido");
    else if(password === "") alert("Senha não inserida");
    else{
      if(localStorage.getItem(user) === password){
        setLoggedIn(true);
      }
      else alert("Usuário não encontrado");
    }
  }

  return (
    <>
      <fieldset className="ex6-fieldset">
        <label>Usuário</label>
        <input 
          type="text" 
          id="user" 
          placeholder="..." 
          autoComplete="off"
          onInput={event => setUser(event.target.value)}
        ></input>

        <label>Senha</label>
        <input 
          type="password" 
          id="password" 
          placeholder="..." 
          autoComplete="off"
          onInput={event => setPassword(event.target.value)}
        ></input>
      </fieldset>
      <div className="ex6-blue-button-container">
        <button 
          type="submit" 
          className="ex6-blue-button"
          onClick={() => handleLogIn()}
        >
          Entrar
        </button>
      </div>
      <div className="ex6-bege-button-container">
        <button 
          type="submit" 
          className="ex6-bege-button"
          onClick={() => setLoggedUp(false)}
        >
          Cadastre-se
        </button>
      </div>
    </>
  );
}