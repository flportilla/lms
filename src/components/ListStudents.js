import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import usersHelper from "../services/users"
import "../style/studentsList.css"
import Button from './Button'
import Loading from './Loading'

const ListStudents = ({ isLoading }) => {

    const [loadInfo, setloadInfo] = useState(false)
    const [students, setStudents] = useState([])
    const navigate = useNavigate()

    useEffect(() => {

        setloadInfo(true)
        const token = JSON.parse(window.localStorage.getItem('token') || '')
        usersHelper.setToken(token)

        usersHelper.getStudents()
            .then(response => setStudents([...response]))
            .then(() => setloadInfo(false))

    }, [isLoading])


    return (
        <div className='students_list_container'>
            <h3>Students List</h3>
            {
                loadInfo
                    ? <Loading />
                    : students.map(({ id, name }) => {
                        return <div key={id} className='student_card'>
                            <span>{name}</span>
                            <Button
                                onClick={() => { navigate('/list-tests', { state: { name, id } }) }}
                                type={'button'}
                                customClass={'test_button'}
                            >
                                Assing
                            </Button>
                            <Button
                                onClick={null}
                                type={'button'}
                                customClass={'test_button'}
                            >
                                Results
                            </Button>

                        </div>
                    })
            }

        </div >
    )
}

export default ListStudents