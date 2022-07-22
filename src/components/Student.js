import React from 'react'
import '../style/student.css'
import courseImg from '../assets/curso-bio-basico.png'
import Resources from './Resources'
import Indicators from './Indicators'
import Module from './Module'
import Navbar from './Navbar'

const Student = () => {
  const description = "This course contains the biosecurity measures implemente by this random generic company, along with regulations issued by the national goverment on the ocassion of the sanitary emergency that is facing the country and the world.You will find not only COVID - 19 general information, overview and self - caring recommendations but also against the return for the development of face - to - face activities in each of the workplaces."
  const modulesInfo = [
    {
      id: 1,
      moduleNumber: 'Módulo 1',
      topic: 'General information'
    },
    {
      id: 2,
      moduleNumber: 'Módulo 2',
      topic: 'On daily activities'
    },
    {
      id: 3,
      moduleNumber: 'Módulo 3',
      topic: 'On specific activities'
    },
    {
      id: 4,
      moduleNumber: 'Módulo 4',
      topic: 'Responsibilities'
    }

  ]
  const isLogged = window.localStorage.getItem('rol') === 'Student'

  return (
    <>{
      isLogged
        ? <>
          <Navbar />
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
            <div className='modules'>
              {modulesInfo.map(module => {
                return <Module
                  key={module.id}
                  title={module.moduleNumber}
                  topic={module.topic}
                />
              })}
            </div>
          </section>
        </>
        : <h1 className='sign_in_first'>Please login to access this page</h1>
    }
    </>
  )
}

export default Student