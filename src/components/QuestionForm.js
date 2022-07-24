import React, { useState } from 'react'
import questionHelper from '../services/questions'
import '../style/addQuestion.css'
import Button from './Button'
import TextArea from './TextArea'

const QuestionForm = ({
  request = false,
  updatedStatement,
  updatedOption1,
  updatedOption2,
  updatedOption3,
  updatedOption4,
  updatedAnswer
}) => {

  const [statement, setStatement] = useState('')
  const [option1, setOption1] = useState('')
  const [option2, setOption2] = useState('')
  const [option3, setOption3] = useState('')
  const [option4, setOption4] = useState('')
  const [answer, setAnswer] = useState('')
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

  const createQuestionRequest = async (e) => {
    e.preventDefault()

    const newQuestion = {
      statement,
      option1,
      option2,
      option3,
      option4,
      answer
    }

    const token = JSON.parse(window.localStorage.getItem('token'))

    try {

      questionHelper.setToken(token)

      await questionHelper.addQuestion(newQuestion)
      alert('Question added')

      setStatement('')
      setOption1('')
      setOption2('')
      setOption3('')
      setOption4('')
      setAnswer('')

    } catch (error) {
      console.error(error)
      alert('Something went wrong')
    }
  }

  const updateQuestionRequest = (e) => {
    e.preventDefault()
    console.log(request,
      updatedStatement,
      updatedOption1,
      updatedOption2,
      updatedOption3,
      updatedOption4,
      updatedAnswer)
  }


  const isLogged = window.localStorage.getItem('rol') === 'Professor'

  return (
    <>{
      isLogged
        ? <form
          className='add_question_form'
          onSubmit={request ? updateQuestionRequest : createQuestionRequest}>
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
          <Button
            onClick={null}
            children={'Create'}
            customClass={null}
            type={'submit'}
          />
        </form>
        : <h1 className='sign_in_first'>Please login as a Professor to access this page</h1>
    }
    </>
  )
}

export default QuestionForm