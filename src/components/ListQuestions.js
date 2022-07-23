import React, { useEffect, useState } from 'react'
import questionHelper from '../services/questions'

const ListQuestions = () => {

  const isLogged = window.localStorage.getItem('rol') === 'Professor'
  const token = JSON.parse(window.localStorage.getItem('token'))
  const [questionsList, setQuestionsList] = useState([])
  useEffect(() => {
    questionHelper.setToken(token)

    questionHelper.listQuestions()
      .then(res => setQuestionsList(res))

  }, [])



  return (
    <>
      {isLogged
        ? <div>
          {
            questionsList.map((question, index) => {
              return <div key={question.id}> {`${index + 1}. ${question.statement}`}</div>
            })
          }
        </div>
        : <h1 className='sign_in_first'>Please login to access this page</h1>}
    </>
  )
}

export default ListQuestions