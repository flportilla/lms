import React from "react"
import "../style/header.css"

const Header = () => {

  return (
    <header className="header">
      <a className='home_anchor' href='/'
      >
        Home
      </a>
      <a
        className='home_anchor' href='/'
        onClick={() => window.localStorage.clear()}
      >
        Logout
      </a>
    </header>
  )
}

export default Header