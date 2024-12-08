import styles from "./Item.module.css"

const Item = ({foodItem, bought, handleBuyBtn}) => {

    // const handleClick = () => {
    //     console.log(`${foodItem} being bought`)
    // }
    return (
        <li className= {`${styles["kgItem"]} list-group-item ${bought && styles["btnClick"]} `} >
            <span className={styles["kgSpan"]} >{foodItem}</span>
            <button className={`${styles.button}  ${styles["btnColor"]}`}
            onClick={handleBuyBtn}
            // onClick={() => handleClick(foodItem)}
            >Buy</button>
        </li>
    );

};

// const Item = (props) => {
//     return <li className="list-group-items" >{props.foodItem}</li>

// }
export default Item;