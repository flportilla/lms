import React from 'react'
import Button from './Button'
import '../style/student.css'

const Indicators = () => {

  return (
    <div className='indicators'>
      <Button
        onClick={null}
        customClass={'progress'}
        type={'button'}
      >
        <span>0%</span>
        <span>Avance</span>
      </Button >

      <Button
        onClick={null}
        customClass={'duration'}
        type={'button'}
      >
        <span>14h:00m</span>
        <span>Duración</span>
      </Button >

      <Button
        onClick={null}
        customClass={'navegation'}
        type={'button'}
      >
        <span>00:00</span>
        <span>Navegación</span>
      </Button >

      <Button
        onClick={null}
        customClass={'test'}
        type={'button'}
      >
        <span>No intentada</span>
        <span>Evaluación</span>
      </Button >
    </div>
  )
}

export default Indicators