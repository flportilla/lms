import React from 'react'
import '../style/inputItem.css'


const InputItem = ({ onChange, htmlFor, value, type, isRequired, children }) => {
  return (<>
    <label
      className="label"
      htmlFor={htmlFor}
    >
      {children}
    </label>
    <input
      required={isRequired ? isRequired : false}
      value={value}
      onChange={onChange}
      className="input"
      id={htmlFor}
      type={type}
    />
  </>
  )
}

export default InputItem