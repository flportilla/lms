import React from 'react'
import '../style/student.css'
import courseImg from '../assets/curso-bio-basico.png'
import Resources from './Resources'
import Indicators from './Indicators'
import Module from './Module'

const Student = () => {
  const description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas libero justo, egestas eget faucibus utet netus et malesuada fames ac turpis egestas. Nunc vitae pharetra ligula. Suspendisse iaculis sapien vitae leo dapibus, eget egestas velit viverra. Suspendisse magna odio, interdum nec enim tristique, congue egestas turpis. Suspendisse potenti. In ac ultrices orci, at tempus felis. Aliquam tortor nisl, pulvinar id mi pharetra, varius tincidunt sapien. Morbi accumsan lobortis placerat. Nam suscipit mi et arcu efficitur finibus. Phasellus gravida nunc tristique libero auctor, at scelerisque felis rhoncus. Cras elementum aliquam fringilla. Donec id ornare est. Vestibulum dapibus, libero et tristique condimentum, erat odio egestas metus, ut tincidunt diam augue sed nisi. Phasellus vitae ultrices ipsum, id laoreet ipsum. Aenean dapibus massa et mi venenatis, ac tincidunt libero"
  const modulesInfo = [
    {
      id: 1,
      moduleNumber: 'Lorem 1',
      topic: 'Lorem ipsum dolor sit'
    },
    {
      id: 2,
      moduleNumber: 'Lorem 2',
      topic: 'Lorem ipsum dolor sit'
    },
    {
      id: 3,
      moduleNumber: 'Lorem 3',
      topic: 'Lorem ipsum dolor sit'
    },
    {
      id: 4,
      moduleNumber: 'Lorem 4',
      topic: 'Lorem ipsum dolor sit'
    }

  ]
  const isLogged = window.localStorage.getItem('role') === 'Student'

  return (
    <>{
      isLogged
        ? <>
          <section className='student_section'>

            <div className='course_name'>
              <div className='course_name_img_container'>
                <img src={courseImg} alt="Lorem ipsum" />
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