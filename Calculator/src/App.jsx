import ButtonsContainer from "./components/ButtonsContainer";
import styles from "./App.module.css";
import Display from "./components/Display";
import { useState } from "react";

function App() {
  const [buttonData, setButtonData] = useState("");

  const onClick = (buttonValue) => {
    if (buttonValue === "c") {
      setButtonData(""); // Clear the input
    } else if (buttonValue === "=") {
      try {
        const result = Function(`return ${buttonData}`)(); // Safely evaluate the expression
        setButtonData(result.toString()); // Update with the result
      } catch (error) {
        setButtonData("Error"); // Show error for invalid input
      }
    } else {
      setButtonData((prevData) => prevData + buttonValue); // Append button value
    }
  };

  return (
    <div className={styles.calculator}>
      <Display buttonData={buttonData} />
      <ButtonsContainer handleOnClick={onClick} />
    </div>
  );
}

export default App;
