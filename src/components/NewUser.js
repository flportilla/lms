import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import Button from './Button'
import usersHelper from '../services/users'
import '../style/newUser.css'
import InputItem from './InputItem'

function NewUser({ loadingDispatch }) {

  const [newUser, setNewUser] = useState({
    email: '',
    name: '',
    password: '',
    repeatedPassword: '',
    role: '',

  })
  const navigate = useNavigate()

  const handleAddNewUser = async (e) => {

    const {
      email,
      name,
      password,
      repeatedPassword,
      role } = newUser

    e.preventDefault()

    //If passwords don't match, alert the user
    if (repeatedPassword !== password) {
      setNewUser({ ...newUser, repeatedPassword: '' })
      return alert("Passwords don't match")
    }

    if (!role) {
      return alert('Please select a rol')
    }

    const newUserInfo = {
      name,
      email,
      password,
      role
    }

    try {

      loadingDispatch({ type: 'loading' })
      await usersHelper.addUser(newUserInfo)
      loadingDispatch({ type: 'notLoading' })

      alert('User created succesfully')

      navigate('/')

    } catch (error) {

      const errorsList = error.response.data.errors
      errorsList.map(error => alert(error.msg))

      loadingDispatch({ type: 'notLoading' })
    }
  }

  return (
    <>
      <h2 className='new_user_message'
      >
        Create new user
      </h2>
      <div className='new_user_container' >
        Choose your role
        <div className="buttons_container">
          <Button
            type={null}
            onClick={() => setNewUser({ ...newUser, role: 'STUDENT_ROLE' })}
            children={'Student'}
            customClass={newUser.role === 'STUDENT_ROLE' ? 'selected' : ''}
          />
          <Button
            type={null}
            onClick={() => setNewUser({ ...newUser, role: 'PROFESSOR_ROLE' })}
            children={'Professor'}
            customClass={newUser.role === 'PROFESSOR_ROLE' ? 'selected' : ''}
          />
        </div>
        <form
          className="login_form"
          onSubmit={handleAddNewUser}
        >
          <InputItem
            value={newUser.name}
            onChange={({ target }) => setNewUser({ ...newUser, name: target.value })}
            htmlFor={'name'}
            type={'text'}
            isRequired
            children={'Name'}
          />
          <InputItem
            value={newUser.email}
            onChange={({ target }) => setNewUser({ ...newUser, email: target.value })}
            htmlFor={'email'}
            type={'text'}
            isRequired
            children={'Email'}
          />
          <InputItem
            value={newUser.password}
            onChange={({ target }) => setNewUser({ ...newUser, password: target.value })}
            htmlFor={'password'}
            type={'password'}
            isRequired
            children={'Password'}
          />
          <InputItem
            value={newUser.repeatedPassword}
            onChange={({ target }) => setNewUser({ ...newUser, repeatedPassword: target.value })}
            htmlFor={'repeatedPassword'}
            type={'password'}
            isRequired
            children={'Repeat password'}
          />
          <Button
            onClick={null}
            type={'submit'}
            customClass={null}
            children={'Sign up'}
          />
        </form>
      </div>
    </>
  )
}

export default NewUser