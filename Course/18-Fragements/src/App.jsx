import { useState } from "react";

import "./App.css";
import Fooditems from "./components/Fooditems";
import ErrorMessage from "./components/ErrorMessage";

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
      <h1 className="food-heading">Healthy Foods</h1>
      <ErrorMessage items={foodItems} />
      <Fooditems items={foodItems} />
    </>
  );
}

export default App;
