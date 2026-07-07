import React from "react";
import styles from "./Item.module.css";

const Item = ({ foodItem }) => {
  console.log(styles);
  return (
    <li className={`${styles.kgItem} list-group-item`}>
      <span className={`${styles.kgSpan}`}>{foodItem}</span>
    </li>
  );
};

export default Item;
