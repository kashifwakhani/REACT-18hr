import { useState } from "react";

import "./App.css";
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItem1 from "./components/TodoItem1";
import Todoitem2 from "./components/Todoitem2";

function App() {
  return (
    <>
      <center className="todo-container">
        <AppName />
        <AddTodo />
        <div className="items-container">
          <TodoItem1 />
          <Todoitem2 />
        </div>
      </center>
    </>
  );
}

export default App;
