import React, { useState } from "react";
import Button from "./Button";
import login from '../services/login'
import "../style/login.css";
import InputItem from "./InputItem";

const Login = ({ setShowNewUser, showNewUser }) => {

  //States to handle login
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [rol, setRol] = useState('')

  const handleUser = async (e) => {
    e.preventDefault()

    const user = {
      username,
      password,
      rol
    }

    try {
      if (!rol) return alert('Please select yours')
      await login.login(user)

    } catch (error) {

      alert('Username, password or rol is invalid')
      console.error(error)
    }
  }

  return (
    <>
      <h2 className="welcome_message"
      >
        Welcome to this generic LMS
      </h2>
      <div className='login_container'>
        <div className="buttons_container">
          <Button
            type={null}
            onClick={({ target }) => { setRol(target.innerText) }}
            children={'Student'}
            customClass={rol === 'Student' ? 'selected' : ''}
          />
          <Button
            type={null}
            onClick={({ target }) => { setRol(target.innerText) }}
            children={'Professor'}
            customClass={rol === 'Professor' ? 'selected' : ''}
          />
        </div>
        <div className="login_credentials">
          <form
            className="login_form"
            onSubmit={handleUser}
          >
            <InputItem
              value={username}
              onChange={({ target }) => setUsername(target.value)}
              htmlFor={'username'}
              type={'text'}
              isRequired
              children={'Username'}
            />
            <InputItem
              value={password}
              onChange={({ target }) => setPassword(target.value)}
              htmlFor={'password'}
              type={'password'}
              isRequired
              children={'Password'}
            />
            <Button
              type={'submit'}
              customClass={null}
              onClick={() => { }}
              children={'Sign in'}
            />
          </form>
          <Button
            type={null}
            customClass={'new_user_button'}
            onClick={() => setShowNewUser(!showNewUser)}
            children={'new user? Click here'}
          />
        </div>
      </div>
    </>
  )
}

export default Login