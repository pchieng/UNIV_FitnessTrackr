import  React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import NavBar from './NavBar';
import RegisterUser from './RegisterUser';
import Login from './Login';
import Home from './Home';
import RoutinesList from './Routines';


const App = () => {
    const [routines, setRoutines] = useState([]);
    const [isLoggedIn, setIsLoggedIn] = useState(false);


    return (
        <>

        <Router>
            <NavBar />
            <div>
                <Link to="/RegisterUser">Register </Link>
                <Link to="/Login">Login    </Link>
            </div>
            <Route path="/routines">
                <RoutinesList routines={routines} setRoutines={setRoutines} />
            </Route>
            <Route path="/RegisterUser">
                <RegisterUser />
            </Route>
            <Route path="/Login">   
                <Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
            </Route>
            <Route path="/Home">
                <Home />
            </Route>
        </Router>
        </>
    );
};

export default App;


