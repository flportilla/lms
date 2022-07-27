import React, { useEffect, useState } from 'react'
import testHelper from '../services/test'
import '../style/testList.css'
import Button from './Button'

const ListTests = ({ rol }) => {

  const [tests, setTests] = useState([])
  const [showQuestions, setShowQuestions] = useState(false)

  useEffect(() => {

    const token = JSON.parse(window.localStorage.getItem('token'))

    testHelper.setToken(token)

    testHelper.listTests()
      .then(test => setTests([...test]))

  }, [])

  const handleDeleteRequest = () => {
    console.log('delete')
  }

  return (
    <div className='test_container'>
      <Button
        type='button'
        onClick={() => { setShowQuestions(!showQuestions) }}
        customClass={'show_questions'}
      >Show questions</Button>
      {
        tests.map(test => {
          return (
            <div key={test.id}>
              <div style={{ display: 'flex', margin: '0 10px 0 0' }}>
                <h2>* {test.name}</h2>
                <Button
                  type={'button'}
                  onClick={handleDeleteRequest}
                  customClass={'delete_test'}
                >
                  Delete
                </Button>
              </div>
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