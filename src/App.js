import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Login from "./components/Login";
import NewUser from "./components/NewUser";
import Student from "./components/Student";
import Professor from "./components/Professor";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import "./style/app.css"
import Test from "./components/TestListStudent";
import ListQuestions from "./components/ListQuestions";
import QuestionForm from "./components/QuestionForm";
import Navbar from "./components/Navbar";
import CreateTest from "./components/CreateTest";
import ListTest from "./components/ListTests";
import Exam from "./components/Exam";
import questionHelper from "./services/questions";
import testHelper from "./services/test";

function App() {

  const rol = window.localStorage.getItem('rol')
  const username = window.localStorage.getItem('name')
  const [questionsList, setQuestionsList] = useState([])
  const [tests, setTests] = useState([])

  useEffect(() => {

    if (!rol) return

    const token = JSON.parse(window.localStorage.getItem('token'))
    questionHelper.setToken(token)
    testHelper.setToken(token)

    if (rol === 'Professor') {
      questionHelper.listQuestions()
        .then(question => setQuestionsList(question))
    }

    testHelper.listTests()
      .then(test => setTests(test))

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
              <Test tests={tests} />
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
              <ListQuestions questionsList={questionsList} />
            </div>
          } />
          <Route path="create-test" element={
            <div className="rol_container">
              <Navbar
                rol={rol}
                username={username}
              />
              <CreateTest questionsList={questionsList} />
            </div>
          } />
          <Route path="list-tests" element={
            <div className="rol_container">
              <Navbar
                rol={rol}
                username={username}
              />
              <ListTest
                rol={rol}
              />
            </div>
          } />

          <Route path="exam" element={
            <Exam />
          } />
        </Routes>
      </Router>
    </>
  );
}

export default App;