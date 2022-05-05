import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import NavBar from './NavBar';
import RegisterUser from './RegisterUser';
import Login from './Login';
import Home from './Home';
import RoutinesList from './Routines';
import RoutineForm from './RoutineForm';
import ActivitiesList from './Activities';
import ActivityForm from './ActivityForm';
import { testAuthentication } from '../api';


const App = () => {
    const [routines, setRoutines] = useState([]);
    const [activities, setActivities] = useState([]);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [loggedInUsername, setLoggedInUsername] = useState('');

async function isValidJWT() {
    const token = localStorage.getItem('fitness_tracker_JWT');
    if(!token) setIsLoggedIn(false);
    else {
        const isValid = await testAuthentication(token);
        setLoggedInUsername(isValid.username);
        setIsLoggedIn(true);
    }
}

useEffect(() => {
    isValidJWT();
}, []);

console.log('LoggedIn',isLoggedIn)


    return (
        <>

            <Router>
                <NavBar isLoggedIn={isLoggedIn}/>
                <div>
                    <Link to="/RegisterUser">Register </Link>
                    <Link to="/Login">Login    </Link>
                </div>

                <Route path="/RegisterUser">
                    <RegisterUser />
                </Route>
                <Route path="/Login">
                    <Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
                </Route>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/routines">
                    <RoutinesList isLoggedIn={isLoggedIn} routines={routines} setRoutines={setRoutines} />
                </Route>
                <Route path="/activities">
                    <ActivitiesList isLoggedIn={isLoggedIn} activities={activities} setActivities={setActivities} />
                </Route>
                <Route path="/createActivity">
                    <ActivityForm activities={activities} setActivities={setActivities} />
                </Route>
                <Route path="/createRoutine">
                    <RoutineForm routines={routines} setRoutines={setRoutines} />
                </Route>

            </Router>
        </>
    );
};

export default App;


