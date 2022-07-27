import React, { useEffect, useState } from 'react'
import testHelper from '../services/test'
import '../style/testList.css'

const ListTests = ({ rol }) => {

  const [tests, setTests] = useState([])
  const [showQuestions, setShowQuestions] = useState(false)

  useEffect(() => {

    const token = JSON.parse(window.localStorage.getItem('token'))

    testHelper.setToken(token)

    testHelper.listTests()
      .then(test => setTests([...test]))

  }, [])
  return (
    <div className='test_container'>
      <button
        type='button'
        onClick={() => { setShowQuestions(!showQuestions) }}
      >Show questions</button>
      {
        tests.map(test => {
          return (
            <div key={test.id}>
              <h2>{test.name}</h2>
              <div>
                {
                  showQuestions
                    ? <div className='questions_container'>
                      <ul>
                        {test.questions.map(question => <li key={question.id}>{question.statement}</li>)}
                      </ul>
                    </div>
                    : null
                }
              </div>

            </div>
          )
        })

      }
    </div>
  )
}

export default ListTests