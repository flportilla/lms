import React, { useState } from 'react'
import questionHelper from '../services/questions'
import '../style/addQuestion.css'
import Button from './Button'
import TextArea from './TextArea'
import { useNavigate, useLocation } from 'react-router-dom';

const QuestionForm = ({ loadingDispatch }) => {

  const navigate = useNavigate()
  const { state } = useLocation()

  const { updateRequest, updatedQuestion: autoFilledQuestion, role } = state

  const [newQuestion, setNewQuestion] = useState({
    statement: updateRequest ? autoFilledQuestion.statement : '',
    opt1: updateRequest ? autoFilledQuestion.option1 : '',
    opt2: updateRequest ? autoFilledQuestion.option2 : '',
    opt3: updateRequest ? autoFilledQuestion.option3 : '',
    opt4: updateRequest ? autoFilledQuestion.option4 : '',
  })

  const [answer, setAnswer] = useState({
    answer: updateRequest ? autoFilledQuestion.answer : ''
  })

  const questionsForm = [
    {
      id: 2,
      htmlFor: 'opt1',
      customClass: 'textarea',
      type: 'text',
      children: 'Option 1',
      value: newQuestion.opt1,
      onChange: (value) => setNewQuestion({ ...newQuestion, opt1: value })
    },
    {
      id: 3,
      htmlFor: 'opt2',
      customClass: 'textarea',
      type: 'text',
      children: 'Option 2',
      value: newQuestion.opt2,
      onChange: (value) => setNewQuestion({ ...newQuestion, opt2: value })
    },
    {
      id: 4,
      htmlFor: 'opt3',
      customClass: 'textarea',
      type: 'text',
      children: 'Option 3',
      value: newQuestion.opt3,
      onChange: (value) => setNewQuestion({ ...newQuestion, opt3: value })
    },
    {
      id: 5,
      htmlFor: 'opt4',
      customClass: 'textarea',
      type: 'text',
      children: 'Option 4',
      value: newQuestion.opt4,
      onChange: (value) => setNewQuestion({ ...newQuestion, opt4: value })
    }
  ]

  const selectedAnswer = (id) => {
    setAnswer(current => { return { ...current, answer: newQuestion[id] } })
  }

  //Handles the creation of new questions
  const createQuestionRequest = async (e) => {
    e.preventDefault()

    loadingDispatch({ type: 'loading' })

    const addQuestionRequest = {
      statement: newQuestion.statement,
      opt1: newQuestion.opt1,
      opt2: newQuestion.opt2,
      opt3: newQuestion.opt3,
      opt4: newQuestion.opt4,
      answer
    }

    const token = window.localStorage.getItem('token')

    questionHelper.setToken(token)

    const response = await questionHelper.addQuestion(newQuestion)
    console.log(response)
    loadingDispatch({ type: 'notLoading' })

    // try {


    //   const token = JSON.parse(window.localStorage.getItem('token'))
    //   questionHelper.setToken(token)

    //   await questionHelper.addQuestion(newQuestion)
    //   loadingDispatch({ type: 'notLoading' })

    //   alert('Question added')
    // } catch (error) {
    //   loadingDispatch({ type: 'notLoading' })
    // }

  }

  const updateQuestionRequest = async (e) => {

    // loadingDispatch({ type: 'loading' })
    // const { id } = autoFilledQuestion

    // const updatedQuestion = {
    //   statement,
    //   option1,
    //   option2,
    //   option3,
    //   option4,
    //   answer
    // }

    // try {

    //   const token = JSON.parse(window.localStorage.getItem('token'))
    //   questionHelper.setToken(token)

    //   loadingDispatch({ type: 'loading' })
    //   await questionHelper.updateQuestion(id, updatedQuestion)
    //   loadingDispatch({ type: 'notLoading' })

    //   alert('Question updated')

    //   navigate('/list-questions')

    // } catch (error) {
    //   loadingDispatch({ type: 'notLoading' })
    // }

  }

  return (
    <>{
      role === 'PROFESSOR_ROLE'
        ? <form
          className='add_question_form'
          onSubmit={updateRequest ? updateQuestionRequest : createQuestionRequest}
        >
          <h2 style={{ padding: '0', margin: '0', textAlign: 'center' }}>To create a new question:</h2>
          <h2 style={{ padding: '0', margin: '0', textAlign: 'center' }}>Fill this form, select the answer and click create</h2>

          <TextArea
            selectedAnswer={null}
            customClass={'textarea'}
            key={null}
            htmlFor={null}
            value={newQuestion.statement}
            onChange={({ target }) => setNewQuestion({ ...newQuestion, statement: target.value })}
            children={'Statement'}
          />
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
                  selectedAnswer={({ target }) => selectedAnswer(target.id)}
                  customClass={customClass}
                  key={id}
                  htmlFor={htmlFor}
                  value={value}
                  onChange={({ target }) => onChange(target.value)}
                  children={children}
                />
              )
            })
          }
          {
            <>
              {
                updateRequest
                  ? <Button
                    onClick={null}
                    children={'Update'}
                    customClass={null}
                    type={'submit'}
                  />
                  :
                  <Button
                    onClick={null}
                    children={'Create'}
                    customClass={null}
                    type={'submit'}
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