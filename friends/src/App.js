import React, {useEffect} from 'react';
import './App.css';
import { Link, Route } from 'react-router-dom'
import Login from "./components/Login";
import axios from 'axios'

function App() {
    useEffect(() => {
        axios.get('http://localhost:5000')
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log('Error is => ', err)
            })
    })

  return (
    <div className="App">
      <nav className="navBar">
        <Link to="/">Home</Link>
        <Link to="/login">Log In</Link>
      </nav>

      <Route exact path="/login" component={Login} />
    </div>
  );
}

export default App;
