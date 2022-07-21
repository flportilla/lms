import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Login from "./components/Login";
import NewUser from "./components/NewUser";
import Student from "./components/Student";
import Professor from "./components/Professor";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import "./style/app.css"

function App() {

  const [rol, setRol] = useState('')

  useEffect(() => {
    const newRol = String(window.localStorage.getItem('rol'))
    setRol(newRol)

  }, [rol])

  return (
    <>
      <Header />
      <Router>
        <Routes>

          <Route path="/" element={
            <Login />
          } />

          <Route path="/new-user-form" element={
            <NewUser />
          } />

          <Route path="/Student" element=
            {<Student />}
          />

          <Route path="/Professor" element=
            {<Professor />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;