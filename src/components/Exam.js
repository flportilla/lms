import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Button from '../components/Button'
import resultsHelper from '../services/exam'
import '../style/exam.css'

const Exam = () => {

  const [time, setTime] = useState(0)
  const { state } = useLocation()
  const { questions, name } = state.exam
  const navigate = useNavigate()

  let sec = time % 60
  let min = Math.floor((time / 60) % 60);
  let hrs = Math.floor((time / 3600) % 60);

  let intervalId;
  useEffect(() => {
    intervalId = setInterval(() => {
      setTime((prevTime) => prevTime + 1);

    }, 1000);
    return () => clearInterval(intervalId);
  }, []);


  //Filters the answers selected and compares them with the correct ones
  const handleAnswers = async (e) => {
    e.preventDefault()
    const correctAnswers = questions.map(question => {

      let correct = 0;
      if (question.answer === question.selectedAnswer) {
        correct++
      }
      return correct
    }).reduce((prev, curr) => prev + curr, 0)

    const score = ((correctAnswers / questions.length) * 100).toFixed(1) + "%"

    const results = {
      examId: window.localStorage.getItem('examId'),
      name,
      score,
      userId: window.localStorage.getItem('userId'),
      time: `${hrs}h ${min}m ${sec}s`
    }
    try {
      await resultsHelper.sendResults(results)
      handleSend(score)
    }
    catch (error) {
      console.error(error)
    }
  }

  //Controls the behaviour of the 'send' button on the exam
  const handleSend = (score) => {
    alert(`The exam is over, your score is: ${score} and the total time was ${hrs}h ${min}m ${sec}s`)
    navigate('/test');
    window.location.reload()
    clearInterval(intervalId)
  }


  return (
    <div className='exam_container'>

      <h2 className='exam_name'>{name}</h2>

      <form
        onSubmit={handleAnswers}
        className={'exam_form'}
      >
        {
          questions.map((question, index) => {
            return (
              <div
                key={question.id}
                className={'questions_container'}
              >
                <p>{index + 1}. {question.statement}</p>

                <label>
                  <input
                    name={question.id}
                    type={'radio'}
                    value={question.option1}
                    required
                    onChange={({ target }) => question.selectedAnswer = target.value}
                  />
                  {question.option1}
                </label>
                <label>
                  <input
                    name={question.id}
                    type={'radio'}
                    value={question.option2}
                    required
                    onChange={({ target }) => question.selectedAnswer = target.value}
                  />
                  {question.option2}
                </label>
                <label>
                  <input
                    name={question.id}
                    type={'radio'}
                    value={question.option3}
                    required
                    onChange={({ target }) => question.selectedAnswer = target.value}
                  />
                  {question.option3}
                </label>
                <label>
                  <input
                    name={question.id}
                    type={'radio'}
                    value={question.option4}
                    required
                    onChange={({ target }) => question.selectedAnswer = target.value}
                  />
                  {question.option4}
                </label>
                <hr />
              </div>
            )
          })
        }
        <Button
          customClass={null}
          onClick={null}
          children={'Send'}
          type={'submit'}
        />
      </form>
    </div >
  )
}

export default Exam