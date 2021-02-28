import React, {useRef, useEffect, useCallback, useState} from 'react';
import {useSpring, animated} from 'react-spring';
import {MdClose} from 'react-icons/md';
import {IoArrowForwardCircle, IoArrowBackCircle} from 'react-icons/io5';

import Card from './Card';

import Ex1 from './exercicios/Ex1';
import Ex2 from './exercicios/Ex2';
import Ex3 from './exercicios/Ex3';
import Ex4 from './exercicios/Ex4';
import Ex5 from './exercicios/Ex5';
import Ex6 from './exercicios/Ex6';

import '../styles/Modal.css'

export const Modal = ({showModal, setShowModal, ex}) => {
  const modalRef = useRef();

  const animationFromTop = useSpring({
    config: {
      duration: 250
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0%)` : `translateY(-100%)` 
  });

  const closeModal = e => {
    if(modalRef.current === e.target){
      setShowModal(false);
    }
  };

  const keyPress = useCallback(e => {
    if(e.key === 'Escape' && showModal){
      setShowModal(false);
    }
  }, [setShowModal, showModal]);

  useEffect(() => {
    document.addEventListener('keydown', keyPress);
    return () => document.removeEventListener('keydown', keyPress);
  }, [keyPress]);

  const [question, SetQuestion] = useState(ex);
  const goToNextQuestion = () => {
    SetQuestion(question + 1);
  };

  const goToPreviousQuestion = () => {
    SetQuestion(question - 1);
  };

  return (
    <>
      {showModal ? (
        <div className="modal-background" ref={modalRef} onClick={closeModal}>
          <animated.div style={animationFromTop}>
            <div className="modal-wrapper" showModal={showModal}>
              <div className="modal-content">
                <Card title={`Exercício ${question < 10 ? '0' + question : question}`}>
                  {question === 1 && <Ex1/>}
                  {question === 2 && <Ex2/>}
                  {question === 3 && <Ex3/>}
                  {question === 4 && <Ex4/>}
                  {question === 5 && <Ex5/>}
                  {question === 6 && <Ex6/>}
                </Card>
                <div className="modal-arrow-buttons-container">
                  {question > 1 ? (
                    <button 
                      className="modal-arrow-buttons"
                      onClick={() => goToPreviousQuestion()}
                    >
                      <IoArrowBackCircle/>
                    </button>
                  ) : null }

                  {question < 6 ? (
                    <button 
                      className="modal-arrow-buttons"
                      onClick={() => goToNextQuestion()}
                    >
                      <IoArrowForwardCircle/>
                    </button>
                  ) : null }
                </div>
              </div>
              <button 
                className="modal-close-button"
                onClick={() => setShowModal(prev => !prev)} 
              >
                <MdClose/>
              </button>
            </div>
        </animated.div>
      </div>
      ) : (
        null
      )}
    </>
  );
}
