import React, { useRef, useState } from "react";
import { IoIosAdd } from "react-icons/io";

const AddTodo = ({ onNewItem }) => {
  const todoNameElement = useRef();
  const dueDateElement = useRef();

  const handleAddButtonClicked = (event) => {
    event.preventDefault();
    const todoName = todoNameElement.current.value;
    const dueDate = dueDateElement.current.value;
    todoNameElement.current.value = "";
    dueDateElement.current.value = "";

    onNewItem(todoName, dueDate);
  };

  return (
    <div className="container">
      <form className="row kg-row" onSubmit={handleAddButtonClicked}>
        <div className="col-6">
          <input ref={todoNameElement} type="text" />
        </div>
        <div className="col-4">
          <input ref={dueDateElement} type="date" />
        </div>
        <div className="col-2">
          <button className="btn btn-success kg-button">
            <IoIosAdd />
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTodo;
