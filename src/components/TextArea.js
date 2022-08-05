import React from 'react'

const TextArea = ({ onChange, htmlFor, value, children, customClass, selectedAnswer }) => {
  return (<>
    <label
      className="label"
      htmlFor={htmlFor}
    >
      {
        !htmlFor
          ? ''
          : <input
            required
            type={'radio'}
            name={'answer'}
            id={htmlFor}
            onChange={selectedAnswer}
          />

      }
      {children}
    </label>
    <textarea
      placeholder='Enter your text here'
      className={customClass}
      value={value}
      onChange={onChange}
      required
    />
  </>
  )
}

export default TextArea