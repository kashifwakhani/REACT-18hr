import React from "react";
import styles from "./Item.module.css";

const Item = ({ foodItem, handleByButton, bought }) => {
  console.log(bought);
  const handleByButtonClicked = (foodItem) => {
    console.log(`${foodItem} has been clicked`);
  };
  return (
    <li className={`${styles.kgItem} list-group-item active`}>
      <span className={`${styles.kgSpan}`}>{foodItem}</span>

      <button
        onClick={(event) => handleByButton(foodItem)}
        className={`${styles.buttons} btn btn-success`}
      >
        Buy
      </button>
    </li>
  );
};

export default Item;
