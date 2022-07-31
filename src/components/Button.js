import React from "react"
import "../style/button.css"

const Button = ({ onClick, children, customClass, type }) => {
  return (
    <>
      <button
        type={type ? type : 'button'}
        onClick={onClick}
        className={customClass ? `button ${customClass}` : 'button'}
      >
        {children}
      </button>
    </>
  )
}

export default Button