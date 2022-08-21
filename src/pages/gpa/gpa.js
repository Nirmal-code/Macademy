import React from 'react';
import Header from '../Components/header/header';
import Footer from '../Components/footer/footer';
import './gpa.css';


export default function GPAPage(){
    return(
        <div class='gpajs'id="gpa">
            <Header />
            <title>Macademy-GPA</title>
            <ul id='timer_id'>
                    <li id='nb_reciever'>Timer Not Started: </li>
                    <li id='reciever'>_h _min _sec</li>
            </ul>
            <h1>This is the GPA page!</h1>
            <Footer />
        </div>
    );
};
