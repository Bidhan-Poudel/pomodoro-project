//timer to develop

//Develop tab functionality

//1. Select all tabs from tab list
const time= document.querySelector(".time");
const body=document.querySelector("body");


const pomodoroTab = document.getElementById("Pomodoro");
const shortBreakTab=document.getElementById("Short-Break");
const longBreakTab=document.getElementById("Long-Break");


const pomodoroTabContent=document.getElementById("pomodoro-content");
const shortBreakTabContent=document.getElementById("shortbreak-content");
const longBreakTabContent=document.getElementById("longbreak-content");


const timerContainer=document.querySelector('.timer-container');

const focusContent=document.getElementById('focusContent');
const breakContent=document.getElementById('breakContent');


const pomodoroTime= document.getElementById("pomodoro-time");
const shortbreakTime= document.getElementById("shortbreak-time");
const longbreakTime= document.getElementById("longbreak-time");


const pomodoroButtonStart=document.getElementById("pomodoroButtonStart");
const pomodoroButtonStop=document.getElementById("pomodoroButtonStop");

const shortbreakButtonStart=document.getElementById("shortbreakButtonStart");
const shortbreakButtonStop=document.getElementById("shortbreakButtonStop");

const longbreakButtonStart=document.getElementById("longbreakButtonStart");
const longbreakButtonStop=document.getElementById("longbreakButtonStop");
// console.log(timerContainer);


// const tabs=document.querySelectorAll(".tab_list");

//2.Add click event listener to each tab

//3.Remove all active tab class from tab list

//4.Add active class to selected tab

//5.Remove all active calss from tab content

//6.Add active class to seleccted tab content

pomodoroTab.addEventListener("click", function(){
        // console.log("Pomodoro click");
        shortBreakTab.classList.remove("active");
        longBreakTab.classList.remove("active");
        pomodoroTab.classList.add("active");
        shortBreakTabContent.classList.remove("active");
        longBreakTabContent.classList.remove("active");
        pomodoroTabContent.classList.add("active");
        focusContent.classList.add("active");
        breakContent.classList.remove("active");
        // body.style.backgroundColor=rgb(217, 85, 80);
        body.style.backgroundColor='rgb(' + [217,85,80].join(',') + ')';
        body.style.transition="background-color 0.5s ease-in-out 0s"
        timerContainer.style.backgroundColor='rgba(' + [255,255,255,0.1].join(',') + ')';

        // rgba(255, 255, 255, 0.1)
    })
    shortBreakTab.addEventListener("click", function(){
        
        shortBreakTab.classList.add("active");
        longBreakTab.classList.remove("active");
        pomodoroTab.classList.remove("active");
        shortBreakTabContent.classList.add("active");
        longBreakTabContent.classList.remove("active");
        pomodoroTabContent.classList.remove("active");
        focusContent.classList.remove("active");
        breakContent.classList.add("active");      // body.style.backgroundColor=rgb(76, 145, 149);
        body.style.backgroundColor='rgb(' + [76,145,149].join(',') + ')';
        body.style.transition="background-color 0.5s ease-in-out 0s"
        timerContainer.style.backgroundColor='rgba(' + [255,255,255,0.1].join(',') + ')';
        
    })
    longBreakTab.addEventListener("click", function(){
        // console.log("Long Break Tab click");
        shortBreakTab.classList.remove("active");
        longBreakTab.classList.add("active");
        pomodoroTab.classList.remove("active");
        shortBreakTabContent.classList.remove("active");
        longBreakTabContent.classList.add("active");
        pomodoroTabContent.classList.remove("active");
        focusContent.classList.remove("active");
        breakContent.classList.add("active");         
        body.style.backgroundColor='rgb(' + [69,124,163].join(',') + ')';
        timerContainer.style.backgroundColor='rgba(' + [255,255,255,0.1].join(',') + ')';
        body.style.transition="background-color 0.5s ease-in-out 0s"

        
    })



    let timerInterval;
    let secondsLeft;
    


//Timer to develop
function startTimer(seconds , arg, srtbtn, stobtn){
    const now = Date.now();
    const then= now + (seconds*1000);
    
    timerInterval=setInterval(function(){
        secondsLeft= Math.round((then-Date.now())/1000);
        displayTime(secondsLeft, arg);

        if(secondsLeft <1){
            clearInterval(timerInterval);
        }

        },1000);
    
        stopTimer(seconds,arg,srtbtn,stobtn);
        
        
        // srtbtn.addEventListener("click",timer(secondsLeft,arg,srtbtn,stobtn));
        
        
        
    }
    
    
    function stopTimer(seconds,arg,srtbtn,stobtn){
    const stopInterval=function(){
        clearInterval(timerInterval);
        stobtn.addEventListener('click',stopInterval);
        srtbtn.style.display='inline';
        stobtn.style.display='none';
        // srtbtn.addEventListener("click",startTimer(seconds,arg,srtbtn,stobtn));
        // srtbtn.addEventListener('click',startTimer(seconds,arg,srtbtn,stobtn));
    }
    stobtn.addEventListener("click", stopInterval);

}


function displayTime(seconds,arg){
    const minute=Math.floor(seconds/60);
    const second=seconds%60;
    // console.log(minute,second);
    arg.innerText =minute +":" + second;
  
}


function play() {
    var audio = new Audio('https://interactive-examples.mdn.mozilla.net/media/examples/t-rex-roar.mp3');
    // audio.play();
  }



pomodoroButtonStart.addEventListener("click",function(){
    const pomodoroTotalTime= pomodoroButtonStart.secondsLeft ? pomodoroButtonStart.secondsLeft :1500;
    startTimer(pomodoroTotalTime,pomodoroTime,pomodoroButtonStart,pomodoroButtonStop);
    pomodoroButtonStart.style.display="none"
    pomodoroButtonStop.style.display='inline';
    
    })
    pomodoroButtonStop.addEventListener("click",function(){
        stopTimer(secondsLeft,pomodoroTime,pomodoroButtonStart,pomodoroButtonStop);
        
    })


shortbreakButtonStart.addEventListener("click",function(){
    
    const shortbreakTotalTime= shortbreakButtonStart.secondsLeft ? shortbreakButtonStart.secondsLeft :300;
    startTimer(shortbreakTotalTime,shortbreakTime,shortbreakButtonStart,shortbreakButtonStop);
    shortbreakButtonStart.style.display="none"
    shortbreakButtonStop.style.display='inline';
    
});

shortbreakButtonStop.addEventListener("click",function(){
    stopTimer(shortbreakButtonStop.secondsLeft,shortbreakTime,shortbreakButtonStart,shortbreakButtonStop);
    
})

longbreakButtonStart.addEventListener("click",function(){

    const longbreakTotalTime= longbreakButtonStart.secondsLeft ? longbreakButtonStart.secondsLeft :900;
    startTimer(longbreakTotalTime,longbreakTime,longbreakButtonStart,longbreakButtonStart);
    longbreakButtonStart.style.display="none"
    longbreakButtonStop.style.display='inline';
    
});


longbreakButtonStart.addEventListener("click",function(){
    stopTimer(secondsLeft,longbreakTime,longbreakButtonStart,longbreakButtonStop);
    
})