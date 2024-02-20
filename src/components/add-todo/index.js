

import styles from "./index.module.css";
import{useLocalStorage}from 'usehooks-ts';
import{useState}from 'react';
function creatTodo(){

}
function AddTodo(){
    const [todos, setTodos] = useLocalStorage("TODO_KEY", []);
    // let todo;
    const[todo,setTodo]=useState('')

    function collectInput(event) {
        // console.log(event.target.value);
    }
    // const collectInput =(event)=>{
    //     setTodo(event.target.value);

    // }


    function saveTodo() {
        //Get existing list of todos from local storage
        // let todos = JSON.parse( localStorage.getItem('TODO_KEY')) || [];
        //Add todo to existing list of todos
        // todos.push(todo)
        //Set all todos in local storage
        // localStorage.setItem('TODO_KEY', JSON.stringify (todos));
        setTodos([...todos,todo]);
    }
      return(
        <section className={styles.addTodo}>
            <input
            onChange={collectInput}
            className={styles.AddTodoInput}
            placeholder="start typing..."/>
            <button className={`btn btn-info ${styles.btn}`} onClick={saveTodo}>Create</button>
        </section>
      )
}


export default AddTodo;

