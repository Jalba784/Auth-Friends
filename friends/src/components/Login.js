import React, { useState } from "react";
import axios from "axios";

const Login = props => {
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

  // const login = e => {
  //   e.preventDefault();
  //   axios
  //     .post("/api/login", state.credentials)
  //     .then(res => {
  //       console.log(res);
  //       localStorage.setItem("token", res.data.payload);
  //       props.history.push("/protected");
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // };
  const login = e => {
    e.preventDefault()
    axios.post('http://localhost:5000/api/login', state.credentials)
        .then(res => {
          console.log(res)
          localStorage.setItem('token', res.data.payload)
          // This would be nice for UX. Auto redirect to the main dash
          props.history.push('/protected')
        })
        .catch(err => {
          console.log('This is the error => ', err)
        })
  };

  return (
    <div>
      <form onSubmit={login}>
        <br/>
        <h2>Login</h2>
        <br/>
        <label>
          Username
          <input
            className="emailInput"
            type="text"
            name="username"
            placeholder="Username"
            value={state.credentials.username}
            onChange={handleChange}
          />
        </label>

        <label>
          Password
          <input
            className="passwordInput"
            type="password"
            name="password"
            placeholder="Password"
            value={state.credentials.password}
            onChange={handleChange}
          />
        </label>

        <button className="button" type="submit">
          Sign In
        </button>
      </form>
    </div>
  );
};

export default Login;
