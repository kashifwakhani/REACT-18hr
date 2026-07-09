import { useState } from "react";

import "./App.css";
import Fooditems from "./components/Fooditems";
import ErrorMessage from "./components/ErrorMessage";
import Container from "./components/Container";
import Foodinput from "./components/Foodinput";

function App() {
  const foodItems = [
    "Apple",

    "Carrot",
    "Oats",
    "Brown Rice",
    "Quinoa",
    "Eggs",
    "Salmon",
    "Avocado",
    "Sweet Potato",
  ];

  return (
    <>
      <Container>
        <Container>
          <h1 className="food-heading">Healthy Foods</h1>
        </Container>
        <ErrorMessage items={foodItems} />
        <Foodinput />
        <Fooditems items={foodItems} />
      </Container>
      <Container>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
          maiores unde repellendus, necessitatibus ullam harum autem similique
          ut omnis perspiciatis. Incidunt soluta quidem repudiandae deleniti
          iure illo accusamus omnis ratione!
        </p>
      </Container>
    </>
  );
}

export default App;
