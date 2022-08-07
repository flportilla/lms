import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import { useLocation, useNavigate } from 'react-router-dom';

import Button from './Button'

import '../style/professor.css'

const Professor = () => {

  const { state } = useLocation()

  const { role, name } = state

  const navigate = useNavigate();

  const professorControls = [
    {
      id: uuidv4(),
      onclick: () => navigate('/add-question', { state: { updateRequest: false, role } }),
      customClass: 'command',
      type: 'button',
      children: 'Add question'
    },
    {
      id: uuidv4(),
      onclick: () => navigate('/create-test'),
      customClass: 'command',
      type: 'button',
      children: 'Create test'
    },
    {
      id: uuidv4(),
      onclick: () => navigate('/results', { state: { role, name } }),
      customClass: 'command',
      type: 'button',
      children: 'results'
    },
    {
      id: uuidv4(),
      onclick: () => navigate('/list-questions'),
      customClass: 'command',
      type: 'button',
      children: 'Show questions'
    }
    ,
    {
      id: uuidv4(),
      onclick: () => navigate('/list-students'),
      customClass: 'command',
      type: 'button',
      children: 'Assing tests'
    }
  ]
  return (
    <>
      {
        role === 'PROFESSOR_ROLE'
          ? <section className='professor_section'>
            <div className='controls_container' >
              {
                professorControls.map(({ id, onclick, customClass, type, children }) => {
                  return <Button
                    key={id}
                    onClick={onclick}
                    customClass={customClass}
                    type={type}
                  >{children}</Button>
                })
              }
            </div>
          </section>
          : <h1 className='sign_in_first'>Please login to access this page</h1>
      }
    </>
  )
}

export default Professor