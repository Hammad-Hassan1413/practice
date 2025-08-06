import React, { useState } from "react";

function Update() {
  const [foods, setFoods] = useState(["apple", "orange", "banana"]);

  function handleAddFood() {
    const newFood = document.getElementById("foodInput").value.trim();
    document.getElementById("foodInput").value = "";
    if (newFood === "") {
      alert("Please enter a food");
    } else {
      setFoods([...foods, newFood]);
    }
  }

  function handleRemoveFood(clickedFood) {
    setFoods(foods.filter((food) => food !== clickedFood));
  }

  return (
    <div>
      <h2>List of food</h2>
      <ol>
        {foods.map((food, i) => (
          <li
            key={i}
            onClick={() => handleRemoveFood(food)}
            style={{ cursor: "pointer" }}
          >
            {food}
          </li>
        ))}
      </ol>
      <input type="text" placeholder="enter a food name" id="foodInput" />
      <button onClick={handleAddFood}>Add Food</button>
    </div>
  );
}

export default Update;
