import React from 'react';
import Header from '../Components/header/header';
import Footer from '../Components/footer/footer';
import './timer.css';


export default function TimerPage(){

    var isPaused=false;
    var isStopped=false;

    var x;


    const date=new Date()

    function pause(){
        isPaused=true;
    }

    function resume(){
        isPaused=false;
    }

    function stop(){
        isStopped=true;
    }


    function getData(){

        var hour=parseInt(document.getElementById('hours').value);
        var minute=parseInt(document.getElementById('mins').value);
        var second=parseInt(document.getElementById('secs').value);

        isPaused=false;
        isStopped=false;

        
        x=setInterval(() => {
            if (!isPaused){
                second=second-1

                if (second<=0){
                    minute=minute-1
                    if (minute<0){
                        hour=hour-1
                        minute=59
                    }
                    second=59;
                }
                
                document.getElementById("reciever").innerHTML = hour + "h "
                        + minute + "m " + second + "s ";
                
                if (hour==0 && minute==0 && second==0){
                    clearInterval(x);
                    document.getElementById("reciever").innerHTML = "EXPIRED";
                }

                if (isStopped==true) {
                    clearInterval(x);
                    document.getElementById("reciever").innerHTML = "EXPIRED";
                }

            }
        }, 1000);
    
    }

    return(
        <div id="timer">
            <Header />
            <title>Macademy-Interval Studying</title>

            <p id='reciever'></p>

            <form id='countdown_info' onsubmit="return false">
                <input id='hours' type='number'></input>h
                <input id='mins' type='number'></input>min
                <input id='secs' type='number'></input>sec
            </form>
            <button id="starter_btn" onClick={getData}>Start</button>
            <button id="pause_btn" onClick={pause}>Pause</button>
            <button id="resume_btn" onClick={resume}>Resume</button>
            <button id="stop_btn" onClick={stop}>Stop</button>


            <Footer />
        </div>
    );

};
