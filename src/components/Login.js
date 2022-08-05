import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import login from '../services/auth'

import Button from "./Button";
import InputItem from "./InputItem";

import "../style/login.css";

const Login = ({ loadingDispatch }) => {

  const navigate = useNavigate()

  const [loginCredentials, setLoginCredentials] = useState({
    email: '',
    password: ''
  })


  const handleUser = async (e) => {

    try {

      loadingDispatch({ type: 'loading' })
      const { token, name, role } = await login.login(loginCredentials)
      loadingDispatch({ type: 'notLoading' })

      window.localStorage.setItem('role', role)
      window.localStorage.setItem('token', token)

      const navigateTo = role === 'STUDENT_ROLE'
        ? 'student'
        : 'professor'
      navigate(navigateTo, { state: { role, name } });

    } catch (error) {
      alert('Username, Password or role is incorrect')
      loadingDispatch({ type: 'notLoading' })
    }
  }

  return (
    <>
      <h2 className="welcome_message"
      >
        Welcome to this generic LMS
      </h2>
      <div className='login_container'>

        <div className="login_credentials">
          <form className="login_form">
            <InputItem
              value={loginCredentials.email}
              onChange={({ target }) => setLoginCredentials({ ...loginCredentials, email: target.value })}
              htmlFor={'username'}
              type={'text'}
              isRequired
              children={'Username'}
            />
            <InputItem
              value={loginCredentials.password}
              onChange={({ target }) => setLoginCredentials({ ...loginCredentials, password: target.value })}
              htmlFor={'password'}
              type={'password'}
              isRequired
              children={'Password'}
            />
            <Button
              type={'button'}
              customClass={null}
              onClick={handleUser}
              children={'Sign in'}
            />
          </form>
          <Button
            type={'button'}
            customClass={'new_user_button'}
            onClick={() => navigate("/new-user-form")}
            children={'new user? Click here'}
          />
        </div>
      </div>
    </>
  )
}

export default Login