import React, { useState } from 'react';
import './Form.css'
import Card from './Card';

const Form = () => {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [showCard, setShowCard] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (input1.trim().length < 3 || input1.trim()[0] === ' ' || input2.length > 6) {
      alert('Por favor chequea que la información sea correcta');
    } else {
      setShowCard(true);
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="form">
        <label className="form-label">
          Primer Input:
          <input
            type="text"
            value={input1}
            onChange={(e) => setInput1(e.target.value)}
            className="form-input"
          />
        </label>
        <br />
        <label className="form-label">
          Segundo Input:
          <input
            type="text"
            value={input2}
            onChange={(e) => setInput2(e.target.value)}
            className="form-input"
          />
        </label>
        <br />
        <button type="submit" className="form-button">Enviar</button>
      </form>
      <br />
      {showCard && <Card input1={input1} input2={input2} />}
    </div>
  );
};

export default Form;