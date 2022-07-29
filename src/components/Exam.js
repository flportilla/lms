import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import Button from '../components/Button'


const Exam = () => {

    const { state } = useLocation()
    const { questions, name } = state.exam


    const handleAnswers = (e) => {
        e.preventDefault()
        const correctAnswers = questions.map(question => {
            let counter = 0;
            if (question.answer === question.selectedAnswer) {
                counter++
            }
            return counter
        }).reduce((prev, curr) => prev + curr, 0)


        console.log(correctAnswers, questions)
    }
    return (
        <div className='exam_container'>

            <h2>{name}</h2>

            <form onSubmit={handleAnswers}>
                {
                    questions.map(question => {
                        return (
                            <div key={question.id}>
                                <p>{question.statement}</p>

                                <label>
                                    <input
                                        name={question.id}
                                        type={'radio'}
                                        value={question.option1}
                                        onChange={({ target }) => question.selectedAnswer = target.value}
                                    />
                                    {question.option1}
                                </label>
                                <label>
                                    <input
                                        name={question.id}
                                        type={'radio'}
                                        value={question.option2}
                                        onChange={({ target }) => question.selectedAnswer = target.value}
                                    />
                                    {question.option2}
                                </label>
                                <label>
                                    <input
                                        name={question.id}
                                        type={'radio'}
                                        value={question.option3}
                                        onChange={({ target }) => question.selectedAnswer = target.value}
                                    />
                                    {question.option3}
                                </label>
                                <label>
                                    <input
                                        name={question.id}
                                        type={'radio'}
                                        value={question.option4}
                                        onChange={({ target }) => question.selectedAnswer = target.value}
                                    />
                                    {question.option4}
                                </label>
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