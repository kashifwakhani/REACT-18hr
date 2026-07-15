import React from "react";
import TodoItem from "./TodoItem";
import { useContext } from "react";
import TodoItemContext from "../store/TodoItemContext";

const TodoItems = ({ oncDeleteClicked }) => {
  const { todoItems, deleteItem } = useContext(TodoItemContext);

  return (
    <div className="items-container">
      {todoItems.map((items, index) => (
        <TodoItem
          oncDeleteClicked={deleteItem}
          key={index}
          todoDate={items.dueDate}
          todoName={items.name}
        />
      ))}
    </div>
  );
};

export default TodoItems;
