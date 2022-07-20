import React, { useState } from 'react'
import Header from '../components/Header'
import Login from '../components/Login'
import NewUser from '../components/NewUser'

const Home = () => {
  const [showNewUser, setShowNewUser] = useState(false)
  return (
    <>
      <Header />
      <Login
        setShowNewUser={setShowNewUser}
        showNewUser={showNewUser} />
      <NewUser
        showNewUser={showNewUser}
        setShowNewUser={setShowNewUser} />
    </>
  )
}

export default Home