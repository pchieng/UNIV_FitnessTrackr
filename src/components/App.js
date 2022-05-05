import  React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import NavBar from './NavBar';
import RegisterUser from './RegisterUser';
import Login from './Login';
import Home from './Home';

const App = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);



    return (
        <>

        <Router>
            <div>
                <h1>FITNESS TRACKER</h1>
            </div>
            

            <h1>
                Hello World!
            </h1>
        </Router>
        </>
    );
};

export default App;


