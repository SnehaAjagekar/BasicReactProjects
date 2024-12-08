import TodoItem from "./TodoItem";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./TodoItems.module.css";
const TodoItems = ({todoItems}) => {
    return(
        <div className={styles.itemsContainer}>
           {todoItems.map((item) => (
                <TodoItem  todoDate={item.dueDate} todoName={item.name} />
            ))}
          
          
        {/* <TodoItem todoDate="4/10/2023" todoName="BuyMilk"></TodoItem>
        <TodoItem todoDate="4/10/2023" todoName="BuyMilk"></TodoItem> */}
      </div>
    )
}
export default TodoItems;
