import React, { createContext, useState } from "react";
import ComponentA from "./ComponentA";
import ComponentB from "./ComponentB";
import ComponentC from "./ComponentC";

export const UserContext = createContext();

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  return (
    <UserContext.Provider value={{ formData, setFormData }}>
      <div className="app-container">
        <ComponentA />
        <ComponentB />
        <ComponentC />
      </div>
    </UserContext.Provider>
  );
}

export default App;
