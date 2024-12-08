import ButtonsContainer from "./components/ButtonsContainer";
import styles from "./App.module.css";
import Display from "./components/Display";

function App() {
  return (
    <div className={styles.calculator} >
      <Display></Display>
      <ButtonsContainer></ButtonsContainer>
      
    </div>
  )
}

export default App
