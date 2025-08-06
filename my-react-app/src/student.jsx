import React from "react";

function Person(props) {
  return (
    <div>
      <p> Name: {props.name} </p>
      <p>EyeColor: {props.eyeColor}</p>
      <p>Age : {props.age} </p>
      <hr></hr>
    </div>
  );
}

Person.defaultProps = {
  name: "Rahul",
  eyeColor: "deepblue",
  age: "45",
};

export default Person;
