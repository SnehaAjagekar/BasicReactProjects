import styles from "./FoodInput.module.css"
const FoodInput = ({handleKeyDown}) => {
    return(
        <input 
        placeholder="Enter itemName" 
        type="text" 
        className={styles.foodInput}
        onKeyDown={handleKeyDown}
        ></input>
    )
}
export default FoodInput;