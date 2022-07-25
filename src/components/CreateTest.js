import React from 'react'
import Button from './Button'
import '../style/testCreator.css'

const CreateTest = ({ questionsList }) => {

  //TODO: 
  //[] Send request to create exam only with selected questions
  //[] Show the body of the question only on 'expand' button click
  //[] Add expand button
  //[] Add styles to separate question statements
  //[] Create a model for DB to store exams
  //[] Create a route to receive requests to exam creation
  //[] Create a service to send requests to exam creation

  const handleTestCreation = (e) => {
    e.preventDefault()
    const selected = questionsList.filter(question => question.selected === true)
    //console.log(selected)

  }

  const handleSelection = (target, id) => {
    const selectedQuestion = questionsList.find(question => question.id === id)
    selectedQuestion.selected = target.checked
  }

  return (
    <form
      className='create_test_form'
    >
      {
        questionsList.map((question, index) => {
          return (
            <div
              key={question.id}
            >
              <label htmlFor={index + 1}
              >
                <input
                  id={index + 1}
                  type={'checkbox'}
                  onChange={({ target }) => handleSelection(target, question.id)}
                />
                {question.statement}
              </label>
            </div>
          )
        })
      }
      <Button
        onClick={handleTestCreation}
        children={'Create'}
        customClass={null}
        type={'submit'}
      />
    </form>
  )
}

export default CreateTest