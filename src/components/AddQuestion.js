import React, { useState } from 'react'
import InputItem from './InputItem'
import '../style/addQuestion.css'
import Button from './Button'

const AddQuestion = () => {

  const [statement, setStatement] = useState('')
  const [option1, setOption1] = useState('')
  const [option2, setOption2] = useState('')
  const [option3, setOption3] = useState('')
  const [option4, setOption4] = useState('')
  const [answer, setAnswer] = useState('')

  const createQuestionRequest = (e) => {
    e.preventDefault()

    const newQuestion = {
      statement,
      option1,
      option2,
      option3,
      option4,
      answer
    }




  }

  const questionsForm = [
    {
      id: 1,
      htmlFor: 'statement',
      type: 'text',
      isRequired: true,
      children: 'statement',
      value: statement,
      onChange: setStatement
    },
    {
      id: 2,
      htmlFor: 'option1',
      type: 'text',
      isRequired: true,
      children: 'Option 1',
      value: option1,
      onChange: setOption1
    },
    {
      id: 3,
      htmlFor: 'option2',
      type: 'text',
      isRequired: true,
      children: 'Option 2',
      value: option2,
      onChange: setOption2
    },
    {
      id: 4,
      htmlFor: 'option3',
      type: 'text',
      isRequired: true,
      children: 'Option 3',
      value: option3,
      onChange: setOption3
    },
    {
      id: 5,
      htmlFor: 'option4',
      type: 'text',
      isRequired: true,
      children: 'Option 4',
      value: option4,
      onChange: setOption4
    },
    {
      id: 6,
      htmlFor: 'answer',
      type: 'text',
      isRequired: true,
      children: 'Answer',
      value: answer,
      onChange: setAnswer
    },
  ]

  const isLogged = window.localStorage.getItem('rol') === 'Professor'

  return (

    <>{
      isLogged
        ? <form
          className='add_question_form'
          onSubmit={createQuestionRequest}>
          {
            questionsForm.map(question => {
              return (
                <InputItem
                  key={question.id}
                  htmlFor={question.htmlFor}
                  value={question.value}
                  type={question.type}
                  onChange={({ target }) => question.onChange(target.value)}
                  isRequired={question.isRequired}
                  children={question.children}
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

export default AddQuestion