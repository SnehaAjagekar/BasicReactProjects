import "bootstrap/dist/css/bootstrap.min.css";
import { RiDeleteBin4Line } from "react-icons/ri";

const TodoItem = ({ id, todoName, todoDate, handleDelete }) => {

    return(
        <div className='container'>
            <div className="row kg-row" >
                <div className="col-6">{todoName}</div>
                <div className="col-4">{todoDate}</div>
                <div className="col-2">
                    <button
                     type="button" 
                     className="btn btn-danger kg-button  "
                     onClick={() => handleDelete(id)}
                     >
                       <RiDeleteBin4Line />
                    </button>
                </div>
            </div>
      </div>
    );
}

export default TodoItem;