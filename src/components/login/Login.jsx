import React, {useState} from "react"
import {FcTodoList} from 'react-icons/fc'
import "./login.css"

const Login = ({userLogin, error}) => {

  const [values, setValues] = useState({username:"", password:""})

  const handleChanges = e =>{
    setValues({
      ...values,
      [e.target.name]: e.target.value, 
    })
  }

  const handleSubmit = e => {
    e.preventDefault(); //dont want the page to rerender
    userLogin(values);
  }

  
  return (
    <form onSubmit={handleSubmit}>
      <div className="login-container">
        <h1>LOGIN</h1>
        <FcTodoList className='list-icon'/>
        <h3>To create a ToDo List Today!</h3>
        {(error !== "" ) ? (<div className="showerror">{error}</div> ) : "" }
        <div className="user-input-container">
          <div className="name-input">
            <label>Username: </label><br/>
            <input
              className='inputs'
              type="text"
              id="username"
              name="username"
              placeholder="Enter you username"
              onChange={handleChanges}
              required
            />
          </div>
          <div className="pwd-input">
            <label>Password: </label><br/>
            <input
              className="inputs"
              type="password"
              id="password"
              name="password"
              placeholder="Enter you password"
              onChange={handleChanges}
              required
            />
          </div>
          <input type="submit" value="Login" className="login-btn" />
        </div>
      </div>
    </form>
  );
};

export default Login;
