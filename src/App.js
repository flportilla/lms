import React, { useReducer } from "react";
import { Routes, Route, HashRouter } from "react-router-dom"

import CreateTest from "./components/CreateTest";
import Exam from "./components/Exam";
import Header from "./components/Header";
import IndividualResults from "./components/IndividualResults";
import ListQuestions from "./components/ListQuestions";
import ListStudents from "./components/ListStudents";
import ListTest from "./components/ListTests";
import Loading from "./components/Loading";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import NewUser from "./components/NewUser";
import Professor from "./components/Professor";
import QuestionForm from "./components/QuestionForm";
import Results from "./components/Results";
import Student from "./components/Student";
import Test from "./components/TestListStudent";

import reducers from './reducer'

import "./style/app.css"

const setLoading = reducers

function App() {

  const role = window.localStorage.getItem('role')
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
                <Login
                  loadingDispatch={loadingDispatch} />
              } />

              <Route path="/new-user-form" element={
                <NewUser
                  loadingDispatch={loadingDispatch} />
              } />

              <Route path="/student" element={
                <div className="rol_container">
                  <Navbar
                    role={role}
                    username={username}
                  />
                  <Student />
                </div>

              } />

              <Route path="/professor" element={
                <div className="rol_container">
                  <Navbar
                    role={role}
                    username={username}
                  />
                  <Professor />
                </div>
              } />

              <Route path="test" element={
                <div className="rol_container">
                  <Navbar
                    role={role}
                    username={username}
                  />
                  <Test isLoading={isLoading} loadingDispatch={loadingDispatch} />
                </div>
              } />

              <Route path="add-question" element={

                <div className="rol_container">
                  <Navbar
                    role={role}
                    username={username}
                  />
                  <QuestionForm
                    loadingDispatch={loadingDispatch} />
                </div>
              } />

              <Route path="update-question" element={
                <div className="rol_container">
                  <Navbar
                    role={role}
                    username={username}
                  />
                  <QuestionForm
                    loadingDispatch={loadingDispatch}
                  />
                </div>
              } />

              <Route path="list-questions" element={
                <div className="rol_container">
                  <Navbar
                    role={role}
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
                    role={role}
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
                    role={role}
                    username={username}
                  />
                  <ListTest
                    loadingDispatch={loadingDispatch}
                    isLoading={isLoading}
                    role={role}
                  />
                </div>
              } />
              <Route path="list-students" element={
                <div className="rol_container">
                  <Navbar
                    role={role}
                    username={username}
                  />
                  <ListStudents
                    isLoading={isLoading} />
                </div>
              } />
              <Route path="results" element={
                <div className="rol_container">
                  <Navbar
                    role={role}
                    username={username}
                  />
                  <Results />
                </div>
              } />
              <Route path="results-per-student" element={
                <div className="rol_container">
                  <Navbar
                    role={role}
                    username={username}
                  />
                  <IndividualResults isLoading={isLoading} />
                </div>
              } />

              <Route path="exam" element={
                <Exam loadingDispatch={loadingDispatch} />
              } />
            </Routes>
          </HashRouter>
        </>
    }
    </>
  );
}

export default App;