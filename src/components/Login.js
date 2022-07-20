import React, { useState } from "react";
import Button from "./Button";
import NewUser from "./NewUser";
import "../style/login.css";

const Login = ({ setShowNewUser, showNewUser }) => {

  //States to handle login
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [credentials, setCredentials] = useState(null)

  const handleStudentInput = (e) => {
    console.log(e.target.innerText)
  }
  const handleProfessorInput = (e) => {
    console.log(e.target.innerText)
  }
  const handleNewUserForm = (e) => {
    console.log(e.target.innerText)
  }
  const handleUser = (e) => {
    e.preventDefault()

    const user = {
      username,
      password
    }

    setCredentials(user)

    console.log(credentials)
  }

  return (
    <>
      <h2 className="welcome_message">Welcome to this generic LMS</h2>
      <div className='login_container'>
        <div className="buttons_container">
          <Button
            type={null}
            onClick={handleStudentInput}
            children={'Student'}
            style={null}
          />
          <Button
            type={null}
            onClick={handleProfessorInput}
            children={'Professor'}
            style={null}
          />
        </div>
        <div className="login_credentials">
          <form
            className="login_form"
            onSubmit={handleUser}
          >
            <label
              className="login_label"
              htmlFor="username"
            >
              Username
            </label>
            <input
              placeholder="username"
              value={username}
              onChange={({ target }) => setUsername(target.value)}
              className="login_input"
              id="username"
              type={'text'}
            />
            <label
              className="login_label"
              htmlFor="password"
            >
              Password
            </label>
            <input
              placeholder="password"
              value={password}
              onChange={({ target }) => setPassword(target.value)}
              className="login_input"
              id="password"
              type={'text'}
            />
            <Button
              type={'submit'}
              style={null}
              onClick={handleNewUserForm}
              children={'Sign in'}
            />
          </form>
          <Button
            type={null}
            style={'new_user_button'}
            onClick={() => setShowNewUser(!showNewUser)}
            children={'new user? Click here'}
          />
        </div>
      </div>
    </>
  )
}

export default Login