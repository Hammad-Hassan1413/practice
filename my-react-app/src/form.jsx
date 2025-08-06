import React, { use, useState } from "react";

function Form() {
  const [name, setName] = useState("guest");
  const [quantity, setQuantity] = useState("1");
  const [userComment, setComment] = useState("");
  const [selectedOption, setOption] = useState("");
  const [shipping, setShipping] = useState("");

  function handleNameChange(e) {
    setName(e.target.value);
  }
  function handleOrderNumber(e) {
    setQuantity(e.target.value);
  }
  function handleUSerComment(e) {
    setComment(e.target.value);
  }
  function getUserOption(e) {
    setOption(e.target.value);
  }
  function handleShipping(e) {
    setShipping(e.target.value);
  }
  return (
    <div>
      <input value={name} onChange={handleNameChange}></input>
      <p>Name: {name}</p>

      <input type="number" value={quantity} onChange={handleOrderNumber} />
      <p>Quantity: {quantity}</p>

      <textarea value={userComment} onChange={handleUSerComment}></textarea>
      <p>userInstruction: {userComment}</p>

      <div>
        <select onChange={getUserOption}>
          <option>please select payment method</option>
          <option value={"Visa"}>Visa</option>
          <option value={"Express"}>Express</option>
          <option value={"EMI"}>EMI</option>
          <option value={"Master Card"}>Master Card</option>
        </select>
        <p>selected option: {selectedOption}</p>
      </div>
      <div>
        <label>
          <input
            type="radio"
            value="PickUp"
            checked={shipping === "Pickup"}
            onChange={handleShipping}
          ></input>
          Pickup
        </label>
        <label>
          <input
            type="radio"
            value="Delivery"
            checked={shipping === "Delivery"}
            onChange={handleShipping}
          ></input>
          Delivery
        </label>
        <p>Method: {shipping}</p>
      </div>
    </div>
  );
}

export default Form;
