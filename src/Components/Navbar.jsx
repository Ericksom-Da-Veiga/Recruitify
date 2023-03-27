
import React from 'react';
import {Link} from 'react-router-dom';

import brand from '../Images/logo.png';


let bool = false;

function Toggle () {
    if(bool) {
        document.getElementById('list').style.left = '-1000px';
        bool = false;
    } else { 
        document.getElementById('list').style.left = '0px';
        bool = true;
    }
}

function Navbar () {
    return (
        <header>
            <div id="navbar">
                <a href="#">
                    <img id='brand' style={{width:"40px",height:"40px"}} src={brand}/>
                </a>
                <div id='list' className="list">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/notes">Notes</Link></li>
                        <li><Link to="/create">Post a job</Link></li>
                        <li><Link to="/About">About</Link></li>
                    </ul>
                </div>
                <div id="search">
                    <input type="text" placeholder="Post"/>
                    <input type="button" value="search"/>
                </div>
                <svg onClick={Toggle} id='menu' width='25px' alt="menu" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path alt="menu" d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/>
            </svg>           
            </div>
        </header>
    );
}


 

export default Navbar;
