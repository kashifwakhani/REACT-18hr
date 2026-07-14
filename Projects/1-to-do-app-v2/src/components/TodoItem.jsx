import React, { useState } from "react";
import styles from "./TodoItem.module.css";

const TodoItem = ({ todoDate, todoName, oncDeleteClicked }) => {
  // const [itemsNametoDelete, setitemsNametoDelete] = useState(todoName);
  // const [itemsNametoDelete, setitemsNametoDelete] = useState(todoDate);
  return (
    <div className="container">
      <div className="row kg-row">
        <div className="col-6 ">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button
            type="button"
            className={`btn btn-danger ${styles["kg-button"]}`}
            onClick={() => oncDeleteClicked(todoName)}
          >
            DELETE
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
