import React, { useState } from 'react'
import questionHelper from '../services/questions'
import '../style/addQuestion.css'
import Button from './Button'
import TextArea from './TextArea'
import { useNavigate, useLocation } from 'react-router-dom';





// const questionsForm = [
//   {
//     id: 1,
//     htmlFor: 'statement',
//     customClass: 'textarea',
//     type: 'text',
//     isRequired: true,
//     children: 'statement',
//     value: newQuestion.statement,
//     onChange: setNewQuestion({ ...newQuestion, statement: newQuestion.statement })

//   },
//   {
//     id: 2,
//     htmlFor: 'option1',
//     customClass: 'textarea',
//     type: 'text',
//     isRequired: true,
//     children: 'Option 1',
//     value: newQuestion.opt1,
//     onChange: setNewQuestion({ ...newQuestion, opt1: newQuestion.opt1 })
//   },
//   {
//     id: 3,
//     htmlFor: 'option2',
//     customClass: 'textarea',
//     type: 'text',
//     isRequired: true,
//     children: 'Option 2',
//     value: newQuestion.opt2,
//     onChange: setNewQuestion({ ...newQuestion, opt2: newQuestion.opt2 })
//   },
//   {
//     id: 4,
//     htmlFor: 'option3',
//     customClass: 'textarea',
//     type: 'text',
//     isRequired: true,
//     children: 'Option 3',
//     value: newQuestion.opt3,
//     onChange: setNewQuestion({ ...newQuestion, opt3: newQuestion.opt3 })
//   },
//   {
//     id: 5,
//     htmlFor: 'option4',
//     customClass: 'textarea',
//     type: 'text',
//     isRequired: true,
//     children: 'Option 4',
//     value: newQuestion.opt4,
//     onChange: ({ target }) => setNewQuestion({ ...newQuestion, opt4: target.value })
//   },
//   {
//     id: 6,
//     htmlFor: 'answer',
//     customClass: 'textarea',
//     type: 'text',
//     isRequired: true,
//     children: 'Answer',
//     value: answer,
//     onChange: setAnswer
//   },
// ]


const QuestionForm = ({ loadingDispatch }) => {

  const navigate = useNavigate()
  const { state } = useLocation()


  const { updateRequest, updatedQuestion: autoFilledQuestion, role } = state

  const [testnewQuestion, testsetNewQuestion] = useState({
    statement: updateRequest ? autoFilledQuestion.statement : '',
    opt1: updateRequest ? autoFilledQuestion.option1 : '',
    opt2: updateRequest ? autoFilledQuestion.option2 : '',
    opt3: updateRequest ? autoFilledQuestion.option3 : '',
    opt4: updateRequest ? autoFilledQuestion.option4 : '',
  })

  const [testanswer, testsetAnswer] = useState({
    answer: updateRequest ? autoFilledQuestion.answer : ''
  })

  console.log(testnewQuestion, testanswer)

  const questionsForm = [
    {
      id: 1,
      htmlFor: 'statement',
      customClass: 'textarea',
      type: 'text',
      isRequired: true,
      children: 'statement',
      value: testnewQuestion.statement,
      onChange: (value) => testsetNewQuestion({ ...testnewQuestion, statement: value })
    },
    {
      id: 2,
      htmlFor: 'option1',
      customClass: 'textarea',
      type: 'text',
      isRequired: true,
      children: 'Option 1',
      value: testnewQuestion.opt1,
      onChange: (value) => testsetNewQuestion({ ...testnewQuestion, opt1: value })
    },
    {
      id: 3,
      htmlFor: 'option2',
      customClass: 'textarea',
      type: 'text',
      isRequired: true,
      children: 'Option 2',
      value: testnewQuestion.opt2,
      onChange: (value) => testsetNewQuestion({ ...testnewQuestion, opt2: value })
    },
    {
      id: 4,
      htmlFor: 'option3',
      customClass: 'textarea',
      type: 'text',
      isRequired: true,
      children: 'Option 3',
      value: testnewQuestion.opt3,
      onChange: (value) => testsetNewQuestion({ ...testnewQuestion, opt3: value })
    },
    {
      id: 5,
      htmlFor: 'option4',
      customClass: 'textarea',
      type: 'text',
      isRequired: true,
      children: 'Option 4',
      value: testnewQuestion.opt4,
      onChange: (value) => testsetNewQuestion({ ...testnewQuestion, opt4: value })
    },
    // {
    //   id: 6,
    //   htmlFor: 'answer',
    //   customClass: 'textarea',
    //   type: 'text',
    //   isRequired: true,
    //   children: 'Answer',
    //   value: testanswer.answer,
    //   onChange: (value) => testsetAnswer(value)
    // },
  ]

  //Handles the creation of new questions
  const createQuestionRequest = async (e) => {

    // loadingDispatch({ type: 'loading' })
    // try {

    //   const newQuestion = {
    //     statement,
    //     option1,
    //     option2,
    //     option3,
    //     option4,
    //     answer,
    //     loadingDispatch
    //   }

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
                updateRequest
                  ? <Button
                    onClick={updateRequest ? updateQuestionRequest : createQuestionRequest}
                    children={'Update'}
                    customClass={null}
                    type={'button'}
                  />
                  :
                  <Button
                    onClick={updateRequest ? updateQuestionRequest : createQuestionRequest}
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