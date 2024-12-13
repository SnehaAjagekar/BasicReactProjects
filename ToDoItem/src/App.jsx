import TodoItem from './components/TodoItem'
import AddTodo from './components/AddTodo'
import TodoItems from './components/TodoItems'
import AppName from './components/AppName'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from 'react'


function App() {
  const initialTodoItems= [
    {
      id: "1",
      name : "buy Milk",
    dueDate: "6/12/24 "
    },
  ];

  const [todoItems, setTodoItems] = useState(initialTodoItems);

  const handleClick = (newTodo) => {
    const newTodoWithId = {
      ...newTodo,
      id: todoItems.length ? todoItems[todoItems.length - 1].id + 1 : 1,
    };
    setTodoItems([...todoItems, newTodoWithId]);
  
  
    }
    const handleDelete = (id) => {
      const filteredTodos = todoItems.filter((item) => item.id !== id);
      setTodoItems(filteredTodos);
    };
  
  return (
    <center className="todo-container" >
      <AppName/>
      <AddTodo handleClick={handleClick}/>
      
      <TodoItems todoItems={todoItems} handleDelete={handleDelete} />
    </center>
  )
}
export default App
