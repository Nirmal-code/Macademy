import React from 'react';
import {Link} from 'gatsby';
import './header.css';
import logo from '../../../images/logo.png'

export default function Header(){
    return(
        <div>
            <navbar id="main-header">

                <div id="titlelogo">
                    <img id='logo' src={logo}></img>
                    <Link to='../../home/home/' id='title'><h1>MACademy</h1></Link>
                </div>


                <ul>
                    <li><Link to='../../home/home/' id="menu-item"><h3>Home</h3></Link></li>
                    <li><Link to='../../planner/planner/' id="menu-item"><h3>Planner</h3></Link></li>
                    <li><Link to='../../timer/timer/' id="menu-item"><h3>Interval Studying</h3></Link></li>
                    <li><Link to='../../gpa/gpa/' id="menu-item"><h3>GPA Tracker</h3></Link></li>
                </ul>

            </navbar>
        </div>
    );
};
