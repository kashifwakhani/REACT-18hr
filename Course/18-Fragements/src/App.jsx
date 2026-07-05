import { useState } from "react";

import "./App.css";

function App() {
  const foodItems = [
    "Apple",
    "Banana",
    "Spinach",
    "Broccoli",
    "Carrot",
    "Oats",
    "Brown Rice",
    "Quinoa",
    "Almonds",
    "Walnuts",
    "Greek Yogurt",
    "Eggs",
    "Salmon",
    "Avocado",
    "Sweet Potato",
  ];
  return (
    <>
      <h1>Healthy Foods</h1>
      <ul className="list-group">
        {foodItems.map((data, index) => {
          return (
            <li key={index} className="list-group-item">
              {data}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default App;
