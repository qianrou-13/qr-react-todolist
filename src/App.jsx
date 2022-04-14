import React, { useState, useEffect } from 'react'
import Login from './components/login/Login'
import Todoform from './components/todoform/Todoform'
import Todolist from './components/todolist/Todolist'

const App = () => {
  // run once when the application start 
  useEffect(() => {
    storeExistTodosFromLocal()
  }, [])

  // need to do something after re-render, add a useeffect for the local storage
  useEffect(() => {
    saveTodosInLocal()
  })

  const adminUser = {
    username: "qianrou",
    password: "admin"
  }

  const [user, setUser] = useState({username:"", password:""});
  const [error, setError] = useState("");
  const [todoInput, setTodoInput] = useState("");
  const [todos, setTodos] = useState([]); //todos array

  const userLogin = values => {
    console.log(values);

    //checking the username and password
    if (values.username === adminUser.username && values.password === adminUser.password ){
      console.log("Logged In");
      setUser({
        username: values.username,
        password: values.password
      })
    } else {
      setError("username or password is incorrect, Please try again.")
    }
  }

  //When logout will have to clear all the values and errors
  const userLogout = () => {
    setUser({username:"", password:""});
    console.log("Logout!");
    setError("")
  }

  //save todos in local storage
  const saveTodosInLocal = () => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }

  //checking whether the local storage has todos
  const storeExistTodosFromLocal = () => {
    if(localStorage.getItem("todos") === null){
      localStorage.setItem("todos", JSON.stringify([]))
    }else{
      let localTodo = JSON.parse(localStorage.getItem("todos"))
      setTodos(localTodo)
    }
  } 
  return (
    <div className='App'> 
      {(user.username !== "") ? (
        <div className='welcomepage'> 
          <h2>Welcome, <span>{user.username}</span></h2>
          <Todoform todos={todos} setTodos={setTodos} setTodoInput={setTodoInput} todoInput={todoInput}/>
          <Todolist todos={todos} setTodos={setTodos}/> {/*passing the todos array into the todolist*/}
          <button className='logout-btn' onClick={userLogout}>Logout</button>
        </div>
      ) : (
        <Login userLogin={userLogin} error={error}/> 
      )}
    </div>
  )
}

export default App