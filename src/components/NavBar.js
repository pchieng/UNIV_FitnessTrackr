import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {

    return (
        <div id="navBar">
            <div id='siteName' className='navText'>
                Alpha Fitness Tracker
            </div>
            <div id="siteLinks">

                <Link to = "/" className='navText'>HOME</Link>

                <Link to = "/routines" className='navText'>ROUTINES</Link>

                <Link to = "/myroutines" className='navText'>MY ROUTINES</Link>

                <Link to = "/activities" className='navText'>ACTIVITIES</Link>
         </ div>



        </div>



    )

}

export default NavBar;