import React from "react";
import styles from "./Foodinput.module.css";
const Foodinput = () => {
  const handleonChangeEvent = (e) => {
    console.log(e.target.value);
  };
  return (
    <input
      type="text"
      className={styles.foodInput}
      placeholder="Enter food items "
      onChange={(e) => handleonChangeEvent(e)}
    />
  );
};

export default Foodinput;
