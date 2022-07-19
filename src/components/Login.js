import React from "react"
import Button from "./Button"
import "../style/login.css"



const Login = () => {

  const handleStudentForm = (e) => {
    console.log(e.target.innerText)
  }

  const handleProfessorForm = (e) => {
    console.log(e.target.innerText)
  }

  const handleNewUserForm = (e) => {
    console.log(e.target.innerText)
  }
  return (
    <>
      <h2 className="welcome_message">Welcome to this generic LMS</h2>
      <div className='login_container'>
        <div className="buttons_container">
          <Button
            onClick={handleStudentForm}
            children={'Student'}
          />
          <Button
            onClick={handleProfessorForm}
            children={'Professor'}
          />
        </div>
        <div className="login_credentials">
          <form className="login_form">
            <label
              className="login_label"
              htmlFor="username"
            >
              Username
            </label>
            <input
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
              className="login_input"
              id="password"
              type={'text'}
            />
          </form>
          <Button
            onClick={handleNewUserForm}
            children={'new user? Click here'}
          />
        </div>
      </div>
    </>
  )
}

export default Login