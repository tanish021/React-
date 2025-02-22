import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import "./App.css";
import TodoItems from "./components/TodoItems";

function App() {

const todoItems = [{
  name : 'Buy Milk',
  dueDate : '4/10/23',
},
{
  name : 'Go to College',
  dueDate : '4/10/23',
},
{
  name : 'Drink Water',
  dueDate : 'Right Now!!',
}];

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo />
      <TodoItems todoItems={todoItems}></TodoItems>
    </center>
  );
}

export default App;
