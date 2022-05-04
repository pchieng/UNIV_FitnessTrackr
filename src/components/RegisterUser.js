import React, { useState } from 'react';
import { registerNewUser } from './api';

const RegisterUser = () => {
    const [user, setUser] = useState("");
    const [password, setPassword]= useState("");

    const handleRegisterClick = () => {
        event.preventDefault();

        console.log("Creating a new user...");
        const registerInfo = {
            user: user,
            password: password
        };

        registerNewUser(registerInfo);

        setUser("");
        setPassword("");
    };

    const handleUserChange = (event) => {
        setUser(event.target.value);
    }
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }
    
    return (
      <>
        <div>
            <h1>Register New User</h1>
        </div>

        <form>
            <input type="text" placeholder="User Name" value={user} onChange={handleUserChange} />
            <input type="password" placeholder="Password" id="password" value={password}
             onChange={handlePasswordChange} />

            <input type="password" placeholder="Re-Enter Password" id="confirm-password" value={password}
             onChange={handlePasswordChange} />
             
            <button onClick={handleRegisterClick}>Register!</button>  
        </form>
      </>    
    );
};

export default RegisterUser;