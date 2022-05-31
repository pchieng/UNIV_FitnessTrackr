import React, { useState, useEffect } from "react";
import { loginUser } from "../api";


const Login = (props) => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const { setIsLoggedIn } = props;


  const handleLogin = (event) => {
    event.preventDefault();
    const registerInfo = {
      user: user,
      password: password
    };

    if (user === '' || password === '') {
      alert('Please enter username or password');
      return;
    }

    const res = loginUser(registerInfo);
    setUser("");
    setPassword("");
    window.location.reload(false);
  };

  const handleUserChange = (event) => {
    setUser(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  useEffect(() => {
    setIsLoggedIn(!!localStorage.getItem("fitness_tracker_JWT"));
  }, []);


  return (
    <div id='loginPage'>
      <h1>LOG IN</h1>
      <form>
        <label>Username: </label>
        <input
          type="text"
          value={user}
          placeholder="Enter Username"
          onChange={handleUserChange}
        ></input>
        <br />
        <label>Password: </label>
        <input
          type="password"
          value={password}
          placeholder="Enter Password"
          onChange={handlePasswordChange}
        ></input>
        <br />
        <br />
        <button type="submit" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;