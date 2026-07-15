import React from "react";
import { useContext } from "react";
import TodoItemContext from "../store/TodoItemContext";

const WelcomeMessage = () => {
  const { todoItems } = useContext(TodoItemContext);

  return todoItems.length == 0 && <p>Enjoy your Day</p>;
};

export default WelcomeMessage;
