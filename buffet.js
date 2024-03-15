
// const startingMinutes =30;
// let time = startingMinutes * 60;
// const countdownEl = document.getElementById('countdown');

// setInterval(updateCountdown,1000);

// function updateCountdown(){
//     const minutes = Math.floor(time/60);
//     let seconds = time % 60;
    

//     seconds = seconds <10 ? '0' + seconds :seconds;

//     countdownEl.innerHTML=`${minutes}:${seconds}`;
//     time--;
// }

const date_time1 = new Date('March 17, 2024 0:02:31').getTime();  

var fun = setInterval(function() {  

const date_time2 =  new Date().getTime();  

const time = date_time1 - date_time2;  

const days = Math.floor(time / (1000 * 60 * 60 * 24));  
const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));  
const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));  
const seconds = Math.floor((time % (1000 * 60)) / 1000);  

document.getElementById("day").innerHTML = days+":";  
document.getElementById("hour").innerHTML = hours+":";  
document.getElementById("minute").innerHTML = minutes+":";  
document.getElementById("second").innerHTML = seconds+":";  
}, 10);  