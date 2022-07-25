import React from 'react'
import '../style/navbar.css'

const Navbar = ({ rol, username }) => {

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