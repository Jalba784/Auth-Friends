import React from 'react';
import './App.css';
import { Link, Route } from 'react-router-dom'
import Signin from "./components/Signin";

function App() {
  return (
    <div className="App">
      <nav className="navBar">
        <Link to="/">Home</Link>
        <Link to="/signin">Sign In</Link>
      </nav>

      <Route exact path="/signin" component={Signin} />
    </div>
  );
}

export default App;
