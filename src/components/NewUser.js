import React, { useState } from 'react'
import Button from './Button'
import newUserService from '../services/newUser'
import '../style/newUser.css'
import InputItem from './InputItem'


function NewUser({ showNewUser, setShowNewUser }) {

  const [rol, setRol] = useState('')
  const [newUsername, setNewUsername] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [repeatedPassword, setRepeatedPassword] = useState('')
  const [name, setName] = useState('')

  const handleAddNewUser = async (e) => {

    e.preventDefault()

    if (newPassword !== repeatedPassword) {
      setRepeatedPassword('')
      return alert("Passwords don't match")
    }

    if (!rol) return alert('Please select a rol')

    const newUser = {
      "rol": rol,
      "username": newUsername,
      "name": name,
      "password": newPassword
    }

    try {
      await newUserService.addUser(newUser)

      alert('User created succesfully')
      setRol('')
      setNewUsername('')
      setNewPassword('')
      setRepeatedPassword('')
      setName('')
      setShowNewUser(!showNewUser)

    } catch (error) {
      alert('Username already in use, please try a different one')
      console.error(error)

    }
  }

  return (
    <div className={showNewUser ? '' : 'hide'}>

      <h2 className='new_user_message'
      >
        Create new user
      </h2>
      <div className='new_user_container' >
        Choose your rol
        <div className="buttons_container">
          <Button
            type={null}
            onClick={({ target }) => setRol(target.innerText)}
            children={'Student'}
            customClass={rol === 'Student' ? 'selected' : ''}
          />
          <Button
            type={null}
            onClick={({ target }) => setRol(target.innerText)}
            children={'Professor'}
            customClass={rol === 'Professor' ? 'selected' : ''}
          />
        </div>
        <form
          className="login_form"
          onSubmit={handleAddNewUser}
        >
          <InputItem
            value={newUsername}
            onChange={({ target }) => setNewUsername(target.value)}
            htmlFor={'newUsername'}
            type={'text'}
            isRequired
            children={'New username'}
          />
          <InputItem
            value={name}
            onChange={({ target }) => setName(target.value)}
            htmlFor={'name'}
            type={'text'}
            isRequired
            children={'Name'}
          />
          <InputItem
            value={newPassword}
            onChange={({ target }) => setNewPassword(target.value)}
            htmlFor={'new_password'}
            type={'password'}
            isRequired
            children={'New password'}
          />
          <InputItem
            value={repeatedPassword}
            onChange={({ target }) => setRepeatedPassword(target.value)}
            htmlFor={'repeated_password'}
            type={'password'}
            isRequired
            children={'Repeat password'}
          />
          <Button
            type={'submit'}
            customClass={null}
            onClick={null}
            children={'Sign up'}
          />
        </form>
      </div>
    </ div>
  )
}

export default NewUser