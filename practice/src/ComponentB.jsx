import React, { useContext } from "react";
import { UserContext } from "./App";

function ComponentB() {
  const { formData, setFormData } = useContext(UserContext);

  return (
    <div className="form-container">
      <form>
        <input
          type="text"
          placeholder="Enter Your Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        <input
          type="email"
          placeholder="Enter Your Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <input
          type="tel"
          placeholder="Enter Your Mobile Number"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ComponentB;
