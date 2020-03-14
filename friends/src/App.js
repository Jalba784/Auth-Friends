import React from 'react';
import './App.css';
import { Link, Route } from 'react-router-dom'
import Signin from "./components/Signin";

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link>
      </nav>

      <Route exact path="signin/" component={Signin} />
    </div>
  );
}

export default App;
