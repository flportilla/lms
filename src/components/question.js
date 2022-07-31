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
}) => {

  const navigate = useNavigate()

  //Sends a request and brings the selected question as a result
  const handleQuestionByIdRequest = async () => {

    try {
      const response = await questionHelper.questionById(id)

      window.localStorage.setItem('updatedQuestion', JSON.stringify(response))
      navigate('/update-question')

    } catch (error) {
      console.error(error)
    }
  }

  //Sends a request to delete the question selected
  const handleDeleteRequest = async (index) => {

    const result = window.confirm(`Are you sure you want to delete question # ${index + 1}?`);

    if (result) {
      try {
        await questionHelper.deleteQuestionById(id)
        window.location.reload()

      } catch (error) {
        console.error(error)
      }
    }
  }

  return (
    <>
      {
        <form className='question_form'>
          <div className='edit_delete_buttons_container'>
            <Button
              onClick={handleQuestionByIdRequest}
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

          <div className='options_container'>Selected is the answer *

            <label className='question_label' htmlFor={id + 1}>
              <input
                type={'checkbox'} id={id + 1}
                defaultChecked={option1 === answer ? true : false}
              />
              1.: {option1}
            </label>
            <label className='question_label' htmlFor={id + 2}>
              <input
                defaultChecked={option2 === answer ? true : false}
                type={'checkbox'} id={id + 2} />
              2.: {option2}

            </label>
            <label className='question_label' htmlFor={id + 3}>
              <input
                defaultChecked={option3 === answer ? true : false}
                type={'checkbox'} id={id + 3} />
              3.: {option3}

            </label>
            <label className='question_label' htmlFor={id + 4}>
              <input
                defaultChecked={option4 === answer ? true : false}
                type={'checkbox'} id={id + 4} />
              4.: {option4}

            </label>
          </div>
          <span className='answer_container'>Answer:
            <p>{answer}</p> </span >
        </form>
      }
    </>
  )
}

export default Question