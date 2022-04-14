import React from 'react'
import './todoform.css'

const Todoform = ({setTodoInput, todos, setTodos, todoInput}) => {

    //handle userinput     
    const handleTodoInput = e => {
      setTodoInput(e.target.value);
      console.log(e);
    }

    const handleTodoSubmit = e => {
        e.preventDefault(); 
        setTodos([
            ...todos, {text: todoInput, completed: false, id: Math.random() * 100},
        ]);
        setTodoInput(""); //reset the useState
    }
  
  return (
    <div className="form-container">
    <h1>Todo List</h1>
    <form className="todo-input-wrapper">
      <input className="add-todo-list" value={todoInput} type="text" placeholder="Enter a todo task" onChange={handleTodoInput}/>
      <button className="add-button" onClick={handleTodoSubmit}>Add</button>
    </form>
  </div>
  )
}

export default Todoform