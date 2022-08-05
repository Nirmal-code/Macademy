import React from 'react';
import Header from '../Components/header/header';
import Footer from '../Components/footer/footer';
import './home.css';
import mainpic from '../../images/home_page_image.png';
import image2 from '../../images/home_image2.png';


export default function HomePage(){
    return(
        <div id='home'>
            <Header />
            <title>Macademy-Home</title>
            <div id='caption-wrap'>
                <h1 id='main-caption'>An effective studying tool for students to use!</h1>
                <h4 id='secondary-caption'>MACademy is a tool students of all ages can use to develop better studying habits.</h4>
            </div>
            <img id='main-picture' src={mainpic}></img>
            <img id='image2' src={image2}></img>
            <Footer />
        </div>
    );
};
