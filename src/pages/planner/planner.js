import React from 'react';
import Header from '../Components/header/header';
import Footer from '../Components/footer/footer';
import './planner.css'

export default function PlannerPage(){


    if (localStorage.getItem('course1')==null){
        localStorage.setItem('course1','[]');
    }

    if (localStorage.getItem('course2')==null){
        localStorage.setItem('course2','[]');
    }

    if (localStorage.getItem('course3')==null){
        localStorage.setItem('course3','[]');
    }

    if (localStorage.getItem('course4')==null){
        localStorage.setItem('course4','[]');
    }

    if (localStorage.getItem('course5')==null){
        localStorage.setItem('course5','[]');
    }



    var one=[];
    var two=[];
    var three=[];
    var four=[];
    var five=[]


    function load(){
        var one=JSON.parse(localStorage.getItem('course1'));
        var two=JSON.parse(localStorage.getItem('course2'));
        var three=JSON.parse(localStorage.getItem('course3'));
        var four=JSON.parse(localStorage.getItem('course4'));
        var five=JSON.parse(localStorage.getItem('course5'));

        one.forEach(function(item){
            var li = document.createElement("li");
            var t = document.createTextNode(item);
            li.appendChild(t);
            document.getElementById('course1').appendChild(li);
            var span = document.createElement("SPAN");
            var txt = document.createTextNode("\u00D7");
            span.className = "close";
            span.id=item;
            span.appendChild(txt);
            li.appendChild(span);
            span.onclick=function(){
                var div = this.parentElement;
                var index=one.indexOf(this.id);
                one.splice(index,1);
                localStorage.setItem('course1',JSON.stringify(one));
                div.style.display = "none";
            }
        })
        two.forEach(function(item){
            var li = document.createElement("li");
            var t = document.createTextNode(item);
            li.appendChild(t);
            document.getElementById('course2').appendChild(li);
            var span = document.createElement("SPAN");
            var txt = document.createTextNode("\u00D7");
            span.className = "close";
            span.id=item;
            span.appendChild(txt);
            li.appendChild(span);
            span.onclick=function(){
                var div = this.parentElement;
                var index=two.indexOf(this.id);
                two.splice(index,1);
                localStorage.setItem('course2',JSON.stringify(two));
                div.style.display = "none";
            }
        })

        three.forEach(function(item){
            var li = document.createElement("li");
            var t = document.createTextNode(item);
            li.appendChild(t);
            document.getElementById('course3').appendChild(li);
            var span = document.createElement("SPAN");
            var txt = document.createTextNode("\u00D7");
            span.className = "close";
            span.id=item;
            span.appendChild(txt);
            li.appendChild(span);
            span.onclick=function(){
                var div = this.parentElement;
                var index=three.indexOf(this.id);
                three.splice(index,1);
                localStorage.setItem('course3',JSON.stringify(three));
                div.style.display = "none";
            }
        })

        four.forEach(function(item){
            var li = document.createElement("li");
            var t = document.createTextNode(item);
            li.appendChild(t);
            document.getElementById('course4').appendChild(li);
            var span = document.createElement("SPAN");
            var txt = document.createTextNode("\u00D7");
            span.className = "close";
            span.id=item;
            span.appendChild(txt);
            li.appendChild(span);
            span.onclick=function(){
                var div = this.parentElement;
                var index=four.indexOf(this.id);
                four.splice(index,1);
                localStorage.setItem('course4',JSON.stringify(four));
                div.style.display = "none";
            }
        })

        five.forEach(function(item){
            var li = document.createElement("li");
            var t = document.createTextNode(item);
            li.appendChild(t);
            document.getElementById('course5').appendChild(li);
            var span = document.createElement("SPAN");
            var txt = document.createTextNode("\u00D7");
            span.className = "close";
            span.id=item;
            span.appendChild(txt);
            li.appendChild(span);
            span.onclick=function(){
                var div = this.parentElement;
                var index=five.indexOf(this.id);
                five.splice(index,1);
                localStorage.setItem('course5',JSON.stringify(five));
                div.style.display = "none";
            }
        })
    }



    function uniCourse(li,inputValue, key){
        var span = document.createElement("SPAN");
        var txt = document.createTextNode("\u00D7");
        span.className = "close";
        span.appendChild(txt);
        li.appendChild(span);
        span.id=inputValue;
        span.appendChild(txt);
        li.appendChild(span);
        span.onclick=function(){
            var div = this.parentElement;
            if (key=='course1'){
                var index=one.indexOf(this.id);
                one.splice(index,1);
                localStorage.setItem(key,JSON.stringify(one));
            }else if(key=='course2'){
                var index=two.indexOf(this.id);
                two.splice(index,1);
                localStorage.setItem(key,JSON.stringify(two));
            }else if(key=='course3'){
                var index=three.indexOf(this.id);
                three.splice(index,1);
                localStorage.setItem(key,JSON.stringify(three));
            }else if(key=='course4'){
                var index=four.indexOf(this.id);
                four.splice(index,1);
                localStorage.setItem(key,JSON.stringify(four));
            }else if(key=='course5'){
                var index=five.indexOf(this.id);
                five.splice(index,1);
                localStorage.setItem(key,JSON.stringify(five));
            };
            div.style.display = "none";
        }
    }




    function courseOne() {
        var li = document.createElement("li");
        var inputValue = document.getElementById("input1").value;

        one.push(inputValue);
        localStorage.setItem('course1',JSON.stringify(one))

        var t = document.createTextNode(inputValue);
        li.appendChild(t);
        if (inputValue === '') {
          alert("You must write something!");
        } else {
          document.getElementById("course1").appendChild(li);
        }

        uniCourse(li,inputValue, 'course1')
        document.getElementById("input1").value = "";

      
    }

    function courseTwo() {
        var li = document.createElement("li");
        var inputValue = document.getElementById("input2").value;

        two.push(inputValue);
        localStorage.setItem('course2',JSON.stringify(two))

        var t = document.createTextNode(inputValue);
        li.appendChild(t);
        if (inputValue === '') {
          alert("You must write something!");
        } else {
          document.getElementById("course2").appendChild(li);
        }

        uniCourse(li,inputValue, 'course2')
        document.getElementById("input2").value = "";

    }

    function courseThree() {
        var li = document.createElement("li");
        var inputValue = document.getElementById("input3").value;

        three.push(inputValue);
        localStorage.setItem('course3',JSON.stringify(three))

        var t = document.createTextNode(inputValue);
        li.appendChild(t);
        if (inputValue === '') {
          alert("You must write something!");
        } else {
          document.getElementById("course3").appendChild(li);
        }

        uniCourse(li,inputValue, 'course3')
        document.getElementById("input3").value = "";

    }

    function courseFour() {
        var li = document.createElement("li");
        var inputValue = document.getElementById("input4").value;

        four.push(inputValue);
        localStorage.setItem('course4',JSON.stringify(four));

        var t = document.createTextNode(inputValue);
        li.appendChild(t);
        if (inputValue === '') {
          alert("You must write something!");
        } else {
          document.getElementById("course4").appendChild(li);
        }

        uniCourse(li,inputValue, 'course4')
        document.getElementById("input4").value = "";

    }

    function courseFive() {
        var li = document.createElement("li");
        var inputValue = document.getElementById("input5").value;

        five.push(inputValue);
        localStorage.setItem('course5',JSON.stringify(five))

        var t = document.createTextNode(inputValue);
        li.appendChild(t);
        if (inputValue === '') {
          alert("You must write something!");
        } else {
          document.getElementById("course5").appendChild(li);
        }

        uniCourse(li,inputValue, 'course5')
        document.getElementById("input5").value = "";

    }

    return(
        <div class='plannerjs' id="planner">
            <Header />
            <title>Macademy-Planner</title>
            <h1>This is the Planner Page!</h1>

            <ul id='timer_id'>
                <li id='nb_reciever'>Timer Not Started: </li>
                <li id='reciever'>_h _min _sec</li>
            </ul>

            <button id='load' onClick={load}>Load</button>

            <div id='course1-wrap'>
                <h2>Course 1</h2>

                <ul id='course1'>
                </ul>

                <input type="text" id="input1" placeholder="New Task..."></input>
                <span onClick={courseOne} class="addBtn">Add</span>

            </div>

            <div id='course2-wrap'>
                <h2>Course 2</h2>

                <ul id='course2'>
                </ul>

                <input type="text" id="input2" placeholder="New Task..."></input>
                <span onClick={courseTwo} class="addBtn">Add</span>

            </div>

            <div id='course3-wrap'>
                <h2>Course 3</h2>

                <ul id='course3'>
                </ul>

                <input type="text" id="input3" placeholder="New Task..."></input>
                <span onClick={courseThree} class="addBtn">Add</span>

            </div>

            <div id='course4-wrap'>
                <h2>Course 4</h2>

                <ul id='course4'>
                </ul>

                <input type="text" id="input4" placeholder="New Task..."></input>
                <span onClick={courseFour} class="addBtn">Add</span>

            </div>

            <div id='course5-wrap'>
                <h2>Course 5</h2>

                <ul id='course5'>
                </ul>

                <input type="text" id="input5" placeholder="New Task..."></input>
                <span onClick={courseFive} class="addBtn">Add</span>

            </div>

            <Footer />
        </div>
    );
};
