import { useState } from "react";

import "./App.css";
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";

import TodoItem from "./components/TodoItem";
import TodoItems from "./components/TodoItems";

function App() {
  let todoName = "Buy milk";
  let todoDate = "12/12/12";

  const todoItem = [
    {
      name: "Buy Milk",
      dueDate: "4/10/2026",
    },
    {
      name: "Go to collegez",
      dueDate: "4/10/2022",
    },
    {
      name: "Go to collegez",
      dueDate: "4/10/2022",
    },
  ];
  return (
    <>
      <center className="todo-container">
        <AppName />
        <AddTodo />
        <TodoItems todoItem={todoItem} />
      </center>
    </>
  );
}

export default App;
