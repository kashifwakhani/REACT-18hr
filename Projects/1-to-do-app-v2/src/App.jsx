import { useState } from "react";

import "./App.css";
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";

import TodoItem from "./components/TodoItem";
import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/WelcomeMessage";

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

  const [todoItem, setToDoItem] = useState(initialTodDoItem);

  const handleNewItem = (itemName, itemDueDate) => {
    const newItem = [
      ...todoItem,
      {
        name: itemName,
        dueDate: itemDueDate,
      },
    ];

    setToDoItem(newItem);
  };

  const handleItemDelete = (itemToDelete) => {
    const newTodoItems = todoItem.filter((items) => {
      return items.name !== itemToDelete;
    });

    setToDoItem(newTodoItems);
  };

  return (
    <>
      <center className="todo-container">
        <AppName />
        <AddTodo onNewItem={handleNewItem} />
        <WelcomeMessage todoItem={todoItem} />

        <TodoItems oncDeleteClicked={handleItemDelete} todoItem={todoItem} />
      </center>
    </>
  );
}

export default App;
