import React from 'react'
import Question from './Question'
import '../style/questionList.css'

const ListQuestions = ({ questionsList }) => {

  const isLogged = window.localStorage.getItem('rol') === 'Professor'

  return (
    <>
      {isLogged
        ? <div className='questions_list'>
          {
            questionsList.map(({ statement, option1, option2, option3, option4, answer, id }, index) => {
              return <Question
                index={index}
                key={id}
                statement={statement}
                option1={option1}
                option2={option2}
                option3={option3}
                option4={option4}
                answer={answer}
                id={id}
              />
            })
          }
        </div>
        : <h1 className='sign_in_first'>Please login to access this page</h1>}
    </>
  )
}

export default ListQuestions