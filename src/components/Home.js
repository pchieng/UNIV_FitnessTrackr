import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div id="home" className="homePage">
      <h1>Welcome to Fitness Tracker!</h1>
      <h3>This is a site for people to find and share their workout routines </h3>
      <h3>Register/Log In to access your personal routines and activities</h3>
      <h3>Get ready to get shredded!</h3>
      <br />

      <p>New User? 
      <span> <Link to='registeruser'>Sign up here</Link></span>
      </p>
    </div>
  );
};

export default Home;