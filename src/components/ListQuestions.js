import React, { useEffect } from 'react'

const ListQuestions = () => {

  const isLogged = window.localStorage.getItem('rol') === 'Professor'

  useEffect(() => {

  }, [])

  return (
    <>
      {isLogged
        ? <div>ListQuestions</div>
        : <h1 className='sign_in_first'>Please login to access this page</h1>}

    </>
  )
}

export default ListQuestions