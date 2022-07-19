import React from "react"
import "../style/button.css"

const Button = ({ onClick, children }) => {
  return (
    <>
      <button
        type='button'
        onClick={onClick}
        className={'button'}
      >
        {children}
      </button>
    </>
  )
}

export default Button