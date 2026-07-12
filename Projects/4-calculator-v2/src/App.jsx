import { useState } from "react";
import styles from "./App.module.css";
import Display from "./components/Display";
import ButtonsContainer from "./components/ButtonsContainer";

function App() {
  let [calVal, setcalVal] = useState("");

  const onButtonClick = (buttonText) => {
    if (buttonText === "C") {
      setcalVal("");
    } else if (buttonText === "=") {
      let result = eval(calVal);
      setcalVal(result);
    } else {
      const newDisplayvalue = calVal + buttonText;
      setcalVal(newDisplayvalue);
    }
  };
  return (
    <>
      <div className={styles.calculator}>
        <Display displayValue={calVal} />
        <ButtonsContainer onButtonClick={onButtonClick} />
      </div>
    </>
  );
}

export default App;
