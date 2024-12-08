 import "bootstrap/dist/css/bootstrap.min.css";

function AddTodo() {
    return (
        <div className="container text-center ">
            <div className="row kg-row">
                <div className="col-6 px-2">
                    <input type="text" placeholder="Enter todo Here"/>
                </div>
                <div className="col-4 px-2">
                    <input type="date"/>
                </div>
                <div className="col-2 px-2">
                    <button type="button" className="btn btn-success kg-button w-100 ">Add</button>
                </div>
            </div>
        </div>
    );
}

export default AddTodo;