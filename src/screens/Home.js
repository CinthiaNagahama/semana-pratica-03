import React, { useState } from 'react';
import { Modal } from '../components/Modal';

import rocket from '../images/Rocket.png';
import github from '../images/GitHub.png';

import '../styles/Home.css'

export default function Home(){
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(prev => !prev);
  }

  return (
    <div className="container">
      <header>
        <h4>Programação de Computadores III</h4>
        <h1>Semana de Prática 03</h1>
        <h3>
          por Cinthia Mie N. Ungefehr
          <a href="https://github.com/CinthiaNagahama/semana-pratica-03" target="blank">
            <img src={github} alt="GitHub"/>
          </a>
        </h3>
      </header>

      <div className="card-button-container">
        <button className="card-button" onClick={openModal}>
          <img src={rocket} alt="foguete"/>
        </button>
      </div>
      <Modal showModal={showModal} setShowModal={setShowModal} ex={1}/>
    </div>
  );
}