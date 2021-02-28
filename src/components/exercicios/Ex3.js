import React, { useState } from 'react';

import '../../styles/Ex3.css';

const re = /\d+\.\d+/

function Aluno (nr){
  this.nr = nr;
  var _nota;
  
  this.setNota = (nota) =>  {_nota = Symbol(nota)};
  this.getNota = () => (re.exec(String(_nota)));
}

var register = [];

function populateRegister(){
  for(let i = 1; i < 21; i++){
    let a = new Aluno(i.toLocaleString('pt-BR', {
      style: "decimal",
      minimumIntegerDigits: 6,
      useGrouping: false
    }));
    a.setNota((Math.random() * 101).toFixed(2));
    register.push(a);
  }
}

export default function Ex3(){
  const [generateTable, setGenerateTable] = useState({
    generate: false,
    aproved: 0,
    reproved: 0
  });

  const handleGenerateTable = () => {
    let aprovados = 0;
    let reprovados = 0;

    register.forEach(student => {
      parseFloat(student.getNota()) >= 60.0 ? aprovados++ : reprovados++;
    })
    
    setGenerateTable({
      generate: true,
      aproved: aprovados,
      reproved: reprovados
    });
  }

  return (
    <div className="ex3-content" onLoad={register.length < 20 ? populateRegister() : null}>
      <p className="ex3-title">Gerar relatório para a turma de javascript</p>
      <div className="ex3-button-container">
        <button 
          type="submit" 
          className="ex3-button"
          onClick={() => handleGenerateTable()}
        >
          Mostrar relatório
        </button>
      </div>
      {generateTable.generate && (
        <div className="ex3-table-container">
          <table className="ex3-table">
            <thead>
              <tr>
                <th>Aluno</th>
                <th>Nota</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {register.map((student) => (
                <tr>
                  <td>{student.nr}</td>
                  <td>{student.getNota()}</td>
                  <td>{parseFloat(student.getNota()) >= 60 ? "APROVADO" : "REPROVADO"}</td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td>Resultados</td>
                <td>APROVADOS: {generateTable.aproved} ({(generateTable.aproved / 20 * 100).toFixed(2)}%)</td>
                <td>REPROVADOS: {generateTable.reproved} ({(generateTable.reproved / 20 * 100).toFixed(2)}%)</td>                
              </tr>
            </tfoot>
          </table>
        </div>
      )}
    </div>
  );
}