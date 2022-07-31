import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import resultsHelper from '../services/exam'
import Button from '../components/Button'
import '../style/results.css'

const Results = () => {

  const { state } = useLocation()

  const rol = state.rol
  const [results, setResults] = useState([])
  const [showInfo, setShowInfo] = useState(false)

  useEffect(() => {
    resultsHelper.getResults()
      .then(result => setResults(result))
  }, [])

  return (
    <>
      {
        rol === 'Professor'
          ? <div className='students_results'>
            <Button
              type={'button'}
              customClass={'show_info_button'}
              children={'Show results'}
              onClick={() => setShowInfo(!showInfo)}
            />
            <div className='empty_info'> Click button to expand</div>
            {
              results.map((result, index) => {
                return (
                  <div style={{ margin: '15px 0', fontSize: '1.2rem' }} key={index}>
                    Student: {result.name}
                    {
                      showInfo
                        ? <div className='students_results_info'>
                          {
                            result.tests.map((test, index) => {
                              return (
                                <div style={{ margin: '5px 0', fontSize: '1.2rem' }} key={index + 1}>
                                  <span> Test: {test.name} --</span>
                                  <span> Score: {test.score} --</span>
                                  <span> Time: {test.time}</span>
                                </div>
                              )
                            })}
                        </div>
                        : null
                    }
                  </div>
                )
              })}
          </div>
          : <h1>You are not allowed to watch this page</h1>
      }
    </>
  )
}

export default Results