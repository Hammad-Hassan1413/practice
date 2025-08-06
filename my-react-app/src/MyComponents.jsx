import React, { useState } from "react";
function MyComponents() {
  const [name, setName] = useState("Guest");

  const [age, setAge] = useState(0);

  const updateName = () => {
    setName("hammad");
  };

  const IncrementAge = () => {
    setAge(age + 1);
  };

  const DecrementAge = () => {
    setAge(age - 1);
  };

  return (
    <div>
      <p>
        Name: {name}
        <button onClick={updateName}>Set Name</button>
      </p>
      <p>
        IncrementAge: {age}
        <button onClick={IncrementAge}>Increment Age</button>
        <button onClick={DecrementAge}>Decrement Age</button>
      </p>
    </div>
  );
}

export default MyComponents;
