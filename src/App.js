import React, { useState } from "react";

import Home from "./pages/Home"
import "./style/app.css"

const H1 = () => {
  return <h1>segundo componente</h1>
}

function App() {

  const [page, setPage] = useState('Home')

  const content = () => {

    if (page === 'Home') {
      return <Home />
    }
    else if (page === 'h1') {
      return <H1 />
    }
    else return <h1>else </h1>
  }

  return (
    <>
      <button onClick={() => setPage('Home')}>home</button>
      <button onClick={() => setPage('h1')}>h1</button>
      {content()}
    </>
  );
}

export default App;