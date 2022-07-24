import React from 'react'
import '../style/question.css'
import Button from '../components/Button'

const Question = ({ statement,
  option1,
  option2,
  option3,
  option4,
  answer,
  id,
  index }) => {

  return (

    <>
      {
        <form className='question_form'>
          <Button
            onClick={null}
            children={`Edit ${index + 1}`}
            customClass={'edit_button'}
            type={'button'}
          />
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