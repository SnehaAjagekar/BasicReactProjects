 import "bootstrap/dist/css/bootstrap.min.css";
 import { useState } from "react";

function AddTodo({handleClick}) {
    const[todoName, setTodoName] = useState("")
    const[dueDate, setDueDate] = useState("")

    const handleAddClick = () => {
        if(todoName && dueDate){
            handleClick({ name: todoName, dueDate });
            setTodoName(""); // Clear the input after adding
            setDueDate(""); 
        }else{
            alert("Please enter valid name and date")
        }
    }
    return (
        <div className="container text-center ">
            <div className="row kg-row">
                <div className="col-6 px-2">
                    <input 
                     type="text"
                     placeholder="Enter todo Here"
                     value={todoName}
                     onChange={(e) => setTodoName(e.target.value)}
                     />
                </div>
                <div className="col-4 px-2">
                    <input 
                     type="date"
                     value={dueDate}
                     onChange={(e) => setDueDate(e.target.value)}
                     />
                </div>
                <div className="col-2 px-2">
                    <button type="button" 
                    className="btn btn-success kg-button  "
                    onClick={handleAddClick}>
                        Add</button>
                </div>
            </div>
        </div>
    );
}

export default AddTodo;