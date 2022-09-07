import React from 'react';
import Header from '../Components/header/header';
import Footer from '../Components/footer/footer';
import './planner.css'

export default function PlannerPage(){



    var one=[];
    var two=[];
    var three=[];
    var four=[];
    var five=[];

    var courses=[];


    function load(){


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

        if (localStorage.getItem('all_courses')==null){
            localStorage.setItem('all_courses','[]');
        }

        if (localStorage.getItem('coursecount')==null){
            localStorage.setItem('coursecount','0')
        }

        if (localStorage.getItem('course1_name')!=null){
            document.getElementById('course1-wrap').style.display='block';
            document.getElementById('reciever1').innerHTML=localStorage.getItem('course1_name');
            courses.push('1');
        }

        if (localStorage.getItem('course2_name')!=null){
            document.getElementById('course2-wrap').style.display='block';
            document.getElementById('reciever2').innerHTML=localStorage.getItem('course2_name');
            courses.push('2');
        }

        if (localStorage.getItem('course3_name')!=null){
            document.getElementById('course3-wrap').style.display='block';
            document.getElementById('reciever3').innerHTML=localStorage.getItem('course3_name');
            courses.push('3');
        }

        if (localStorage.getItem('course4_name')!=null){
            document.getElementById('course4-wrap').style.display='block';
            document.getElementById('reciever4').innerHTML=localStorage.getItem('course4_name');
            courses.push('4');
        }

        if (localStorage.getItem('course5_name')!=null){
            document.getElementById('course5-wrap').style.display='block';
            document.getElementById('reciever5').innerHTML=localStorage.getItem('course5_name');
            courses.push('5');
        }

        localStorage.setItem('all_courses',JSON.stringify(courses));

        
        one=JSON.parse(localStorage.getItem('course1'));
        two=JSON.parse(localStorage.getItem('course2'));
        three=JSON.parse(localStorage.getItem('course3'));
        four=JSON.parse(localStorage.getItem('course4'));
        five=JSON.parse(localStorage.getItem('course5'));

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


    function addCourse(){
        courses=JSON.parse(localStorage.getItem('all_courses'));
        var name=document.getElementById('coursename').value;

        if (name!==''){
            if (courses.includes('1')==false){
                document.getElementById('course1-wrap').style.display='block';
                localStorage.setItem('course1_name',name);
                document.getElementById('reciever1').innerHTML=name;
                localStorage.setItem('coursecount','1');
                courses.push('1');
            } else if (courses.includes('2')==false){
                document.getElementById('course2-wrap').style.display='block';
                localStorage.setItem('course2_name',name);
                document.getElementById('reciever2').innerHTML=name;
                localStorage.setItem('coursecount','2');
                courses.push('2');
            } else if (courses.includes('3')==false){
                document.getElementById('course3-wrap').style.display='block';
                localStorage.setItem('course3_name',name);
                document.getElementById('reciever3').innerHTML=name;
                localStorage.setItem('coursecount','3');
                courses.push('3');
            } else if (courses.includes('4')==false){
                document.getElementById('course4-wrap').style.display='block';
                localStorage.setItem('course4_name',name);
                document.getElementById('reciever4').innerHTML=name;
                localStorage.setItem('coursecount','4');
                courses.push('4');
            } else if (courses.includes('5')==false){
                document.getElementById('course5-wrap').style.display='block';
                localStorage.setItem('course5_name',name);
                document.getElementById('reciever5').innerHTML=name;
                localStorage.setItem('coursecount','5');
                document.getElementById('addcourse_wrap').style.display='none';
                courses.push('5');
            }
        }else{
            window.alert('please enter course name')
        }

        localStorage.setItem('all_courses',JSON.stringify(courses));

    }

    function removeCourseone(){
        courses=JSON.parse(localStorage.getItem('all_courses'));
        localStorage.setItem('course1','[]')
        localStorage.removeItem('course1_name');
        var index=courses.indexOf("1");
        courses.splice(index,1);
        localStorage.setItem('all_courses',JSON.stringify(courses));
        document.getElementById('course1-wrap').style.display='none';
    }

    function removeCoursetwo(){
        courses=JSON.parse(localStorage.getItem('all_courses'));
        localStorage.setItem('course2','[]')
        localStorage.removeItem('course2_name');
        var index=courses.indexOf("2");
        courses.splice(index,1);
        localStorage.setItem('all_courses',JSON.stringify(courses));
        document.getElementById('course2-wrap').style.display='none';
    }

    function removeCoursethree(){
        courses=JSON.parse(localStorage.getItem('all_courses'));
        localStorage.setItem('course3','[]')
        localStorage.removeItem('course3_name');
        var index=courses.indexOf("3");
        courses.splice(index,1);
        localStorage.setItem('all_courses',JSON.stringify(courses));
        document.getElementById('course3-wrap').style.display='none';
    }

    function removeCoursefour(){
        courses=JSON.parse(localStorage.getItem('all_courses'));
        localStorage.setItem('course4','[]')
        localStorage.removeItem('course4_name');
        var index=courses.indexOf("4");
        courses.splice(index,1);
        localStorage.setItem('all_courses',JSON.stringify(courses));
        document.getElementById('course4-wrap').style.display='none';
    }

    function removeCoursefive(){
        courses=JSON.parse(localStorage.getItem('all_courses'));
        localStorage.setItem('course5','[]')
        localStorage.removeItem('course5_name');
        var index=courses.indexOf("5");
        courses.splice(index,1);
        localStorage.setItem('all_courses',JSON.stringify(courses));
        document.getElementById('course5-wrap').style.display='none';
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
                <h2 id='reciever1'>Course 1</h2>

                <ul id='course1' class='course'>
                </ul>

                <input type="text" class='taskinput' id="input1" placeholder="New Task..."></input>
                <span onClick={courseOne} class="addBtn">Add</span>
                <br></br>
                <button onClick={removeCourseone} class='removecourse' id='removecourse1'>Remove Course</button>

            </div>

            <br></br>

            <div id='course2-wrap'>
                <h2 id='reciever2'>Course 2</h2>

                <ul id='course2'class='course'>
                </ul>

                <input type="text" class='taskinput' id="input2" placeholder="New Task..."></input>
                <span onClick={courseTwo} class="addBtn">Add</span>
                <br></br>
                <button class='removecourse' onClick={removeCoursetwo} id='removecourse2'>Remove Course</button>


            </div>

            <br></br>

            <div id='course3-wrap'>
                <h2 id='reciever3'>Course 3</h2>

                <ul id='course3' class='course'>
                </ul>

                <input type="text" class='taskinput' id="input3" placeholder="New Task..."></input>
                <span onClick={courseThree} class="addBtn">Add</span>
                <br></br>
                <button class='removecourse' onClick={removeCoursethree} id='removecourse3'>Remove Course</button>

            </div>

            <br></br>


            <div id='course4-wrap'>
                <h2 id='reciever4'>Course 4</h2>

                <ul id='course4' class='course'>
                </ul>

                <input type="text" class='taskinput' id="input4" placeholder="New Task..."></input>
                <span onClick={courseFour} class="addBtn">Add</span>
                <br></br>
                <button class='removecourse' onClick={removeCoursefour} id='removecourse4'>Remove Course</button>

            </div>

            <br></br>

            <div id='course5-wrap'>

                <h2 id='reciever5'>Course 5</h2>

                <ul id='course5' class='course'>
                </ul>

                <input type="text" class='taskinput' id="input5" placeholder="New Task..."></input>
                <span onClick={courseFive} class="addBtn">Add</span>
                <br></br>
                <button class='removecourse' onClick={removeCoursefive} id='removecourse5'>Remove Course</button>

            </div>

            <div id='addcourse_wrap'>
                <button id="addcourse" onClick={addCourse}>Add Course</button>
                <br></br>
                <input id='coursename' placeholder='Course Name'></input>

            </div>

            <Footer />
        </div>
    );
};

