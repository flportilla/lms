import React from 'react'

const Professor = () => {

  const isLogged = window.localStorage.getItem('rol') === 'Professor'

  return (
    <>
      {
        isLogged
          ? <h1>Professor</h1>
          : <h1 className='sign_in_first'>Please login to access this page</h1>
      }
    </>
  )
}

export default Professor