import  React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import NavBar from './NavBar';
// import RegisterUser from './RegisterUser';
// import Login from './Login';
import RoutinesList from './Routines';

const App = () => {
    const [routines, setRoutines] = useState([]);


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

            <Route path="/routines">
                <RoutinesList routines={routines} setRoutines={setRoutines} />
            </Route>

            <h1>
                Hello World!
            </h1>
        </Router>
    );
};

export default App;


