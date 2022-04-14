import React from 'react'
import './todos.css'
import { IoMdCheckboxOutline } from "react-icons/io"
import { RiDeleteBin5Line } from "react-icons/ri"

const Todos = ({text, todo, todos, setTodos}) => {

    const completedTodosHandler = e => {
      setTodos(todos.map((obj) => {
        if(obj.id === todo.id){ // keep everything the same just to modify the completed to true
          return {
            ...obj, completed: !obj.completed
          }
        } 
        return obj; //if its did not match then just return the object
      }))
    }

    const removeTodosHandler = e => {
        setTodos(todos.filter((element => element.id !== todo.id)));
        //we use the filter function to filter those that does not matches to the id
        //comparing the element that we are clicking on to match the one from the state
    }

  return (
    <div className="task-wrapper">
    <li className={`todo-item ${todo.completed ? "task-completed" : ""}`}>{text}</li>
    <div className="icons-wrapper">
      <IoMdCheckboxOutline className="complete-btn" onClick={completedTodosHandler}/>
      <RiDeleteBin5Line className="remove-btn" onClick={removeTodosHandler}/>
    </div>
  </div>
  )
}

export default Todos