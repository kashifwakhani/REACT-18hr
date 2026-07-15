import React from "react";
import TodoItem from "./TodoItem";

const TodoItems = ({ todoItem, oncDeleteClicked }) => {
  return (
    <div className="items-container">
      {todoItem.map((items, index) => (
        <TodoItem
          oncDeleteClicked={oncDeleteClicked}
          key={index}
          todoDate={items.dueDate}
          todoName={items.name}
        />
      ))}
    </div>
  );
};

export default TodoItems;
