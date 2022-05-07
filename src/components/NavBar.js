import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = (props) => {
    const { isLoggedIn, loggedInUsername } = props;

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
            </ div>



        </div>



    )

}

export default NavBar;