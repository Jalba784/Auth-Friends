import React, { useState } from "react";
import axios from "axios";
// import { axiosWithAuth } from "../utils/axiosWithAuth";

const Login = props => {
  // const [error, setError] = useState();
  const [state, setState] = useState({
    credentials: {
      username: "",
      password: ""
    }
  });

  const handleChange = e => {
    setState({
      credentials: {
        ...state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    axios
      .post("/login", state.credentials)
      .then(res => {
        console.log(res);
        localStorage.setItem("token", res.data.payload);
        props.history.push("/protected");
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/*{error && <div className="error">{error}</div>}*/}

        <input
          className="emailInput"
          type="text"
          name="username"
          placeholder="Username"
          value={state.credentials.username}
          onChange={handleChange}
        />
        <input
          className="passwordInput"
          type="password"
          name="password"
          placeholder="Password"
          value={state.credentials.password}
          onChange={handleChange}
        />

        <button className="button" type="submit">
          Sign In
        </button>
      </form>
    </div>
  );
};

export default Login;
