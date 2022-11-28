import React from 'react';
import Header from '../Components/header/header';
import Footer from '../Components/footer/footer';
import './timer.css';


export default function TimerPage(){
    
    if (typeof window !=='undefined'){
        window.isPaused=false;
        window.isStopped=false;
    }
    
    var x;

    function pause(){
        window.isPaused=true;
        document.getElementById("resume_btn").style.pointerEvents='auto';
        document.getElementById("pause_btn").style.pointerEvents='none';
        document.getElementById("stop_btn").style.pointerEvents='none';
    }

    function resume(){
        window.isPaused=false;
        document.getElementById("resume_btn").style.pointerEvents='none';
        document.getElementById("pause_btn").style.pointerEvents='auto';
        document.getElementById("stop_btn").style.pointerEvents='auto';
    }

    function stop(){
        window.isStopped=true;
        document.getElementById("starter_btn").style.pointerEvents='auto';
        document.getElementById("resume_btn").style.pointerEvents='none';
        document.getElementById("pause_btn").style.pointerEvents='none';
        document.getElementById("stop_btn").style.pointerEvents='none';
    }



    function getData2(hour, minute, second, b_hour, b_minute, b_second){

        var b_hour_store=b_hour;
        var b_minute_store=b_minute;
        var b_second_store=b_second;
        
        x=setInterval(() => {

            if (document.URL.includes('timer') && window.isPaused===false){
                document.getElementById("starter_btn").style.pointerEvents='none';
                document.getElementById("pause_btn").style.pointerEvents='auto';
                document.getElementById("stop_btn").style.pointerEvents='auto';
            }

            document.getElementById("nb_reciever").innerHTML="Break Time!"

            if (!window.isPaused){
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
                    document.getElementById("nb_reciever").innerHTML="Study Time!"
                    b_hour=b_hour_store;
                    b_minute=b_minute_store;

                    getData(hour, minute, second, b_hour_store, b_minute_store, b_second_store)
                }

                if (window.isStopped===true) {
                    clearInterval(x);
                    stop()
                    document.getElementById("reciever").innerHTML = "EXPIRED";
                    document.getElementById("nb_reciever").innerHTML="Timer Stopped."

                }

            }
        }, 1000);

    }

    function userData(){
        var hour=parseInt(document.getElementById('hours').value);
        var minute=parseInt(document.getElementById('mins').value);
        var second=parseInt(document.getElementById('secs').value);   
        
        var b_hour=parseInt(document.getElementById('b_hours').value);
        var b_minute=parseInt(document.getElementById('b_mins').value);
        var b_second=parseInt(document.getElementById('b_secs').value);
        
        window.isStopped=false;

        getData(hour, minute, second, b_hour, b_minute, b_second)
    }


    function getData(hour, minute, second, b_hour, b_minute, b_second){

        var hour_store=hour;
        var minute_store=minute;
        var second_store=second;


        x=setInterval(() => {

            
            if (document.URL.includes('timer') && window.isPaused===false){
                document.getElementById("starter_btn").style.pointerEvents='none';
                document.getElementById("pause_btn").style.pointerEvents='auto';
                document.getElementById("stop_btn").style.pointerEvents='auto';
            }

            document.getElementById("nb_reciever").innerHTML="Study Time!"

            if (window.isPaused===false){
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
                    document.getElementById("nb_reciever").innerHTML="Break Time!";
                    hour=hour_store;
                    minute=minute_store;
                    second=second_store;

                    getData2(hour_store, minute_store, second_store, b_hour,b_minute,b_second);

                }

                if (window.isStopped===true) {
                    clearInterval(x);
                    stop()
                    document.getElementById("reciever").innerHTML = "EXPIRED";
                    document.getElementById("nb_reciever").innerHTML="Timer Stopped."
                }

            }
        }, 1000);
    
    }

    return(
        <div class='timerjs' id="timer">
            <Header />
            <title>Macademy-Interval Studying</title>            

            <form id='countdown_info' onsubmit="return false">
                Set Studying Time: <input id='hours' type='number'min="0" defaultValue="0"></input>h
                <input id='mins' type='number' min="0" defaultValue="0"></input>min
                <input id='secs' type='number' min="0" defaultValue="0"></input>sec<br></br>
                Set Break Time:<input id='b_hours' type='number'min="0" defaultValue="0"></input>h
                <input id='b_mins' type='number'min="0" defaultValue="0"></input>min
                <input id='b_secs' type='number'min="0" defaultValue="0"></input>sec
            </form>

            <p id='nb_reciever'>Enter Info, and press start!</p>
            <p id='reciever'>__h __min __sec</p>

            <div id='all_btn'>
                <button id="starter_btn" onClick={userData}>Start</button>
                <button id="pause_btn" onClick={pause}>Pause</button>
                <button id="resume_btn" onClick={resume}>Resume</button>
                <button id="stop_btn" onClick={stop}>Stop</button>
            </div>



            <Footer />
        </div>
    );

};
