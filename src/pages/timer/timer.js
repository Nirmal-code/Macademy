import React from 'react';
import Header from '../Components/header/header';
import Footer from '../Components/footer/footer';
import './timer.css';


export default function TimerPage(){

    

    const date=new Date()



    function getData(){

        var hour=parseInt(document.getElementById('hours').value)+1;
        var minute=parseInt(document.getElementById('mins').value);
        var second=parseInt(document.getElementById('secs').value);

        var new_month=date.getMonth()+1;
        var new_day=date.getDate()+1;
        var new_year=date.getFullYear()+1;


        var new_hour=hour+date.getHours()-1;
        if (new_hour>=24){
            new_hour=new_hour-24;
            new_day=new_day+1;
        }

        var new_minute=minute+date.getMinutes();
        if (new_minute>60){
            new_minute=new_minute-60;
            new_hour=new_hour+1;
        }

        var new_second=second+date.getSeconds()+7;
        if (new_second>60){
            new_second=new_second-60;
            new_minute=new_minute+1;
        }

        var countDownDate=new Date((new_month)+" "+(new_day)+", "+(new_year)+" "+new_hour+":"+new_minute+":"+new_second);
        
        var x=setInterval(() => {
            var now = new Date().getTime();
            var distance = countDownDate - now;            
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);
            
            document.getElementById("reciever").innerHTML = hours + "h "
                    + minutes + "m " + seconds + "s ";
            
            if (distance < 0) {
                clearInterval(x);
                document.getElementById("reciever").innerHTML = "EXPIRED";
            }
        }, 1000);
    
    }

    return(
        <div id="timer">
            <Header />
            <title>Macademy-Interval Studying</title>

            <p id='reciever'></p>

            <form id='countdown_info' onsubmit="return false">
                <input id='hours' type='text'></input>h
                <input id='mins' type='text'></input>min
                <input id='secs' type='text'></input>sec
            </form>
            <button id="starter_btn" onClick={getData}>Add</button>
            <Footer />
        </div>
    );

};
