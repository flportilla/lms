import React from "react";
import Header from "./components/Header";
import Login from "./components/Login";
import NewUser from "./components/NewUser";
import Student from "./components/Student";
import Professor from "./components/Professor";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import "./style/app.css"
import Test from "./components/Test";
import AddQuestion from "./components/AddQuestion";

function App() {

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
            <Student />
          } />

          <Route path="/Professor" element={
            <Professor />
          } />

          <Route path="test" element={
            <Test />
          } />

          <Route path="add-question" element={
            <AddQuestion />
          } />
        </Routes>
      </Router>
    </>
  );
}

export default App;