import React from 'react';
import Header from './Components/header/header'
import './index.css'


export default function IndexPage(){
    return(
        <div>
            <Header />
            <div id="indexelements">
                <h1>Welcome! This is the Index page!!</h1>
                <a href="./home/home/">Home</a>
                <br></br>
                <a href='./planner/planner/'>Planner Page</a>
                <br></br>
                <a href='./timer/timer/'>Timer Page</a>
                <br></br>
                <a href='./gpa/gpa/'>GPA Page</a>
            </div>

        </div>
    );
};

