import React from 'react';
import {Link} from 'gatsby';
import './header.css';
import logo from '../../../images/logo.png';
import home_icon from '../../../images/home_icon.png';
import calendar_icon from '../../../images/calendar_icon.png';
import clock_icon from '../../../images/clock_icon.png';
import gpa_icon from '../../../images/gpa_icon.png';

export default function Header(){
    return(
        <div id="header-wrap">
            <navbar id="main-header">
                <ul>
                    <li><img id='logo' src={logo}></img></li>
                    <li><Link to='../../home/home/' id='title'><h1>MACademy</h1></Link></li>
                    <li><Link to='../../home/home/' class='active' id="menu-item"><img id='icon' src={home_icon}></img><h3>HOME</h3></Link></li>
                    <li><Link to='../../planner/planner/' class='active' id="menu-item"><img id='icon' src={calendar_icon}></img><h3> PLANNER</h3></Link></li>
                    <li><Link to='../../timer/timer/' class='active' id="menu-item"><img id='icon' src={clock_icon}></img><h3>TIMER</h3></Link></li>
                    <li><Link to='../../gpa/gpa/' class='active' id="menu-item"><img id='icon' src={gpa_icon}></img><h3>GPA</h3></Link></li>
                </ul>



            </navbar>
        </div>
    );
};
