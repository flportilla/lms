import React, { useEffect, useState } from 'react'
import testHelper from '../services/test'
import '../style/testList.css'
import Button from './Button'
import { useNavigate } from 'react-router-dom'

const ListTests = ({ rol }) => {

  const [tests, setTests] = useState([])

  const [showQuestions, setShowQuestions] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {

    const token = JSON.parse(window.localStorage.getItem('token'))

    testHelper.setToken(token)

    testHelper.listTests()
      .then(test => setTests([...test]))

  }, [])

  const handleDeleteRequest = async (id, testName) => {

    const result = window.confirm(`Are you sure you want to delete ${testName}?`);

    try {
      if (result) {
        await testHelper.removeTest(id)
        window.location.reload()
      }

    } catch (error) {
      console.error(error)
    }
  }

  const handleSelection = async (target, id) => {
    const updatedStatusTest = { ...tests, selectedTest: target.checked }

    const token = JSON.parse(window.localStorage.getItem('token'))
    testHelper.setToken(token)

    await testHelper.updateTest(id, updatedStatusTest)
  }

  return (
    <div className='test_container'>
      <Button
        type='button'
        onClick={() => { setShowQuestions(!showQuestions) }}
        customClass={'show_questions'}
      >
        Show questions
      </Button>
      <h3 style={{ marginBottom: '15px' }}
      >
        Select a test and save to make it available for students</h3>
      {
        tests.map((test, index) => {
          return (
            <div key={test.id}>
              <div style={{ display: 'flex', margin: '0 10px 0 0' }}>

                <label style={{ display: 'flex' }} htmlFor={`${index}`}>
                  <input
                    id={`${index}`}
                    type={'checkbox'}
                    defaultChecked={test.selectedTest ? test.selectedTest : false}
                    onChange={({ target }) => handleSelection(target, test.id)}
                  />

                  <h2>{test.name}</h2>
                </label>

                <Button
                  type={'button'}
                  onClick={() => handleDeleteRequest(test.id, test.name)}
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
      <Button
        type='button'
        onClick={() => { navigate('/Professor'); window.location.reload() }}
        customClass={'show_questions'}
      >
        Save
      </Button>
    </div>
  )
}

export default ListTests