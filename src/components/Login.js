import React, { useState, useEffect } from "react";
import { loginUser } from "./api";


const Login = (props) => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const {setIsLoggedIn} = props;
  

  const handleLogin = () => {
    event.preventDefault();

    console.log("Logging in...");
    const registerInfo = {
      user: user,
      password: password,
    };

    loginUser(registerInfo);

    setUser("");
    setPassword("");
  };

  const handleUserChange = (event) => {
    setUser(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogOut = () => {
    localStorage.removeItem("fitness_tracker_JWT");
    setIsLoggedIn(false);
  };

  useEffect(() => {
    setIsLoggedIn(!!localStorage.getItem("fitness_tracker_JWT"));
  }, []);


  return (
    <>
      <div id="login" className="loginStyle">
        <form>
          <label>Username</label>
          <input
            type="text"
            value={user}
            placeholder="Enter Username"
            onChange={handleUserChange}
          ></input>

          <label>Password</label>
          <input
            type="password"
            value={password}
            placeholder="Enter Password"
            onChange={handlePasswordChange}
          ></input>
          <button type="submit" onClick={handleLogin}>
            Login
          </button>
          <button type="submit" onClick={handleLogOut}>
            Log Out
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;