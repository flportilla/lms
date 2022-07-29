import React from 'react'
import { useLocation } from 'react-router-dom'
import Button from '../components/Button'
import '../style/exam.css'


const Exam = () => {

    const { state } = useLocation()
    const { questions, name } = state.exam


    const handleAnswers = (e) => {
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
            name: window.localStorage.getItem('name'),
            score,
            examId: window.localStorage.getItem('examId')
        }



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