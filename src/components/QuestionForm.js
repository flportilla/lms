import React, { useState } from 'react'
import questionHelper from '../services/questions'
import '../style/addQuestion.css'
import Button from './Button'
import TextArea from './TextArea'
import { useNavigate, useLocation } from 'react-router-dom';

const QuestionForm = ({
  loadingDispatch
}) => {

  const { state } = useLocation()
  const { request, updatedQuestion: autoFilledQuestion } = state
  const isLogged = window.localStorage.getItem('role') === 'Professor'

  const [statement, setStatement] = useState(request
    ? `${autoFilledQuestion.statement}`
    : 'statement'
  )
  const [option1, setOption1] = useState(request
    ? `${autoFilledQuestion.option1}`
    : 'option1'
  )
  const [option2, setOption2] = useState(request
    ? `${autoFilledQuestion.option2}`
    : 'option2'
  )
  const [option3, setOption3] = useState(request
    ? `${autoFilledQuestion.option3}`
    : 'option3'
  )
  const [option4, setOption4] = useState(request
    ? `${autoFilledQuestion.option4}`
    : 'option4'
  )
  const [answer, setAnswer] = useState(request
    ? `${autoFilledQuestion.answer}`
    : 'answer'
  )
  const navigate = useNavigate()

  const questionsForm = [
    {
      id: 1,
      htmlFor: 'statement',
      customClass: 'textarea',
      type: 'text',
      isRequired: true,
      children: 'statement',
      value: statement,
      onChange: setStatement
    },
    {
      id: 2,
      htmlFor: 'option1',
      customClass: 'textarea',
      type: 'text',
      isRequired: true,
      children: 'Option 1',
      value: option1,
      onChange: setOption1
    },
    {
      id: 3,
      htmlFor: 'option2',
      customClass: 'textarea',
      type: 'text',
      isRequired: true,
      children: 'Option 2',
      value: option2,
      onChange: setOption2
    },
    {
      id: 4,
      htmlFor: 'option3',
      customClass: 'textarea',
      type: 'text',
      isRequired: true,
      children: 'Option 3',
      value: option3,
      onChange: setOption3
    },
    {
      id: 5,
      htmlFor: 'option4',
      customClass: 'textarea',
      type: 'text',
      isRequired: true,
      children: 'Option 4',
      value: option4,
      onChange: setOption4
    },
    {
      id: 6,
      htmlFor: 'answer',
      customClass: 'textarea',
      type: 'text',
      isRequired: true,
      children: 'Answer',
      value: answer,
      onChange: setAnswer
    },
  ]

  //Handles the creation of new questions
  const createQuestionRequest = async (e) => {

    loadingDispatch({ type: 'loading' })
    try {

      const newQuestion = {
        statement,
        option1,
        option2,
        option3,
        option4,
        answer,
        loadingDispatch
      }

      const token = JSON.parse(window.localStorage.getItem('token'))
      questionHelper.setToken(token)

      await questionHelper.addQuestion(newQuestion)
      loadingDispatch({ type: 'notLoading' })

      alert('Question added')
    } catch (error) {
      loadingDispatch({ type: 'notLoading' })
    }

  }

  const updateQuestionRequest = async (e) => {

    loadingDispatch({ type: 'loading' })
    const { id } = autoFilledQuestion

    const updatedQuestion = {
      statement,
      option1,
      option2,
      option3,
      option4,
      answer
    }

    try {

      const token = JSON.parse(window.localStorage.getItem('token'))
      questionHelper.setToken(token)

      loadingDispatch({ type: 'loading' })
      await questionHelper.updateQuestion(id, updatedQuestion)
      loadingDispatch({ type: 'notLoading' })

      alert('Question updated')

      navigate('/list-questions')

    } catch (error) {
      loadingDispatch({ type: 'notLoading' })
    }

  }

  return (
    <>{
      isLogged
        ? <form
          className='add_question_form'>
          {
            questionsForm.map(({
              children,
              customClass,
              id,
              htmlFor,
              value,
              onChange,
              isRequired
            }) => {

              return (
                <TextArea
                  customClass={customClass}
                  key={id}
                  htmlFor={htmlFor}
                  value={value}
                  onChange={({ target }) => onChange(target.value)}
                  isRequired={isRequired}
                  children={children}
                />
              )
            })
          }
          {
            <>
              {
                request
                  ? <Button
                    onClick={state.request ? updateQuestionRequest : createQuestionRequest}
                    children={'Update'}
                    customClass={null}
                    type={'button'}
                  />
                  :
                  <Button
                    onClick={state.request ? updateQuestionRequest : createQuestionRequest}
                    children={'Create'}
                    customClass={null}
                    type={'button'}
                  />
              }
            </>
          }
        </form>
        : <h1 className='sign_in_first'>Please login as a Professor to access this page</h1>
    }
    </>
  )
}

export default QuestionForm