import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import "./App.css";
import Login from "./components/Login";
import TestingPrivate from "./components/TestingPrivate";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navBar">
          <Link exact to="/login">Login</Link>
          <Link to="/protected">Protected Page</Link>
        </nav>


        <Switch>
          <PrivateRoute exact path="/protected" component={TestingPrivate} />
          <Route path="/login" component={Login} />
          {/*<Route component={Login} />*/}
          {/*<PrivateRoute path="/protected" component={PrivateRoute} />*/}
          {/*<Route component={PrivateRoute1}/>*/}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
