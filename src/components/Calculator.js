import React, { useState } from 'react';
import '../styles/Calculator.css';
import Screen from './Screen';
import Button from './Button';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [result, setResult] = useState(0);
  const buttons = [
    { value: 'AC', class: null, id: null },
    { value: '+/-', class: null, id: null },
    { value: '%', class: null, id: null },
    { value: '÷', class: 'orange-button', id: null },
    { value: '7', class: null, id: null },
    { value: '8', class: null, id: null },
    { value: '9', class: null, id: null },
    { value: 'x', class: 'orange-button', id: null },
    { value: '4', class: null, id: null },
    { value: '5', class: null, id: null },
    { value: '6', class: null, id: null },
    { value: '-', class: 'orange-button', id: null },
    { value: '1', class: null, id: null },
    { value: '2', class: null, id: null },
    { value: '3', class: null, id: null },
    { value: '+', class: 'orange-button', id: null },
    { value: '0', class: null, id: 'zero' },
    { value: '.', class: null, id: null },
    { value: '=', class: 'orange-button', id: null },
  ];
  const handleClick = (e) => {
    setResult((obj) => calculate(obj, e.target.innerText));
  };
  return (
    <div id="calculator-body">
      <div id="calculator-screen">
        <Screen result={result.next || result.total || '0'} />
      </div>
      <div id="calculator-buttons">
        {buttons.map((button) => (
          <Button key={button.value} button={button} handleClick={handleClick} />
        ))}
      </div>
    </div>
  );
};

export default Calculator;
