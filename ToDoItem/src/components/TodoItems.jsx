import TodoItem from "./TodoItem";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./TodoItems.module.css";
const TodoItems = ({ todoItems, handleDelete}) => {
    return(
        <div className={styles.itemsContainer}>
           {todoItems.map((item) => (
                <TodoItem  key={item.id}
                id={item.id}
                todoName={item.name}
                todoDate={item.dueDate}
                handleDelete={handleDelete} />
            ))}
          
          
        {/* <TodoItem todoDate="4/10/2023" todoName="BuyMilk"></TodoItem>
        <TodoItem todoDate="4/10/2023" todoName="BuyMilk"></TodoItem> */}
      </div>
    )
}
export default TodoItems;
