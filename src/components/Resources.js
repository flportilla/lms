import React from 'react'
import Button from './Button'
import { RiSurveyFill } from 'react-icons/ri';
import { FcDiploma2 } from 'react-icons/fc';
import { GiStoneAxe } from 'react-icons/gi';
import { MdOutlineForum } from 'react-icons/md';

const Resources = () => {

  return (
    <div className='resources'>
      <Button
        onClick={null}
        customClass={'survey'}
        type={'button'}
      >
        <RiSurveyFill /> Survey
      </Button >

      <Button
        onClick={null}
        customClass={'certificate'}
        type={'button'}
      >
        <FcDiploma2 /> certificate
      </Button >

      <Button
        onClick={null}
        customClass={'test'}
        type={'button'}
      >
        <GiStoneAxe /> test
      </Button >

      <Button
        onClick={null}
        customClass={'forum'}
        type={'button'}
      >
        <MdOutlineForum /> forum
      </Button >
    </div>
  )
}

export default Resources