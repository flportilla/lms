import React from 'react'

const Test = ({ tests }) => {

  const testList = tests.filter(test => test.selectedTest)

  return (
    <div>Test</div>
  )
}

export default Test