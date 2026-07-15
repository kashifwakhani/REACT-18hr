import { useState } from "react";

import "./App.css";
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";

import TodoItem from "./components/TodoItem";
import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/WelcomeMessage";
import TodoItemStore from "./store/TodoItemContext";
import TodoItemContext from "./store/TodoItemContext";

function App() {
  const initialTodDoItem = [
    {
      name: "Buy Milk",
      dueDate: "4/10/2026",
    },
    {
      name: "Go to college",
      dueDate: "4/10/2024",
    },
    {
      name: "Go to Gym",
      dueDate: "4/10/2026",
    },
  ];

  const [todoItems, setToDoItem] = useState([]);

  const addNewItem = (itemName, itemDueDate) => {
    setToDoItem((currvalue) => [
      ...currvalue,
      {
        name: itemName,
        dueDate: itemDueDate,
      },
    ]);
  };

  const deleteItem = (itemToDelete) => {
    const newTodoItems = todoItems.filter((items) => {
      return items.name !== itemToDelete;
    });

    setToDoItem(newTodoItems);
  };

  return (
    <>
      <TodoItemContext
        value={{
          todoItems,
          addNewItem,
          deleteItem,
        }}
      >
        <center className="todo-container">
          <AppName />
          <AddTodo />
          <WelcomeMessage />
          <TodoItems />
        </center>
      </TodoItemContext>
    </>
  );
}

export default App;
