import React from 'react';
import Header from '../Components/header/header';
import Footer from '../Components/footer/footer';
import './planner.css'

export default function PlannerPage(){
    return(
        <div class='plannerjs' id="planner">
            <Header />
            <title>Macademy-Planner</title>
            <h1>This is the Planner Page!</h1>
            <ul id='timer_id'>
                <li id='nb_reciever'>Timer Not Started: </li>
                <li id='reciever'>_h _min _sec</li>
            </ul>
            <Footer />
        </div>
    );
};

