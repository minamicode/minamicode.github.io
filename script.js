"use strict"

function callDateTime() {
    let currentDate = (new Date()).toDateString();
    let currentTime = (new Date()).toLocaleTimeString(); 
    document.getElementById('clock').innerHTML=`${currentDate} ${currentTime}`;
  }
  

setInterval(function(){ callDateTime() }, 1000);