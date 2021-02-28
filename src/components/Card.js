import React from 'react';
import './../styles/Card.css';

export default function Card(props){
  return (
    <div className="card">
      <div className="card-title">{props.title}</div>
      <div className="card-content">{props.children}</div>
    </div>
  );
}