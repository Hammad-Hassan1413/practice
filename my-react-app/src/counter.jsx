import React, { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);

  const incrementNumber = () => {
    setCounter(counter + 1);
  };

  const decrementNumber = () => {
    setCounter(counter - 1);
  };

  const reset = () => {
    setCounter(0);
  };
  return (
    <div className="main">
      <div className="counter">
        <h2>{counter}</h2>
      </div>
      <div className="counterButtons">
        <button className="increment" onClick={incrementNumber}>
          Increment Number
        </button>
        <button className="reset" onClick={reset}>
          Reset
        </button>
        <button className="decrement" onClick={decrementNumber}>
          Decrement Number
        </button>
      </div>
    </div>
  );
}

export default Counter;
