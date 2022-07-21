import React from 'react'
import '../style/student.css'
import courseImg from '../assets/curso-bio-basico.png'
import Resources from './Resources'
import Indicators from './Indicators'

const description = "This course contains the biosecurity measures implemente by this random generic company, along with regulations issued by the national goverment on the ocassion of the sanitary emergency that is facing the country and the world.You will find not only COVID - 19 general information, overview and self - caring recommendations but also against the return for the development of face - to - face activities in each of the workplaces."

const Student = () => {
  return (
    <section className='student_section'>

      <div className='course_name'>
        <div className='course_name_img_container'>
          <img src={courseImg} alt="course name" />
        </div>
        <Resources />
      </div>
      <div className='description'>
        <div className='text'>

          {description}
        </div>

        <Indicators />
      </div>
      <div className='modules'>modules</div>
    </section>
  )
}

export default Student