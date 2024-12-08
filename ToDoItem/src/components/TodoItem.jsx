import "bootstrap/dist/css/bootstrap.min.css";

const TodoItem = ({todoName, todoDate}) => {
    return(
        <div className='container'>
            <div className="row kg-row" >
                <div className="col-6">{todoName}</div>
                <div className="col-4">{todoDate}</div>
                <div className="col-2">
                    <button type="button" className="btn btn-danger kg-button w-100 ">
                        Delete
                    </button>
                </div>
            </div>
      </div>
    );
}

export default TodoItem;