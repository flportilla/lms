import React, { useState } from 'react'
import Button from './Button'
import '../style/newUser.css'

function NewUser({ showNewUser }) {

  const [rol, setRol] = useState('')
  const [newUsername, setNewUsername] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [repeatedPassword, setRepeatedPassword] = useState('')
  const [name, setName] = useState('')

  const handleNewUserCredentials = (e) => {
    e.preventDefault()

    if (newPassword !== repeatedPassword) {

      setNewUsername('')
      setNewPassword('')
      setRepeatedPassword('')
      setName('')

      return alert("Passwords don't match")
    }
    if (!rol) return alert('Please select a rol')

    const newUser = {
      rol,
      newUsername,
      name,
      newPassword,
    }
    setRol('')
    setNewUsername('')
    setNewPassword('')
    setRepeatedPassword('')
    setName('')
  }

  return (
    <div className={showNewUser ? '' : 'hide'}>
      <h2 className='new_user_message'>Create new user</h2>
      <div className='new_user_container' >
        Choose your rol
        <div className="buttons_container">
          <Button
            type={null}
            onClick={() => setRol('Student')}
            children={'Student'}
            customClass={null}
          />
          <Button
            type={null}
            onClick={() => setRol('Professor')}
            children={'Professor'}
            customClass={null}
          />
        </div>
        <form
          className="login_form"
          onSubmit={handleNewUserCredentials}
        >
          <label
            className="new_username_label"
            htmlFor="new_username"
          >
            New username
          </label>
          <input
            required
            value={newUsername}
            onChange={({ target }) => setNewUsername(target.value)}
            className="new_user_input"
            id="new_username"
            type={'text'}
          />
          <label
            className="new_username_label"
            htmlFor="name"
          >
            Name
          </label>
          <input
            required
            value={name}
            onChange={({ target }) => setName(target.value)}
            className="new_user_input"
            id="name"
            type={'text'}
          />
          <label
            className="new_username_label"
            htmlFor="new_password "
          >
            New password
          </label>
          <input
            required
            value={newPassword}
            onChange={({ target }) => setNewPassword(target.value)}
            className="new_user_input"
            id="new_password"
            type={'password'}
          />
          <label
            className="new_username_label"
            htmlFor="repeat_password"
          >
            Repeat password
          </label>
          <input
            required
            value={repeatedPassword}
            onChange={({ target }) => setRepeatedPassword(target.value)}
            className="new_user_input"
            id="repeat_password"
            type={'password'}
          />
          <Button
            type={'submit'}
            customClass={null}
            onClick={() => { }}
            children={'Sign up'}
          />
        </form>
      </div>
    </ div>
  )
}

export default NewUser