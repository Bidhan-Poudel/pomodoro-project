//timer to develop

//Develop tab functionality

//1. Select all tabs from tab list
const time= document.querySelector(".time");
// console.log(time);
const body=document.querySelector("body");
const pomodoroTab = document.getElementById("Pomodoro");
const shortBreakTab=document.getElementById("Short-Break");
const longBreakTab=document.getElementById("Long-Break");
const pomodoroTabContent=document.getElementById("pomodoro-content");
const shortBreakTabContent=document.getElementById("shortbreak-content");
const longBreakTabContent=document.getElementById("longbreak-content");
// console.log(shortBreakTabContent);
const timerContainer=document.querySelector('.timer-container');

const focusContent=document.getElementById('focusContent');
const breakContent=document.getElementById('breakContent');


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
    // 'rgb(' + [69,124,163].join(',') + ')';

// console.log(longBreakTab);

// setInterval(function(){
//     console.log(new Date().toISOString())
// }, 1000)


// console.log(Date.now());

//Timer to develop
function timer(seconds , arg, btn){
    const now = Date.now();
    const then= now + (seconds*1000);
    
    const timerInterval=setInterval(function(){
        const secondsLeft=Math.round((then-Date.now())/1000);
        displayTime(secondsLeft, arg);

        if(secondsLeft <1){
            clearInterval(timerInterval);
        }

        },1000);
    




}



function displayTime(seconds,arg){
    const minute=Math.floor(seconds/60);
    const second=seconds%60;
    // console.log(minute,second);
    arg.innerText =minute +":" + second;
  
}

const pomodoroTime= document.getElementById("pomodoro-time");
const shortbreakTime= document.getElementById("shortbreak-time");
const longbreakTime= document.getElementById("longbreak-time");
const pomodoroButton=document.getElementById("pomodoroButton");


const shortbreakButton=document.getElementById("shortbreakButton");
const longbreakButton=document.getElementById("longbreakButton");

// displayTime(402, pomodoroTime);

// timer(100);



pomodoroButton.addEventListener("click",function(){
    const pomodoroTotalTime= 1500;
    // let time=pomodoroTotalTime;
    timer(pomodoroTotalTime,pomodoroTime,pomodoroButton);

});

shortbreakButton.addEventListener("click",function(){
    const shortbreakTotalTime= 300;
    // let time=shortbreakTime;
    timer(shortbreakTotalTime,shortbreakTime,shortbreakButton);

});

longbreakButton.addEventListener("click",function(){
    const longbreakTotalTime= 900;
    // let time=longbreakTime;  
    timer(longbreakTotalTime,longbreakTime,longbreakButton);

});






