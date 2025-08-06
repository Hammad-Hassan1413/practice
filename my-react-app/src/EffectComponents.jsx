import React, { useState, useEffect } from "react";

function EffectComponents() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("green");

  useEffect(() => {
    document.title = `Count: ${count}`;
  });
  function addCount() {
    setCount((c) => c + 1);
  }
  function subtractCount() {
    setCount((c) => c - 1);
  }
  function changeColor() {
    setColor((c) => (c === "green" ? "red" : "green"));
  }
  return (
    <>
      <p style={{ color: color }}>Count: {count}</p>
      <button onClick={addCount}>Add</button>
      <button onClick={subtractCount}>minus</button>
      <br></br>
      <button onClick={changeColor} type="color">
        change color
      </button>
    </>
  );
}

export default EffectComponents;
