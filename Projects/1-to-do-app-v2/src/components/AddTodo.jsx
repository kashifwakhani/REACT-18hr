import React, { useState } from "react";

const AddTodo = ({ onNewItem }) => {
  const [toDoName, settoDoName] = useState("");
  const [dueDate, setdueDate] = useState("");

  const handleNameChange = (event) => {
    settoDoName(event.target.value);
  };
  const handleDateChange = (event) => {
    setdueDate(event.target.value);
  };
  const handleAddButtonClicked = (name, date) => {
    onNewItem(toDoName, dueDate);
    settoDoName("");
    setdueDate("");
  };

  return (
    <div className="container">
      <div className="row kg-row">
        <div className="col-6">
          <input
            type="text"
            onChange={(event) => handleNameChange(event)}
            value={toDoName}
          />
        </div>
        <div className="col-4">
          <input
            type="date"
            onChange={(event) => handleDateChange(event)}
            value={dueDate}
          />
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success kg-button"
            onClick={handleAddButtonClicked}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddTodo;
