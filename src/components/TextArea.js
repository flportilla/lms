import React from 'react'

const TextArea = ({ onChange, htmlFor, value, isRequired, children, customClass }) => {

  return (<>
    <label
      className="label"
      htmlFor={htmlFor}
    >
      {children}
    </label>
    <textarea
      className={customClass}
      id={htmlFor}
      value={value}
      onChange={onChange}
      required={isRequired}
    />
  </>
  )
}

export default TextArea