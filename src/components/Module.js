import React from 'react'
import '../style/module.css'

const Module = ({ title, topic }) => {
  return (
    <div className='card_container'
    >
      <div className='module_title'>
        {title}
      </div>
      <div className='module_topic'>
        {topic}
      </div>
    </div>
  )
}

export default Module