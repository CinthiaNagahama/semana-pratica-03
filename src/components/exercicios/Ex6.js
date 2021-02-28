import React, { useState } from 'react';
import LogIn from '../LogIn';

import '../../styles/Ex6.css';
import LogUp from '../LogUp';
import LoggedIn from '../LoggedIn';

export default function Ex6(){
  const [loggedIn, setLoggedIn] = useState(false);
  const [loggedUp, setLoggedUp] = useState(true);

  const [user, setUser] = useState("");
  
  return (
    <div className="ex6-content">
      <p className="ex6-title">Simular um 'LogIn' e 'LogUp' de usuário</p>
      { 
        loggedUp && !loggedIn && 
          <LogIn 
            setLoggedUp={setLoggedUp} 
            setLoggedIn={setLoggedIn} 
            user={user} 
            setUser={setUser}
          /> 
      }
      { 
        !loggedUp && !loggedIn && 
          <LogUp setLoggedUp={setLoggedUp}/> 
      }
      { 
        loggedIn && 
          <LoggedIn user={user} setLoggedIn={setLoggedIn}/>
      }
    </div>
  );
}