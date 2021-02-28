import React, { useState } from 'react';
import { Modal } from '../components/Modal';
import '../styles/Home.css'

import rocket from '../images/Rocket.png';

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
        <h3>por Cinthia Mie N. Ungefehr</h3>
      </header>

      <button className="card-button" onClick={openModal}>
        <img src={rocket} alt="foguete"/>
      </button>
      <Modal showModal={showModal} setShowModal={setShowModal} ex={1}/>
    </div>
  );
}