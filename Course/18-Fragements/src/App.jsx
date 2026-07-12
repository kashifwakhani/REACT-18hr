import { useState } from "react";

import "./App.css";
import Fooditems from "./components/Fooditems";
import ErrorMessage from "./components/ErrorMessage";
import Container from "./components/Container";
import Foodinput from "./components/Foodinput";

function App() {
  const food = ["Apple", "Carrot", "Oats"];
  const [foodItems, setfoodItems] = useState(food);

  // const handleOnchange = (event) => {
  //   console.log(event.target.value);
  //   setfoodItems(event.target.value);
  // };

  const handleKeyDown = (event) => {
    if (event.key == "Enter") {
      let newFoodItem = event.target.value.trim();
      event.target.value = "";
      let newItems = [...foodItems, newFoodItem];
      setfoodItems(newItems);
    }
  };

  return (
    <>
      <Container>
        <h1 className="food-heading">Healthy Foods</h1>
        <ErrorMessage items={foodItems} />
        <Foodinput handleKeyDown={handleKeyDown} />
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
