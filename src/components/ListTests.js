import React, { useEffect, useState } from 'react'
import testHelper from '../services/test'
import '../style/testList.css'
import Button from './Button'
import { useLocation } from 'react-router-dom'
import Loading from './Loading'
import usersHelper from '../services/users'

const ListTests = ({ rol, isLoading, loadingDispatch }) => {

  const [tests, setTests] = useState([])
  const [loadInfo, setloadInfo] = useState(false)
  const [showQuestions, setShowQuestions] = useState(false)
  const { state } = useLocation()

  useEffect(() => {

    const token = JSON.parse(window.localStorage.getItem('token'))
    if (rol === 'Professor') {
      setloadInfo(true)
      testHelper.setToken(token)

      testHelper.listTests()
        .then(test => setTests([...test]))
        .then(() => setloadInfo(false))
    }

  }, [isLoading, rol])
  const handleDeleteRequest = async (id, testName) => {

    const result = window.confirm(`This will delete this test for all students, do you still want to delete ${testName}?`);
    const uid = state.id
    if (result) {
      loadingDispatch({ type: 'loading' })
      await testHelper.removeTest(id, uid)
      loadingDispatch({ type: 'notLoading' })
    }

  }

  const testsSelected = tests.slice()

  const handleSelection = async () => {

    const testsAssigned = testsSelected
      .filter(test => test.selectedTest)
      .map(test => test.id)

    const request = {
      testIds: testsAssigned,
      studentId: state.id
    }

    const token = JSON.parse(window.localStorage.getItem('token') || '');

    usersHelper.setToken(token);

    loadingDispatch({ type: 'loading' })
    await usersHelper.updateUser(request)
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
            <h2 style={{ marginBottom: '15px', fontSize: '2rem', textAlign: 'center' }}
            >
              Select a test and save to make it available for {state.name}</h2>
            {
              testsSelected.map((test, index) => {
                return (
                  <div key={test.id}>
                    <div style={{ display: 'flex', margin: '0 10px 0 0' }}>

                      <label style={{ display: 'flex' }} htmlFor={`${index}`}>
                        <input
                          id={`${index}`}
                          type={'checkbox'}
                          defaultChecked={test.selectedTest ? test.selectedTest : false}
                          onChange={({ target }) => test.selectedTest = target.checked}
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
              onClick={handleSelection}
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