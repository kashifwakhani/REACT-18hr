import React from "react";
import styles from "./Item.module.css";

const Item = ({ foodItem, handleByButton }) => {
  const handleByButtonClicked = (foodItem) => {
    console.log(`${foodItem} has been clicked`);
  };
  return (
    <li className={`${styles.kgItem} list-group-item`}>
      <span className={`${styles.kgSpan}`}>{foodItem}</span>
      <button
        // onClick={() => handleByButtonClicked(foodItem)}
        onClick={(event) => handleByButton(foodItem)}
        className={`${styles.buttons} btn btn-success`}
      >
        Click
      </button>
    </li>
  );
};

export default Item;
