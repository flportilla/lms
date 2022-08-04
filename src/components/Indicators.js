import React from 'react'
import Button from './Button'
import '../style/student.css'
import { v4 as uuidv4 } from 'uuid';

const indicatorsButtons = [
  {
    id: uuidv4(),
    onclick: null,
    customClass: 'progress',
    type: 'button',
    children: {
      text1: '0%',
      text2: 'Lorem'
    }
  },
  {
    id: uuidv4(),
    onclick: null,
    customClass: 'duration',
    type: 'button',
    children: {
      text1: '14h:00m',
      text2: 'Lorem'
    }
  },
  {
    id: uuidv4(),
    onclick: null,
    customClass: 'navegation',
    type: 'button',
    children: {
      text1: '00:00',
      text2: 'Lorem'
    }
  },
  {
    id: uuidv4(),
    onclick: null,
    customClass: 'test',
    type: 'button',
    children: {
      text1: 'Lorem ipsum',
      text2: 'Lorem'
    }
  }

]

const Indicators = () => {

  return (

    <div className='indicators'>
      {indicatorsButtons.map(indicator => {
        return <Button
          key={indicator.id}
          onClick={indicator.onclick}
          customClass={indicator.customClass}
          type={indicator.type}
        >
          <span>
            {indicator.children.text1}
          </span>
          <span>
            {indicator.children.text2}
          </span>
        </Button>
      })}
    </div>
  )
}

export default Indicators