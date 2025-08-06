import React, { useState, useEffect, useRef } from "react";

function Ref() {
  //   let [number, setNumber] = useState(0);
  const ref = useRef(0);
  useEffect(() => {
    console.log("Component Rendered");
  });
  function handleClick() {
    // setNumber((n) => n + 1);
    ref.current++;
    console.log(ref.current);
  }

  return <button onClick={handleClick}>Click me!</button>;
}

export default Ref;
