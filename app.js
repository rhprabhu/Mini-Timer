{/* <div class="container">
<h1 id="title">One hour timer</h1>
<h1><span id="minutes">00</span>: <span id="seconds">00</span></h1>

<div class="mybuttons">
<button id="strtbtn">Start</button>
<button id="stpbtn">Stop</button> */}


let minutes= document.querySelector("#minutes");
let seconds= document.querySelector("#seconds");
let strtbtn= document.querySelector("#strtbtn");
let stpbtn= document.querySelector("#stpbtn");
let resetbtn= document.querySelector("#resetbtn");

let mytimer;
let mycounter=0;
let myseconds=0;
let myminutes=0;



strtbtn.addEventListener("click", function(){

    strtbtn.disabled=true;
    stpbtn.disabled=false;
    resetbtn.disabled=false; 

    mytimer=setInterval(function(){
        mycounter++;
        myseconds=mycounter;

        seconds.innerHTML=myseconds;

        //start counting seconds
        if(myseconds>59){
            seconds.innerHTML="00";
            mycounter=0;
            myminutes++;

        } else if (myseconds>9){
        seconds.innerHTML=myseconds;
    } else{
        seconds.innerHTML="0" + myseconds;
        }


        //start counting minutes
    if(myminutes>59){
        minutes.innerHTML="00";
        seconds.innerHTML="00";
        mycounter=0;
        myminutes=0;
        myseconds=0;
 clearInterval(mytimer);

    } else if (myminutes>9){
        minutes.innerHTML=myminutes;
} else{
    minutes.innerHTML="0" + myminutes;
    }
},1000)
})


stpbtn.addEventListener('click', function(){
    strtbtn.disabled=false;
    stpbtn.disabled=true;
    clearInterval(mytimer);
})

resetbtn.addEventListener('click', function(){
    strtbtn.disabled=false;
resetbtn.disabled=true;
stpbtn.disabled=true;
    clearInterval(mytimer);
    minutes.innerHTML="00";
    seconds.innerHTML="00";
    mycounter=0;
    myminutes=0;
    myseconds=0;
})
