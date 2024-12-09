import styles from "./Display.module.css";
const Display =({buttonData}) => {
    return <input className={styles.display}  type="text" value={buttonData} readOnly></input>
}
export default Display;