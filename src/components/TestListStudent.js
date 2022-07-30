import React from 'react'
import { useNavigate } from 'react-router-dom'
import testHelper from '../services/test'
import '../style/testsStudent.css'
import Button from './Button'

const Test = ({ tests }) => {

  const testList = tests.filter(test => test.selectedTest)
  const navigate = useNavigate()

  const handleTestStart = async (id) => {
    const takeTest = window.confirm('Do you want to start this test? You have only one chance, after you hit send you will see the results')

    if (takeTest) {

      window.localStorage.setItem('examId', id)
      const token = JSON.parse(window.localStorage.getItem('token'))
      testHelper.setToken(token)

      const exam = await testHelper.listSelected(id)

      navigate('/exam', { state: { exam } })
    }
  }

  return (
    <>
      {
        <div className='tests_container_student'>
          {
            testList.length === 0
              ? <h1>There are no tests available</h1>
              : testList.map((test = {}, index = 0) => {
                return (
                  <div key={test.id}>
                    <h2>{index + 1}. {test.name}</h2>
                    <p>Description</p>
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