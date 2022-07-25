import React from "react";
import Header from "./components/Header";
import Login from "./components/Login";
import NewUser from "./components/NewUser";
import Student from "./components/Student";
import Professor from "./components/Professor";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import "./style/app.css"
import Test from "./components/Test";
import ListQuestions from "./components/ListQuestions";
import QuestionForm from "./components/QuestionForm";
import Navbar from "./components/Navbar";

function App() {

  const rol = window.localStorage.getItem('rol')
  const username = window.localStorage.getItem('name')

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

          <Route path="/Student" element={
            <div className="rol_container">
              <Navbar
                rol={rol}
                username={username}
              />
              <Student />
            </div>

          } />

          <Route path="/Professor" element={
            <div className="rol_container">
              <Navbar
                rol={rol}
                username={username}
              />
              <Professor />
            </div>
          } />

          <Route path="test" element={
            <div className="rol_container">
              <Navbar
                rol={rol}
                username={username}
              />
              <Test />
            </div>
          } />

          <Route path="add-question" element={

            <div className="rol_container">
              <Navbar
                rol={rol}
                username={username}
              />
              <QuestionForm />
            </div>
          } />

          <Route path="update-question" element={
            <div className="rol_container">
              <Navbar
                rol={rol}
                username={username}
              />
              <QuestionForm
                request
              />
            </div>
          } />

          <Route path="list-questions" element={
            <div className="rol_container">
              <Navbar
                rol={rol}
                username={username}
              />
              <ListQuestions />
            </div>
          } />

        </Routes>
      </Router>
    </>
  );
}

export default App;