import React from "react";
import Header from "./components/Header";
import Login from "./components/Login";
import NewUser from "./components/NewUser";
import Student from "./components/Student";
import Professor from "./components/Professor";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import "./style/app.css"


function App() {

  const rol = window.localStorage.getItem('rol')

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

          <Route path="/rol" element={
            rol === 'Student'
              ? <Student />
              : rol === 'Professor'
                ? <Professor />
                : ''} />
        </Routes>
      </Router>
    </>
  );
}

export default App;