import TodoItem from './components/TodoItem'
import AddTodo from './components/AddTodo'
import TodoItems from './components/TodoItems'
import AppName from './components/AppName'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const todoItems= [
    {name : "buy Milk",
    dueDate: "6/12/24 "
    },
    {name : "buy Milk",
    dueDate: "6/12/24 "
    },
    {name : "buy Milk",
    dueDate: "6/12/24 "
    },
    {name : "buy Milk",
    dueDate: "6/12/24 "
    },
  ]
  return (
    <center className="todo-container" >
      <AppName/>
      <AddTodo/>
      <TodoItems todoItems={todoItems}/>
    </center>
  )
}
export default App
