import React from "react";
import "./todolist.css";
import Todos from "../todos/Todos";

const Todolist = ({todos, setTodos}) => {
  return (
    <div className="list-container">
      <i>- be productive, but also have some fun -</i>
      <ul className="todo-tasks">
        {todos.map(todo => (
           <Todos todos={todos} setTodos={setTodos} todo={todo} key={todo.id} text={todo.text} /> 
        ))}
      </ul>
    </div>
  );
};   

export default Todolist;
