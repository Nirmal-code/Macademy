import React from 'react';
import Header from '../Components/header/header';
import Footer from '../Components/footer/footer';
import './home.css';
import mainpic from '../../images/home_page_image.png';
import calendar_icon from '../../images/calendar_icon.png';
import clock_icon from '../../images/clock_icon.png';
import gpa_icon from '../../images/gpa_icon.png';


export default function HomePage(){
    if (typeof window !=='undefined'){
        document.addEventListener("orientationchange", function(event){
            switch(window.orientation) 
            {  
                case 90: case -90:
                    break; 
                default:
            }
        });
    };

    return(
        <div class='homejs' id='home'>
            <Header />
            <title>Macademy-Home</title>

            <section id='section-1'>

                <ul id='timer_id'>
                    <li id='nb_reciever'>Timer Not Started: </li>
                    <li id='reciever'>_h _min _sec</li>
                </ul>
                
                <div id='caption-wrap'>
                    <h1 id='main-caption'>An effective studying tool for students to use!</h1>
                    <h4 id='secondary-caption'>MACademy is a tool students of all ages can use to develop better studying habits.</h4>
                </div>
                <img id='main-picture' src={mainpic}></img>
                <div id='learnmore-cont'>
                    <a id='learnmore' href='#section-2'>Learn More!</a>
                </div>
            </section>

            <section id='section-2'>
                <p id='border'>---</p>

                <table id='description_table'>
                    <tr>
                        <td><img id='des_pic' src={calendar_icon}></img><br></br>Planner</td>
                        <td>Does your week feel overwhelming with the number of tasks you have left to do? Well, it may not be as bad as you think! With the Planner Tool, you can become more organized by actively knowing what you have to do each day of the week. Often times, without having it in front of us, we feel like we have a lot more to do than we do. Well, no more!</td>
                    </tr>
                    <tr>
                        <td><img id='des_pic' src={clock_icon}></img><br></br>Interval Studying</td>
                        <td>Does your week feel overwhelming with the number of tasks you have left to do? Well, it may not be as bad as you think! With the Planner Tool, you can become more organized by actively knowing what you have to do each day of the week. Often times, without having it in front of us, we feel like we have a lot more to do than we do. Well, no more!</td>
                    </tr>
                    <tr>
                        <td><img id='des_pic' src={gpa_icon}></img><br></br>GPA Calculator</td>
                        <td>Does your week feel overwhelming with the number of tasks you have left to do? Well, it may not be as bad as you think! With the Planner Tool, you can become more organized by actively knowing what you have to do each day of the week. Often times, without having it in front of us, we feel like we have a lot more to do than we do. Well, no more!</td>
                    </tr>
                </table>
            </section>
            <Footer />
        </div>
    );
};
