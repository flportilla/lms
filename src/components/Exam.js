import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import testHelper from '../services/test'

const Exam = () => {

    const { state } = useLocation()

    useEffect(() => {
        if (!state) return

        const token = JSON.parse(window.localStorage.getItem('token'))
        testHelper.setToken(token)
        testHelper.listSelected(state.id)

    }, [state])

    return (
        <div>Exam</div>
    )
}

export default Exam