import React from 'react'
import Button from './Button'
import '../style/professor.css'
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

const Professor = () => {

  const isLogged = window.localStorage.getItem('rol') === 'Professor'
  const navigate = useNavigate();
  const professorControls = [
    {
      id: uuidv4(),
      onclick: () => navigate('/add-question'),
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
      onclick: () => navigate('/results', { state: { rol: window.localStorage.getItem('rol') } }),
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
      onclick: () => navigate('/list-tests'),
      customClass: 'command',
      type: 'button',
      children: 'Show tests'
    }
  ]
  return (
    <>
      {
        isLogged
          ? <section className='professor_section'>
            <div className='controls_container' >
              {
                professorControls.map(command => {
                  return <Button
                    key={command.id}
                    onClick={command.onclick}
                    customClass={command.customClass}
                    type={command.type}
                  >{command.children}</Button>
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