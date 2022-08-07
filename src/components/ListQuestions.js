import React, { useEffect, useState } from 'react'
import Question from './Question'
import '../style/questionList.css'
import questionHelper from '../services/questions'
import Loading from './Loading'

const ListQuestions = ({ loadingDispatch, isLoading }) => {

  const [questionsList, setQuestionsList] = useState([])
  const [loadInfo, setloadInfo] = useState(false)
  const isLogged = window.localStorage.getItem('role') === 'Professor'

  useEffect(() => {

    const token = JSON.parse(window.localStorage.getItem('token') || '')
    questionHelper.setToken(token)

    if (isLogged) {
      setloadInfo(true)
      questionHelper.listQuestions()
        .then(question => setQuestionsList(question))
        .then(res => setloadInfo(false))
    }

  }, [isLoading, isLogged])

  return (
    <>
      {
        loadInfo
          ? <Loading />
          : isLogged
            ? <div className='questions_list'>
              {
                questionsList.map(({ statement, option1, option2, option3, option4, answer, id }, index) => {
                  return <Question
                    loadingDispatch={loadingDispatch}
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