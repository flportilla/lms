import React, { useEffect, useState } from 'react'
import testHelper from '../services/test'
import '../style/testList.css'
import Button from './Button'
import { useNavigate } from 'react-router-dom'
import Loading from './Loading'

const ListTests = ({ rol, isLoading, loadingDispatch }) => {

  const [tests, setTests] = useState([])
  const [loadInfo, setloadInfo] = useState(false)
  const [showQuestions, setShowQuestions] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {

    const token = JSON.parse(window.localStorage.getItem('token'))
    if (rol === 'Professor') {
      setloadInfo(true)
      testHelper.setToken(token)

      testHelper.listTests()
        .then(test => setTests([...test]))
        .then(res => setloadInfo(false))
    }

  }, [isLoading])

  const handleDeleteRequest = async (id, testName) => {

    const result = window.confirm(`Are you sure you want to delete ${testName}?`);

    if (result) {
      loadingDispatch({ type: 'loading' })
      await testHelper.removeTest(id)
      loadingDispatch({ type: 'notLoading' })
    }

  }

  const handleSelection = async (target, id) => {
    const updatedStatusTest = { ...tests, selectedTest: target.checked }


    const token = JSON.parse(window.localStorage.getItem('token'))
    testHelper.setToken(token)
    loadingDispatch({ type: 'loading' })
    await testHelper.updateTest(id, updatedStatusTest)
    loadingDispatch({ type: 'notLoading' })

  }

  return (
    <div className='test_container'>
      {
        loadInfo
          ? <Loading />
          : <>
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
              onClick={() => { navigate('/Professor'); }}
              customClass={'show_questions'}
            >
              Save
            </Button>
          </>
      }

    </div>
  )
}

export default ListTests