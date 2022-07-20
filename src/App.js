import React, { useState } from "react";
import Header from "./components/Header";
import Login from "./components/Login";
import NewUser from "./components/NewUser";
import "./style/app.css"


function App() {

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
  );
}

export default App;