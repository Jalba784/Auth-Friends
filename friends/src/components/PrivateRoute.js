// It uses the same API as <Route/>
// It renders a <Route/> and passes all the props through it
// It checks if the user is authenticated. If they are it renders
// the given component. Otherwise, it redirects to /login


import React from "react";
// import { Route, Redirect } from "react-router-dom";
import { Route, Redirect } from "react-router-dom";

// const PrivateRoute = ({ component: Component, ...rest }) => {

// ...rest = rest operator
const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route {...rest} render={props => {
        //This area of the code is where you'll edit
        if (localStorage.getItem('token')) {
            return <Component {...props}/>
        } else {
            return <Redirect to="/login"/>
        }
    }} />
    // <Route>
    //   {...rest}
    //   render=
    //   {props => {
    //     if (localStorage.getItem("token")) {
    //       return <Component {...props} />;
    //     } else {
    //       return <Redirect to="/login" />;
    //     }
    //   }}
    // </Route>
  );
};

export default PrivateRoute;
