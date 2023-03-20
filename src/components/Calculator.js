import React from 'react';
import './style/Calculator.css';
import Screen from './Screen';

const Calculator = () => (
  <div id="calculator-body">
    <Screen />
    <div id="calculator-buttons">
      <button type="button">AC</button>
      <button type="button">+/-</button>
      <button type="button">%</button>
      <button type="button" className="orange-button">
        ÷
      </button>
      <button type="button">7</button>
      <button type="button">8</button>
      <button type="button">9</button>
      <button type="button" className="orange-button">
        x
      </button>
      <button type="button">4</button>
      <button type="button">5</button>
      <button type="button">6</button>
      <button type="button" className="orange-button">
        -
      </button>
      <button type="button">1</button>
      <button type="button">2</button>
      <button type="button">3</button>
      <button type="button" className="orange-button">
        +
      </button>
      <button type="button" id="zero">
        0
      </button>
      <button type="button">.</button>
      <button type="button" className="orange-button">
        =
      </button>
    </div>
  </div>
);

export default Calculator;
