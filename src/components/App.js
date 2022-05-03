import  React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import NavBar from './NavBar';

const App = () => {
    //     useEffect(async () => {
    //     console.log("IN HERE")
    //     const res = await fetch("https://fitnesstrac-kr.herokuapp.com/api/activities")
    //     // const res = await fetch("heroku-link");
    //     // const res = await fetch("localhost:3000");
    //     const json = await res.json();
    //     // setReq(json);
    //     console.log(json)
    //     // return () => { }
    // }, [])


    return (
        <Router>

            <NavBar></NavBar>

            <h1>
                Hello World!
            </h1>
        </Router>
    );
};

export default App;


