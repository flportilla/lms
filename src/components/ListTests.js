import React, { useEffect, useState } from 'react'
import testHelper from '../services/test'

const ListTests = ({ rol }) => {

  const [tests, setTests] = useState()

  useEffect(() => {

    testHelper.listTests()
      .then(test => setTests)

  }, [])


  return (
    <div>{tests}</div>
  )
}

export default ListTests