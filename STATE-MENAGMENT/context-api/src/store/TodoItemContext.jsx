import React from "react";
import { createContext } from "react";

const TodoItemContext = createContext({
  todoItems: [],
  addNewItem: () => {},
  deleteItem: () => {},
});

export default TodoItemContext;
