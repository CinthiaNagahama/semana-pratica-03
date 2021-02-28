import React, { useState } from 'react';

import '../../styles/Ex4.css';

export default function Ex4(){
  const [minValue, setMinValue] = useState();
  const [maxValue, setMaxValue] = useState();
  const [quantity, setQuantity] = useState();
  const [array, setArray] = useState();

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

  const handleNewQuantity = value => {
    if(isNaN(minValue) && isNaN(maxValue)){
      alert("Valores mínimo e máximos não definidos");
    }
    else if(isNaN(minValue)){
      alert("Valor mínimo não definido");
    }
    else if(isNaN(maxValue)){
      alert("Valor máximo não definido");
    }
    else if(value > (maxValue - minValue + 1)){
      alert(`A quantidade de números deve ser menor ou igual a ${maxValue - minValue + 1}`);
    } else {
      setQuantity(value);
    }
  }

  const generateArray = () => {
    let set = new Set();
    while(set.size < quantity){
      set.add(Math.floor(Math.random() * maxValue + minValue));
    }
    let tempArray = Array.from(set);
    tempArray.sort((a, b) => a - b);
    setArray(tempArray);
  }
  
  return (
    <div className="ex4-content">
      <p className="ex4-title">Gerar um array de valores aleatórios e não repetidos</p>
      <fieldset className="ex4-fieldset">
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
        
        <label>Quantidade de Números</label>
        <input 
          type="number" 
          id="values-quantity" 
          placeholder="..." 
          autoComplete="off"
          onBlur={event => handleNewQuantity(event.target.value)}
        ></input>
      </fieldset>
      <div className="ex4-button-container">
        <button 
          type="submit" 
          className="ex4-button"
          onClick={() => generateArray()}
        >
          Gerar
        </button>
      </div>
      { array !== undefined &&
        <div className="ex4-results">
          <p>[{array?.join(", ")}]</p>
        </div>
      }
    </div>
  );
}