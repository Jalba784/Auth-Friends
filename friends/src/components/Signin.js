import React, { useState } from "react";
import axios from 'axios'

const Signin = props => {
  const [error, setError] = useState()
  const [data, setData] = useState({
    email: "",
    password: ""
  });

  const handleChange = e => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    axios.post('http://localhost:5000/signin', data)
        .then(result => {
          sdf
        })
        .catch(err => {
          setError(err.response.data.message)
        })

  }

  return (
    <div>
      <form>
        {error && <div className="error">{error}</div>}

        <input
          className="emailInput"
          type="email"
          name="email"
          placeholder="Email"
          value={data.email}
          onChange={handleChange}
        />
        <input
          className="passwordInput"
          type="password"
          name="password"
          placeholder="Password"
          value={data.password}
          onChange={handleChange}
        />

        <button className="button" type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default Signin;
