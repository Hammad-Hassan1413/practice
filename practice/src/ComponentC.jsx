import React, { useContext } from "react";
import { UserContext } from "./App";

function ComponentC() {
  const { formData } = useContext(UserContext);

  return (
    <div className="real-time">
      <h2>{`Name: ${formData.name}`}</h2>
      <h3>{`Email: ${formData.email}`}</h3>
      <h4>{`Contact Number: ${formData.phone}`}</h4>
    </div>
  );
}

export default ComponentC;
