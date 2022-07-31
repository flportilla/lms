import React from 'react'
import '../style/navbar.css'

const Navbar = ({ rol, username }) => {

  return (
    <>
      <div className='navbar_container'>
        <h2 className='welcome'>{`Welcome ${username ? username : ''}`}</h2>
        <hr />
        <a href={`#/${rol}`} className='profile'>Dashboard</a>
      </div>
    </>
  )
}

export default Navbar