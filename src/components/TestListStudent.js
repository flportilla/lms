import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import testHelper from '../services/test'
import usersHelper from '../services/users'
import '../style/testsStudent.css'
import Button from './Button'
import Loading from './Loading'

const Test = ({ isLoading, loadingDispatch }) => {

  const rol = window.localStorage.getItem('rol')

  const [tests, setTests] = useState([])
  const [loadInfo, setloadInfo] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {

    if (!rol) return
    setloadInfo(true)
    const token = JSON.parse(window.localStorage.getItem('token') || '')

    testHelper.setToken(token)

    testHelper.listTests()
      .then(test => setTests(test))
      .then(() => setloadInfo(false))

  }, [isLoading])

  const handleTestStart = async (id) => {
    const takeTest = window.confirm('Do you want to start this test? You have only one chance, after you hit send you will see the results')

    if (takeTest) {
      const exam = tests.testsAssigned.find(test => test.id === id)
      const newTestsList = tests.testsAssigned.filter(test => test.id !== id).map(test => test.id)

      const request = {
        studentId: tests.id,
        testIds: newTestsList
      }
      const token = JSON.parse(window.localStorage.getItem('token') || '')

      try {
        usersHelper.setToken(token)

        loadingDispatch({ type: 'loading' })
        await usersHelper.updateUser(request)
        loadingDispatch({ type: 'notLoading' })

        navigate('/exam', { state: { exam } })
      } catch (error) {
        loadingDispatch({ type: 'notLoading' })
      }

    }
  }

  return (
    <>
      {loadInfo
        ? <Loading />
        :
        <div className='tests_container_student'>
          {
            !tests.testsAssigned
              ? <h1>There are no tests available</h1>
              : tests.testsAssigned.map((test, index = 0) => {
                return (
                  <div key={test.id}>
                    <h2>{index + 1}. {test.name}</h2>
                    <Button
                      type={'button'}
                      customClass={null}
                      children={`take test ${index + 1}`}
                      onClick={() => handleTestStart(test.id)}
                    />
                  </div>
                )
              })
          }
        </div>
      }
    </>
  )
}

export default Test