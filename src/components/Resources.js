import React from 'react'
import Button from './Button'
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from "react-router-dom";
import { RiSurveyFill } from 'react-icons/ri';
import { FcDiploma2 } from 'react-icons/fc';
import { GiStoneAxe } from 'react-icons/gi';
import { MdOutlineForum } from 'react-icons/md';

const Resources = () => {
  const navigate = useNavigate()
  const resourcesButtons = [
    {
      id: uuidv4(),
      onclick: null,
      customClass: 'survey',
      type: 'button',
      children: {
        component: <RiSurveyFill />,
        text: 'Survey'
      }
    },
    {
      id: uuidv4(),
      onclick: null,
      customClass: 'certificate',
      type: 'button',
      children: {
        component: <FcDiploma2 />,
        text: 'certificate'
      }
    },
    {
      id: uuidv4(),
      onclick: function () {
        navigate('/test')
      },
      customClass: 'test',
      type: 'button',
      children: {
        component: <GiStoneAxe />,
        text: 'test'
      }
    },
    {
      id: uuidv4(),
      onclick: null,
      customClass: 'forum',
      type: 'button',
      children: {
        component: <MdOutlineForum />,
        text: 'forum'
      }
    }
  ]

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