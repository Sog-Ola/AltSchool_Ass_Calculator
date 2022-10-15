import React from 'react';
import './App.css'

const App = () => {

  const [display, setDisplay] = React.useState("");
  const [expression, setExpression] = React.useState([]);

  const handleClick = (value) => {
    setDisplay(value);
    setExpression([...expression, value]);
  };

  const handleReset = () => {
    setDisplay('0')
    setExpression([])
  }

  const handleResult = () => {
    const result = expression
      .join("")
      .split(/(\D)/g)
      .map(value => (value.match(/\d/g) ? parseInt(value, 0) : value))
      .reduce((acc, value, index, array) => {
        switch (value) {
          case "+":
            return (acc = acc + array[index + 1]);
          case "-":
            return (acc = acc - array[index + 1]);
          case "x":
            return (acc = acc * array[index + 1]);
          case "÷":
            return (acc = acc / array[index + 1]);
          default:
            return acc;
        }
      });
    setDisplay(result);
    setExpression("");
  };  
  return (
    <div id='calculator'>
      <div id='display'>
        <div id='output'>{expression}</div>
        <input id='compiler' type='text' value={display} />
      </div>

      <div id='inputs'>
        <button class='btn' onClick={() => handleReset()} id='c'>C</button>
        <button onClick={() => handleClick('+')} class='btn'>+/-</button>
        <button onClick={() => {}} class='btn'>%</button>
        <button onClick={() => handleClick('÷')} class='btn'>&divide;</button>
        <button onClick={() => handleClick(7)} class='btn'>7</button>
        <button onClick={() => handleClick(8)} class='btn'>8</button>
        <button onClick={() => handleClick(9)} class='btn'>9</button>
        <button onClick={() => handleClick('x')} class='btn'>*</button>
        <button onClick={() => handleClick(4)} class='btn'>4</button>
        <button onClick={() => handleClick(5)} class='btn'>5</button>
        <button onClick={() => handleClick(6)} class='btn'>6</button>
        <button onClick={() => handleClick('-')} class='btn'>-</button>
        <button onClick={() => handleClick(1)} class='btn'>1</button>
        <button onClick={() => handleClick(2)} class='btn'>2</button>
        <button onClick={() => handleClick(3)} class='btn'>3</button>
        <button onClick={() => handleClick('+')} class='btn'>+</button>
        <button onClick={() => handleClick(0)} class='btn' id='zero'>0</button>
        <button onClick={() => {}} class='btn'>,</button>
        <button onClick={() => handleResult()} class='equals btn'> <span id='pink'>=</span> </button>
      </div>
    </div>
  );
}

export default App;