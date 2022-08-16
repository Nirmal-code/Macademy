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
        document.getElementById("resume_btn").style.pointerEvents='auto';
        document.getElementById("pause_btn").style.pointerEvents='none';
        document.getElementById("stop_btn").style.pointerEvents='none';


    }

    function resume(){
        isPaused=false;
        document.getElementById("resume_btn").style.pointerEvents='none';
        document.getElementById("pause_btn").style.pointerEvents='auto';
        document.getElementById("stop_btn").style.pointerEvents='auto';


    }

    function stop(){
        isStopped=true;
        document.getElementById("starter_btn").style.pointerEvents='auto';
        document.getElementById("resume_btn").style.pointerEvents='none';
        document.getElementById("pause_btn").style.pointerEvents='none';
        document.getElementById("stop_btn").style.pointerEvents='none';




    }

    function getData2(){
        var b_hour=parseInt(document.getElementById('b_hours').value);
        var b_minute=parseInt(document.getElementById('b_mins').value);
        var b_second=parseInt(document.getElementById('b_secs').value);

        isPaused=false;
        isStopped=false;

        
        x=setInterval(() => {
            if (!isPaused){
                b_second=b_second-1

                if (b_second<=0){
                    b_minute=b_minute-1

                    if (b_minute<0){
                        b_hour=b_hour-1
                        b_minute=59
                    }
                    b_second=59;
                }
                
                document.getElementById("reciever").innerHTML = b_hour + "h "
                        + b_minute + "m " + b_second + "s ";
                
                if (b_hour<0){
                    clearInterval(x);
                    document.getElementById("reciever").innerHTML = "Stop Procrastinating now :)";
                    getData()
                }

                if (isStopped==true) {
                    clearInterval(x);
                    document.getElementById("reciever").innerHTML = "EXPIRED";
                }

            }
        }, 1000);

    }


    function getData(){

        document.getElementById("starter_btn").style.pointerEvents='none';
        document.getElementById("pause_btn").style.pointerEvents='auto';
        document.getElementById("stop_btn").style.pointerEvents='auto';

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
                        + minute + "min " + second + "sec ";
                
                if (hour<0){
                    clearInterval(x);
                    document.getElementById("reciever").innerHTML = "Enjoy Your Break :)";
                    getData2();

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

            <form id='countdown_info' onsubmit="return false">
                Set Studying Time: <input id='hours' type='number'></input>h
                <input id='mins' type='number'></input>min
                <input id='secs' type='number'></input>sec<br></br>
                Set Break Time:<input id='b_hours' type='number'></input>h
                <input id='b_mins' type='number'></input>min
                <input id='b_secs' type='number'></input>sec
            </form>

            <p id='reciever'>__h __min __sec</p>

            <div id='all_btn'>
                <button id="starter_btn" onClick={getData}>Start</button>
                <button id="pause_btn" onClick={pause}>Pause</button>
                <button id="resume_btn" onClick={resume}>Resume</button>
                <button id="stop_btn" onClick={stop}>Stop</button>
            </div>



            <Footer />
        </div>
    );

};
