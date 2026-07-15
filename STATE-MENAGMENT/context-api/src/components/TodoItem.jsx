import React, { useContext, useState } from "react";
import styles from "./TodoItem.module.css";

import { MdDelete } from "react-icons/md";
import TodoItemContext from "../store/TodoItemContext";

const TodoItem = ({ todoDate, todoName }) => {
  const { todoItems, deleteItem } = useContext(TodoItemContext);
  return (
    <div className="container">
      <div className="row kg-row">
        <div className="col-6 ">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button
            type="button"
            className={`btn btn-danger ${styles["kg-button"]}`}
            onClick={() => deleteItem(todoName)}
          >
            <MdDelete />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
