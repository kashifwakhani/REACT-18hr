import React from "react";
import styles from "./Foodinput.module.css";

const Foodinput = ({ handleKeyDown }) => {
  return (
    <input
      type="text"
      className={styles.foodInput}
      placeholder="Enter food items "
      //   onChange={(e) => handleOnchange(e)}
      // onKeyDown={handleKeyDown(event)}
      onKeyDown={handleKeyDown}
    />
  );
};

export default Foodinput;
