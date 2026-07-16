import { useReducer, useState } from "react";

import "./App.css";
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";

import TodoItem from "./components/TodoItem";
import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/WelcomeMessage";
import TodoItemStore from "./store/TodoItemContext";
import TodoItemContext from "./store/TodoItemContext";
import TodoItemsContextProvider from "./store/TodoItemContext";

function App() {
  return (
    <>
      <TodoItemsContextProvider>
        <center className="todo-container">
          <AppName />
          <AddTodo />
          <WelcomeMessage />
          <TodoItems />
        </center>
      </TodoItemsContextProvider>
    </>
  );
}

export default App;
