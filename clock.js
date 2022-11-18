let saveButton = document.querySelector(".save-btn")
let saveMess = document.querySelector(".message");

saveButton.addEventListener('click', startClock);

function startClock(){
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    
    minutes = formatTime(minutes);
    seconds = formatTime(seconds);

    let time = hours + ":" + minutes + ":" + seconds;
// console.log(time);
saveMess.textContent = time;

setInterval(startClock,1000);
}

function formatTime(value){
    if(value <10){
        value = "0" + value;
  }
  return value;
}


let second = 0;
let min = 0;
let hrs = 0;
setInterval(() =>{
    let secTime = document.getElementById("sec");
    let minTime = document.getElementById("minutes");
    let hrsTime = document.getElementById("hours");

    if(second == 5){
        second = 0;
        
    }
    second++;
    let minutes = minTime.innerHTML;
    if(second == 5){
        min++;
    }
    let hours = hrsTime.innerHTML;
    if(min == 5){
         min = 1;
         hrs++;
    }
    secTime.innerHTML = second;
    minTime.innerHTML = min;
    hrsTime.innerHTML = hrs;
},1000);