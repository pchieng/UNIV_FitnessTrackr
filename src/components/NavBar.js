import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = (props) => {
    const { isLoggedIn, setIsLoggedIn, loggedInUsername } = props;

    const handleLogOut = () => {
        localStorage.removeItem("fitness_tracker_JWT");
        setIsLoggedIn(false);
    };

    return (
        <div id="navBar">
            <div id='siteName' className='navText'>
                Alpha Fitness Tracker
            </div>




            <div id="siteLinks">

                {isLoggedIn ?
                    <span className="welcomeUser">{`Welcome, ${loggedInUsername}`}</span>
                    :
                    <span className="welcomeUser">Welcome, guest</span>
                }

                <Link to="/" className='navText'>HOME</Link>

                {isLoggedIn ?
                    <Link to="/myroutines" className='navText'>
                        MY ROUTINES
                    </Link>
                    :
                    null
                }

                <Link to="/routines" className='navText'>ROUTINES</Link>

                <Link to="/activities" className='navText'>ACTIVITIES</Link>

                {isLoggedIn ?
                    <Link to="/" className='navText' onClick={handleLogOut}>
                        LOG OUT
                    </Link>
                    :
                    <Link to="/login" className='navText' >
                        LOG IN
                    </Link>
                }

            </ div>



        </div>



    )

}

export default NavBar;