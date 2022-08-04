import React, { useEffect, useReducer, useState } from "react";
import Header from "./components/Header";
import Login from "./components/Login";
import NewUser from "./components/NewUser";
import Student from "./components/Student";
import Professor from "./components/Professor";
import { BrowserRouter as Router, Routes, Route, HashRouter } from "react-router-dom"
import "./style/app.css"
import Test from "./components/TestListStudent";
import ListQuestions from "./components/ListQuestions";
import QuestionForm from "./components/QuestionForm";
import Navbar from "./components/Navbar";
import CreateTest from "./components/CreateTest";
import ListTest from "./components/ListTests";
import Exam from "./components/Exam";
import testHelper from "./services/test";
import Results from "./components/Results";
import Loading from "./components/Loading";
import setLoading from "./reducer"


function App() {

  const rol = window.localStorage.getItem('rol')
  const username = window.localStorage.getItem('name')
  const [isLoading, loadingDispatch] = useReducer(setLoading, false);

  return (
    <>{
      isLoading
        ? <Loading />
        : <>
          <Header />

          <HashRouter>
            <Routes>

              <Route path="/" element={
                <Login loadingDispatch={loadingDispatch} />
              } />

              <Route path="/new-user-form" element={
                <NewUser
                  loadingDispatch={loadingDispatch} />
              } />

              <Route path="/student" element={
                <div className="rol_container">
                  <Navbar
                    rol={rol}
                    username={username}
                  />
                  <Student />
                </div>

              } />

              <Route path="/professor" element={
                <div className="rol_container">
                  <Navbar
                    rol={rol}
                    username={username}
                  />
                  <Professor loadingDispatch={loadingDispatch} />
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
                  <QuestionForm loadingDispatch={loadingDispatch} />
                </div>
              } />

              <Route path="update-question" element={
                <div className="rol_container">
                  <Navbar
                    rol={rol}
                    username={username}
                  />
                  <QuestionForm
                    loadingDispatch={loadingDispatch}
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
                  <ListQuestions
                    loadingDispatch={loadingDispatch}
                    isLoading={isLoading} />
                </div>
              } />
              <Route path="create-test" element={
                <div className="rol_container">
                  <Navbar
                    rol={rol}
                    username={username}
                  />
                  <CreateTest
                    isLoading={isLoading}
                    loadingDispatch={loadingDispatch} />
                </div>
              } />
              <Route path="list-tests" element={
                <div className="rol_container">
                  <Navbar
                    rol={rol}
                    username={username}
                  />
                  <ListTest
                    loadingDispatch={loadingDispatch}
                    isLoading={isLoading}
                    rol={rol}
                  />
                </div>
              } />
              <Route path="results" element={
                <div className="rol_container">
                  <Navbar
                    rol={rol}
                    username={username}
                  />
                  <Results />
                </div>
              } />

              <Route path="exam" element={
                <Exam />
              } />
            </Routes>
          </HashRouter>
        </>
    }
    </>
  );
}

export default App;