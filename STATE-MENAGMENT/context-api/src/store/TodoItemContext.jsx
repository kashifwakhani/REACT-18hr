import React, { useReducer } from "react";
import { createContext } from "react";

export const TodoItemsContext = createContext({
  todoItems: [],
  addNewItem: () => {},
  deleteItem: () => {},
});
const todoItemsReducers = (currentTodoItems, action) => {
  let newTodoItems = currentTodoItems;
  if (action.type === "NEW_ITEM") {
    newTodoItems = [
      ...newTodoItems,
      {
        name: action.payload.itemName,
        dueDate: action.payload.itemDueDate,
      },
    ];
  } else if (action.type === "DELETE_ITEM") {
    newTodoItems = currentTodoItems.filter((item) => {
      item.name !== action.payload.itemName;
    });
  }
  return newTodoItems;
};

const TodoItemsContextProvider = ({ children }) => {
  const [todoItems, dispatchTodoItems] = useReducer(todoItemsReducers, []);

  const addNewItem = (itemName, itemDueDate) => {
    const newItemAction = {
      type: "NEW_ITEM",
      payload: { itemName, itemDueDate },
    };
    dispatchTodoItems(newItemAction);
  };

  const deleteItem = (toDoItemName) => {
    const deleteItemAction = {
      type: "DELETE_ITEM",
      payload: { itemName: toDoItemName },
    };
    dispatchTodoItems(deleteItemAction);
  };

  return (
    <TodoItemsContext
      value={{
        todoItems,
        addNewItem,
        deleteItem,
      }}
    >
      {children}
    </TodoItemsContext>
  );
};

export default TodoItemsContextProvider;
