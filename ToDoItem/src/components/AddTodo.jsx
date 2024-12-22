import "bootstrap/dist/css/bootstrap.min.css";
import { IoMdAdd } from "react-icons/io";
import { useRef } from "react";

function AddTodo({ handleClick }) {
  const todoNameElement = useRef();
  const dueDateElement = useRef();

  const handleAddClick = (event) => {
    event.preventDefault();

    const todoName = todoNameElement.current.value;
    const dueDate = dueDateElement.current.value;

    // Validate inputs
    if (!todoName) {
      alert("Please enter a valid todo name.");
      return;
    }
    if (!dueDate) {
      alert("Please select a due date.");
      return;
    }

    handleClick({ name: todoName, dueDate });

    // Reset input fields after submission
    todoNameElement.current.value = "";
    dueDateElement.current.value = "";
  };

  return (
    <div className="container text-center">
      <form className="row kg-row" 
            onSubmit={handleAddClick}>
        <div className="col-6 px-2">
          <input
            type="text"
            ref={todoNameElement}
            placeholder="Enter todo here"
            aria-label="Todo Name"
            className="form-control"
          />
        </div>
        <div className="col-4 px-2">
          <input
            type="date"
            ref={dueDateElement}
            aria-label="Due Date"
            className="form-control"
          />
        </div>
        <div className="col-2 px-2">
          <button
            type="submit"
            className="btn btn-success kg-button"
            aria-label="Add Todo"
          >
            <IoMdAdd />
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;




//using useState __________________________________________________________________________________________________

//  import "bootstrap/dist/css/bootstrap.min.css";
//  import { useState } from "react";
//  import { IoMdAdd } from "react-icons/io";

// function AddTodo({handleClick}) {
//     const[todoName, setTodoName] = useState("")
//     const[dueDate, setDueDate] = useState("")

//     const handleAddClick = () => {
//         if(todoName && dueDate){
//             handleClick({ name: todoName, dueDate });
//             setTodoName(""); // Clear the input after adding
//             setDueDate(""); 
//         }else{
//             alert("Please enter valid name and date")
//         }
//     }
//     return (
//         <div className="container text-center ">
//             <div className="row kg-row">
//                 <div className="col-6 px-2">
//                     <input 
//                      type="text"
//                      placeholder="Enter todo Here"
//                      value={todoName}
//                      onChange={(e) => setTodoName(e.target.value)}
//                      />
//                 </div>
//                 <div className="col-4 px-2">
//                     <input 
//                      type="date"
//                      value={dueDate}
//                      onChange={(e) => setDueDate(e.target.value)}
//                      />
//                 </div>
//                 <div className="col-2 px-2">
//                     <button type="button" 
//                     className="btn btn-success kg-button  "
//                     onClick={handleAddClick}>
//                         <IoMdAdd />
//                         </button>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default AddTodo;
// ______________________________________________________________________________________________________________