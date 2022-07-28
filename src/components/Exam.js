import React from 'react'
import { useLocation } from 'react-router-dom'


const Exam = () => {

    const { state } = useLocation()

    const { questions, name } = state.exam

    return (
        <div className='exam_container'>

            <h2>{name}</h2>
            <ul>
                {
                    questions.map(question => {
                        return (
                            <div key={question.id}>
                                <p>{question.statement}</p>
                                <ul>
                                    <li>
                                        <input type={'checkbox'} />
                                        {question.option1}
                                    </li>
                                    <li>
                                        <input type={'checkbox'} />
                                        {question.option2}
                                    </li>
                                    <li>
                                        <input type={'checkbox'} />
                                        {question.option3}
                                    </li>
                                    <li>
                                        <input type={'checkbox'} />
                                        {question.option4}
                                    </li>
                                </ul>
                            </div>
                        )
                    })
                }
            </ul>
        </div >
    )
}

export default Exam