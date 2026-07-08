import React from "react";
import TodoItem from "./TodoItem";
import styles from "./Todoitems.module.css";

const TodoItems = ({ todoItem }) => {
  return (
    <div className={styles["items-container"]}>
      {todoItem.map((item, index) => (
        <TodoItem key={index} todoDate={item.dueDate} todoName={item.name} />
      ))}
    </div>
  );
};

export default TodoItems;
