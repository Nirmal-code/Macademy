import React from 'react';
import Header from '../Components/header/header';
import Footer from '../Components/footer/footer';
import './home.css';


export default function HomePage(){
    return(
        <div id='home'>
            <Header />
            <title>Macademy-Home</title>
            <h1>Welcome! This is the Home page!!</h1>
            <Footer />
        </div>
    );
};
