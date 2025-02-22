function TodoItem2() {
  let todoName = "Go to College";
  let todoDate = "4/10/2023";

  return (
    <div className="container">
      <div classNamne="row kg-row">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button type="button" class="btn btn-danger kg-button">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem2;
