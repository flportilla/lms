import React, { useEffect, useState } from 'react'
import Button from './Button'
import '../style/testCreator.css'
import testHelper from '../services/test'
import { useLocation, useNavigate } from 'react-router-dom'
import questionHelper from '../services/questions'
import Loading from './Loading'

const CreateTest = ({ isLoading, loadingDispatch }) => {

  const [questionsList, setQuestionsList] = useState([])
  const [loadInfo, setloadInfo] = useState(false)
  const isLogged = window.localStorage.getItem('rol') === 'Professor'

  useEffect(() => {

    const token = JSON.parse(window.localStorage.getItem('token'))
    questionHelper.setToken(token)

    if (isLogged) {
      setloadInfo(true)

      questionHelper.listQuestions()
        .then(question => setQuestionsList(question))
        .then(res => setloadInfo(false))

    }

  }, [isLoading])

  const [testName, setTestName] = useState('')
  const navigate = useNavigate()

  const handleTestCreation = async (e) => {
    e.preventDefault()

    const questionsSelected = questionsList
      .filter(question => question.selected === true)
      .map(question => question.id)

    if (!testName) return alert('Please enter a name for this exam')

    const exam = {
      name: testName,
      questions: questionsSelected
    }

    testHelper.setToken(JSON.parse(window.localStorage.getItem('token')))

    loadingDispatch({ type: 'loading' })
    await testHelper.addTest(exam)
    loadingDispatch({ type: 'notLoading' })

    alert('Test created')
    navigate('/professor')

    questionsList.map(question => question.selected = false)

  }

  const handleSelection = (target, id) => {
    const selectedQuestion = questionsList.find(question => question.id === id)
    selectedQuestion.selected = target.checked
  }

  return (

    <>
      {
        loadInfo
          ? <Loading />
          : <form
            className='create_test_form'
          >
            <input
              placeholder='...Enter test name here...'
              className='test_name_input'
              required
              type={'text'}
              value={testName}
              onChange={({ target }) => setTestName(target.value)}
            />
            <p>Please select the questions that you would like to add to this examn</p>
            {
              questionsList.map((question, index) => {
                return (
                  <div
                    className='question_container'

                    key={question.id}
                  >
                    <label htmlFor={index + 1}
                    >
                      <input
                        id={index + 1}
                        type={'checkbox'}
                        onChange={({ target }) => handleSelection(target, question.id)}
                      />
                      {index + 1}. {question.statement}
                    </label>
                  </div>
                )
              })
            }
            <Button
              onClick={handleTestCreation}
              children={'Create'}
              customClass={'create_test'}
              type={'submit'}
            />
          </form>

      }
    </>
  )
}

export default CreateTest