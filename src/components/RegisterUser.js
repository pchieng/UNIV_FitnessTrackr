import React, { useState } from 'react';
import { registerNewUser } from '../api';

const RegisterUser = () => {
    const [user, setUser] = useState("");
    const [password, setPassword]= useState("");

    const handleRegisterClick = async (event) => {
        event.preventDefault();

        console.log("Creating a new user...");
        const registerInfo = {
            user: user,
            password: password
        };

        let firstPassword = document.querySelector('.password').value,
            confirmPassword = document.querySelector('.confirm_password').value;
          
            if (firstPassword == "") {
                alert("Password field cannot be empty");
                return false;
            } 
            
            if (firstPassword != confirmPassword) {
                alert("Passwords did not match, please try again!");
                return false
            }

            const newUser = await registerNewUser(registerInfo);
            alert(newUser.message)

            setUser("");
            setPassword("");
            document.querySelector('.confirm_password').value='';
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
            <input type="text" placeholder="User Name" value={user} onChange={handleUserChange}  />
            <input type="password" className="password" placeholder="Password" id="password" value={password}
             onChange={handlePasswordChange}/>

            <input type="password" className="confirm_password" placeholder="Re-Enter Password" id="confirm-password"
            />
             
            <button onClick={handleRegisterClick}>Register!</button>  
        </form>
      </>    
    );
};

export default RegisterUser;