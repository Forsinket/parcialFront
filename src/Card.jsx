import React from 'react';
import './Card.css';

const Card = ({ input1, input2 }) => {
  return (
    <div className="card">
      <h2 className="card-title">Información ingresada:</h2>
      <p className="card-info">Primer Input: {input1}</p>
      <p className="card-info">Segundo Input: {input2}</p>
    </div>
  );
};

export default Card;