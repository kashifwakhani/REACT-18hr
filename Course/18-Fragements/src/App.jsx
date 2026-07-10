import { useState } from "react";

import "./App.css";
import Fooditems from "./components/Fooditems";
import ErrorMessage from "./components/ErrorMessage";
import Container from "./components/Container";
import Foodinput from "./components/Foodinput";

function App() {
  const foodItems = ["Apple", "Carrot", "Oats"];

  const handleOnchange = (event) => {
    console.log(foodItems);
    foodItems.push(event.target.value);
  };

  return (
    <>
      <Container>
        <Container>
          <h1 className="food-heading">Healthy Foods</h1>
        </Container>
        <ErrorMessage items={foodItems} />
        <Foodinput handleOnchange={handleOnchange} />
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
