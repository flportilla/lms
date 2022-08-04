import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import usersHelper from '../services/users'
import Loading from './Loading'

const IndividualResults = ({ isLoading }) => {

    const [loadInfo, setloadInfo] = useState(false)
    const [student, setStudent] = useState([])
    const { state } = useLocation()
    const { name, id: studentId } = state

    useEffect(() => {
        const token = JSON.parse(window.localStorage.getItem('token') || '')
        usersHelper.setToken(token)

        setloadInfo(true)
        usersHelper.getStudents()
            .then(res => {
                const result = res.find(student => student.id === studentId)
                setStudent(result.testsTaken.map(student => student))
            })
            .then(() => setloadInfo(false))
    }, [isLoading])

    return (
        <div className='individual_results_container'>
            {
                loadInfo
                    ? <Loading />
                    : <>
                        <h1>{name}</h1>
                        <div className='individual_result_card'>
                            <ul>
                                {
                                    student.map(({ name, score, time, id }) => {
                                        return <li key={id}>
                                            <h3>Test name: {name}</h3>
                                            <p>Score: {score}</p>
                                            <p>Time: {time}</p>
                                        </li>
                                    })
                                }

                            </ul>
                        </div>
                    </>

            }
        </div>
    )
}

export default IndividualResults