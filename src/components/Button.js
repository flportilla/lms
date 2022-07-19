import React from "react"
import "../style/button.css"

const Button = ({ onClick, children, style, type }) => {
  return (
    <>
      <button
        type={type ? type : 'button'}
        onClick={onClick}
        className={style ? `button ${style}` : 'button'}
      >
        {children}
      </button>
    </>
  )
}

export default Button