// import { useLocalStorage } from "usehooks-ts";
import TodoItem from "../todo-item";
import { useEffect, useState } from "react";

function TodoList() {
  const [todos, setTodos] = useState([]);

  const getTodos =async()=>{
//Get todos from todo-api
const response = await fetch("http://localhost:4000/todos");
const data = await response.json();
console.log(data)
//Update todos state
  }


  function deleteAll() {
    setTodos([]);


    }
  
useEffect(()=>{
 getTodos();
},[]);
  return (
    <section>
      <button onClick={deleteAll} className="btn btn-danger">
        {" "}
        Delete All
      </button>
      <ul className="list-group">
        {todos.map(function (todo, index) {
          return <TodoItem todo={todo} index={index} />;
        })}
      </ul>
    </section>
  );
}

export default TodoList;
