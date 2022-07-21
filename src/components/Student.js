import React from 'react'
import '../style/student.css'
import courseImg from '../assets/curso-bio-basico.png'
import Resources from './Resources'
const Student = () => {
  return (
    <section className='student_section'>

      <div className='course_name'>
        <div className='course_name_img_container'>
          <img src={courseImg} alt="course name" />
        </div>
        <Resources />
      </div>
      <div className='description'>description</div>
      <div className='modules'>modules</div>
    </section>
  )
}

export default Student