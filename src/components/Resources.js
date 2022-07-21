import React from 'react'
import Button from './Button'
import { RiSurveyFill } from 'react-icons/ri';
import { FcDiploma2 } from 'react-icons/fc';
import { GiStoneAxe } from 'react-icons/gi';
import { MdOutlineForum } from 'react-icons/md';

const resourcesButtons = [
  {
    id: 1,
    onclick: null,
    customClass: 'survey',
    type: 'button',
    children: {
      component: <RiSurveyFill />,
      text: 'Survey'
    }
  },
  {
    id: 2,
    onclick: null,
    customClass: 'certificate',
    type: 'button',
    children: {
      component: <FcDiploma2 />,
      text: 'certificate'
    }
  },
  {
    id: 3,
    onclick: null,
    customClass: 'test',
    type: 'button',
    children: {
      component: <GiStoneAxe />,
      text: 'test'
    }
  },
  {
    id: 4,
    onclick: null,
    customClass: 'forum',
    type: 'button',
    children: {
      component: <MdOutlineForum />,
      text: 'forum'
    }
  }
]

const Resources = () => {

  return (
    <div className='resources'>
      {resourcesButtons.map(resource => {
        return <Button
          key={resource.id}
          onClick={resource.onclick}
          customClass={resource.customClass}
          type={resource.type}
        > {resource.children.component} {resource.children.text}</Button>
      })}
    </div>
  )
}

export default Resources