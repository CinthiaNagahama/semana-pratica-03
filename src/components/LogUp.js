import React, {useState} from 'react';

export default function LogUp({setLoggedUp}){
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const handleLogUp = () => {
    if(user === "") alert("Usuário não inserido");
    else if(password === "") alert("Senha não inserida");
    else{
      localStorage.setItem(user, password);
      alert("Usuário criado com sucesso");
      setLoggedUp(true);  
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
          onClick={() => handleLogUp()}
        >
          Cadastre-se
        </button>
      </div>
    </>
  );
}