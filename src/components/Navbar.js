import React from 'react'
import '../style/navbar.css'

const Navbar = () => {

  const username = window.localStorage.getItem('name')
  const rol = window.localStorage.getItem('rol')

  return (
    <>
      <div className='navbar_container'>
        <h2 className='welcome'>{`Welcome ${username}`}</h2>
        <a href={`${rol}`} className='profile'>Profile</a>
      </div>
    </>
  )
}

export default Navbar