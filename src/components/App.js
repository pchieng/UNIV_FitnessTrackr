import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import NavBar from './NavBar';
import RegisterUser from './RegisterUser';
import Login from './Login';
import Home from './Home';
import RoutinesList from './Routines';
import MyRoutinesList from './MyRoutines';
import EditRoutine from './EditRoutineForm';
import RoutineForm from './RoutineForm';
import ActivitiesList from './Activities';
import ActivityForm from './ActivityForm';
import AddActivity from './AddActivityForm';
import { getRoutines, getActivities, testAuthentication } from '../api';
import EditActivity from './EditActivityForm';


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


    return (
        <>

            <Router>
                <NavBar isLoggedIn={isLoggedIn} loggedInUsername={loggedInUsername}/>

                <div>
                    <Link to="/RegisterUser">Register </Link>
                    <Link to="/Login">Login    </Link>
                </div>
                <Route exact path="/">
                    <Home />
                </Route>

                <Route path="/RegisterUser">
                    <RegisterUser />
                </Route>

                <Route path="/Login">
                    <Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
                </Route>

                <Route path="/myRoutines">
                    <MyRoutinesList loggedInUsername={loggedInUsername} routines={routines} setRoutines={setRoutines} setActivities={setActivities}/>
                </Route>

                <Route path="/routines">
                    <RoutinesList isLoggedIn={isLoggedIn} routines={routines} setRoutines={setRoutines} setActivities={setActivities} />
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

                <Route path="/editRoutine/:routineId">
                    <EditRoutine routines={routines} setRoutines={setRoutines} />
                </Route>

                <Route path="/addActivity/:routineId">
                    <AddActivity activities={activities} setActivities={setActivities}/>
                </Route>

                <Route path="/editActivity/:routineId/:activityId">
                    <EditActivity activities={activities} setActivities={setActivities} routines={routines} setRoutines={setRoutines}/>
                </Route>
                


            </Router>
        </>
    );
};

export default App;


