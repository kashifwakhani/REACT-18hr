import React from "react";
import styles from "./Foodinput.module.css";
const Foodinput = ({ handleOnchange }) => {
  return (
    <input
      type="text"
      className={styles.foodInput}
      placeholder="Enter food items "
      onChange={(e) => handleOnchange(e)}
    />
  );
};

export default Foodinput;
