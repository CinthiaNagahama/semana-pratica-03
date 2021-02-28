import React, { useState } from 'react';

import '../../styles/Ex5.css';

export default function Ex5(){
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [c, setC] = useState(0);

  const handleInsertValue = (value, side) => {
    if(!isNaN(value) && value <= 0){
      alert("O lado precisa ser maior que 0");
    } else {
      switch(side){
        case "A":{
          setA(parseInt(value));
          break;
        }
        case "B":{
          setB(parseInt(value));
          break;
        }
        case "C":{
          setC(parseInt(value));
          break;
        }
        default:
          break;
      }
    }
  }

  const [triangleType, setTriangleType] = useState();

  const tryTriangle = () => {
    let condition1 = (Math.abs(b - c) < +a) && (+a < (+b + +c));
    let condition2 = (Math.abs(a - c) < +b) && (+b < (+a + +c));
    let condition3 = (Math.abs(a - b) < +c) && (+c < (+a + +b));

    if(condition1 && condition2 && condition3){
      if(a === b && b === c) setTriangleType("Equilátero");
      else if(a === b || a === c || b === c) setTriangleType("Isóceles");
      else setTriangleType("Escaleno");
    }
    else{
      setTriangleType(undefined);
    }
  }

  return (
    <div className="ex5-content">
      <p className="ex5-title">Classificador de triângulos</p>
      <fieldset className="ex5-fieldset">
        <label>Lado A</label>
        <input 
          type="number" 
          id="A" 
          placeholder="..." 
          autoComplete="off"
          min="0"
          onBlur={event => handleInsertValue(event.target.value, "A")}
        ></input>

        <label>Lado B</label>
        <input 
          type="number" 
          id="B" 
          placeholder="..." 
          autoComplete="off"
          min="0"
          onBlur={event => handleInsertValue(event.target.value, "B")}
        ></input>
        
        <label>Lado C</label>
        <input 
          type="number" 
          id="C" 
          placeholder="..." 
          autoComplete="off"
          min="0"
          onBlur={event => handleInsertValue(event.target.value, "C")}
        ></input>
      </fieldset>
      <div className="ex5-button-container">
        <button 
          type="submit" 
          className="ex5-button"
          onClick={() => tryTriangle()}
        >
          Verificar
        </button>
      </div>
      <div className="ex5-results">
        <p>{triangleType !== undefined ? `Triângulo ${triangleType}` : "Não é um triângulo"}</p>
      </div>
    </div>
  );
}