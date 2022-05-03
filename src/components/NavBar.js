import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {

    return (
        <div id="navBar">
            <div id='siteName' className='navText'>
                Alpha Fitness Tracker
            </div>
            <div id="siteLinks">

            <Link to = '/'>
                <a className='navText'>HOME</a>
            </Link>

            <Link to = '/routines'>
                <a className='navText'>ROUTINES</a>
            </Link>

            <Link to = '/myroutines'>
                <a className='navText'>MY ROUTINES</a>
            </Link>

            <Link to = '/activities'>
                <a className='navText'>ACTIVITIES</a>
            </Link>


            </div>



        </div>



    )

}

export default NavBar;