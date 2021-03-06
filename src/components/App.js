import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './NavBar';
import RegisterUser from './RegisterUser';
import Login from './Login';
import Home from './Home';
import RoutinesList from './Routines';
import MyRoutinesList from './Myroutines';
import EditRoutine from './EditRoutineForm';
import RoutineForm from './RoutineForm';
import ActivitiesList from './Activities';
import ActivityForm from './activityform';
import AddActivity from './AddActivityForm';
import { testAuthentication } from '../api';
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
                <NavBar isLoggedIn={isLoggedIn} loggedInUsername={loggedInUsername} setIsLoggedIn={setIsLoggedIn}/>

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
                    <MyRoutinesList setRoutines={setRoutines} setActivities={setActivities}/>
                </Route>

                <Route path="/routines">
                    <RoutinesList routines={routines} setRoutines={setRoutines} setActivities={setActivities} />
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
                    <EditActivity routines={routines} />
                </Route>
                


            </Router>
        </>
    );
};

export default App;


