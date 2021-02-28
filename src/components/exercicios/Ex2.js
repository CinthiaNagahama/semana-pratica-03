import React, { useState } from 'react';

import '../../styles/Ex2.css';

function findFactorial(n){
  var res = 1;
  for(let i = 2; i <= n; i++){
    res *= i;
  }
  return res;
}

export default function Ex2(){
  const [num, setNum] = useState(0);
  const [factorial, setFactorial] = useState({
    fact: 1,
    execTime: 0.0
  });

  const handleNum = value => {
    setNum(parseInt(value));
  }

  const handleFactorial = _ => {
    var ini = Date.now();

    var temp = {
      fact: findFactorial(num),
      execTime: Date.now() - ini
    }
    setFactorial(temp);
  }

  return (
    <div className="ex2-content">
      <p className="ex2-title">Encontrar o fatorial de {num}</p>
      <fieldset className="ex2-fieldset">
        <label>Insira um valor</label>
        <input 
          type="number" 
          id="value" 
          placeholder="0" 
          autoComplete="off"
          onBlur={event => handleNum(event.target.value)}
        ></input>
      </fieldset>
      <div className="ex2-button-container">
        <button 
          type="submit" 
          className="ex2-button"
          onClick={() => handleFactorial()}
        >
          Calcular
        </button>
      </div>
      <div className="ex2-results">
        <p id="ex2-factorial-results">
          {num}! = {factorial.fact}
        </p>
        <p>
          Tempo de Execução: {factorial.execTime}ms
        </p>
      </div>
    </div>
  );
}