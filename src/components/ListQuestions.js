import React, { useEffect, useState } from 'react'
import questionHelper from '../services/questions'
import Question from './Question'

const ListQuestions = () => {

  const isLogged = window.localStorage.getItem('rol') === 'Professor'
  const [questionsList, setQuestionsList] = useState([])

  useEffect(() => {
    const token = JSON.parse(window.localStorage.getItem('token'))
    questionHelper.setToken(token)

    questionHelper.listQuestions()
      .then(question => setQuestionsList(question))

  }, [])

  return (
    <>
      {isLogged
        ? <div>
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