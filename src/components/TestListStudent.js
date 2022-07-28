import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../style/testsStudent.css'
import Button from './Button'

const Test = ({ tests }) => {

  const testList = tests.filter(test => test.selectedTest)
  const navigate = useNavigate()

  const handleTestStart = (id) => {
    const takeTest = window.confirm('Do you want to start this test?')
    if (takeTest) {
      navigate('/exam', { state: { id } })
    }
  }

  return (
    <>
      {
        <div className='tests_container_student'>
          {
            testList.map((test = {}, index = 0) => {
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