import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../style/question.css'
import Button from './Button'
import questionHelper from '../services/questions'

const Question = ({ statement,
  option1,
  option2,
  option3,
  option4,
  answer,
  id,
  index,
  loadingDispatch
}) => {

  const navigate = useNavigate()

  //Sends a request and brings the selected question as a result
  const handleQuestionByIdRequest = async () => {


    try {
      loadingDispatch({ type: 'loading' })
      const response = await questionHelper.questionById(id)
      loadingDispatch({ type: 'notLoading' })

      window.localStorage.setItem('updatedQuestion', JSON.stringify(response))
      navigate('/update-question', { state: { updatedQuestion: response, request: true } })
    } catch (error) {
      loadingDispatch({ type: 'notLoading' })

    }



  }

  //Sends a request to delete the question selected
  const handleDeleteRequest = async (index) => {

    const result = window.confirm(`Are you sure you want to delete question # ${index + 1}?`);

    if (result) {
      try {
        loadingDispatch({ type: 'loading' })
        await questionHelper.deleteQuestionById(id)
        loadingDispatch({ type: 'notLoading' })
      } catch (error) {
        loadingDispatch({ type: 'notLoading' })
      }

    }
  }

  return (
    <>
      {
        <form className='question_form'>
          <div className='edit_delete_buttons_container'>
            <Button
              onClick={() => handleQuestionByIdRequest()}
              children={`Edit #${index + 1}`}
              customClass={'edit_button'}
              type={'button'}
            />
            <Button
              onClick={() => handleDeleteRequest(index)}
              children={`Delete #${index + 1}`}
              customClass={'edit_button'}
              type={'button'}
            />
          </div>
          <p className='statement'>{`${index + 1}. ${statement}`}:</p>

          <div className='options_container'>
            <ul>
              <li>1. {option1}</li>
              <li>2. {option2}</li>
              <li>3. {option3}</li>
              <li>4. {option4}</li>
            </ul>
          </div>
          <span className='answer_container'>Answer:
            <p>{answer}</p> </span >
        </form>
      }
    </>
  )
}

export default Question
