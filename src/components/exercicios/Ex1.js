import React, { useState } from 'react';
import '../../styles/ExStyle.css';
import '../../styles/Ex1.css';

export default function Ex1(){
  const [minValue, setMinValue] = useState();
  const [maxValue, setMaxValue] = useState();
  const [inBetween, setInBetween] = useState({
    count: 0,
    values: []
  });

  const handleNewMinValue = value => {
    if(value >= maxValue){
      alert("Valor mínimo deve ser menor que o valor máximo");
    } else {
      setMinValue(parseInt(value));
    }
  }

  const handleNewMaxValue = value => {
    if(value <= minValue){
      alert("Valor máximo deve ser maior que o valor mínimo");
    } else {
      setMaxValue(parseInt(value));
    }
  }

  const handleInBetween = _ => {
    if(isNaN(minValue) && isNaN(maxValue)){
      alert("Nenhum valor definido");
    }
    else if(isNaN(minValue)){
      alert("Valor mínimo não definido");
    }
    else if(isNaN(maxValue)){
      alert("Valor máximo não definido");
    }
    else{
      let temp = {
        count: 0,
        values: []
      }
      let i = minValue;
      for(i++; i < maxValue; i++){
        if(i % 6 === 0){
          temp.count++;
          temp.values.push(i);
        }
      }
      setInBetween(temp);
    }
  }

  return(
    <div className="ex1-content">
      <p className="ex1-title">Encontre os múltiplos de 2 e 3 entre dois valores</p>
      <fieldset className="ex1-fieldset">
        <label>Valor mínimo</label>
        <input 
          type="number" 
          id="min-value" 
          placeholder="..." 
          autoComplete="off"
          onBlur={event => handleNewMinValue(event.target.value)}
        ></input>

        <label>Valor máximo</label>
        <input 
          type="number" 
          id="max-value" 
          placeholder="..." 
          autoComplete="off"
          onBlur={event => handleNewMaxValue(event.target.value)}
        ></input>
      </fieldset>
      <div className="ex1-button-container">
        <button 
          type="submit" 
          className="ex1-button"
          onClick={() => handleInBetween()}
        >
          Calcular
        </button>
      </div>
      <div className="ex1-results">
        <p id="ex1-count-results">
          Existem {inBetween.count} valores múltiplos de 2 e 3 entre {isNaN(minValue) ? "_" : minValue} e {isNaN(maxValue) ? "_" : maxValue}.
        </p>
        {
          inBetween.count === 1 ? (
            <p id="ex1-values-results">Esse valor é: {inBetween.values}</p>
          ) : (
            inBetween.count > 1 ? (
              <p id="ex1-values-results">Esses valores são: {inBetween.values.join(", ")}</p>
            ) : (
              null
            )
          )
        } 
      </div>
    </div>
  );
}