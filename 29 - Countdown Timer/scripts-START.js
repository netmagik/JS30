// let countdown;
// const timerDisplay = document.querySelector('.display__time-left');
// const endTime = document.querySelector('.display__end-time');
// const buttons = document.querySelectorAll('[data-time');


// function timer(seconds) {
//     //Clear any existing timers
//     clearInterval(countdown);
//     //figure out current time stamp
//     const now = Date.now();
//     //how many seconds from now
//     const then = now + seconds * 1000;
    
//     displayTimeLeft(seconds);
//     displayEndTime(then);

//     //run every second (1000 ms)
//     countdown = setInterval(() => {
//         const secondsLeft = Math.round((then - Date.now()) / 1000);
//         //check if we should stop it
//         if(secondsLeft < 0) {
//             // stops timer
//             clearInterval(countdown);
//            // stops function 
//             return;
//         }
//         //display it
//         displayTimeLeft(secondsLeft);
//     }, 1000);
// }

// function displayTimeLeft(seconds) {
//     const minutes = Math.floor(seconds / 60);
//     const remainderSeconds = seconds % 60;
//     const display = `${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
//     timerDisplay.textContent = display;
//     document.title = display;
// }

// function displayEndTime(timestamp){
//     const end = new Date(timestamp);
//     const hour = end.getHours();
//     const minutes = end.getMinutes();
//     endTime.textContent = 
//     `Be Back at ${hour > 12 ? hour - 12 : hour}:${minutes < 10 ? '0' : ''}${minutes}`;
// }


// function startTimer() {
//     const seconds = parseInt(this.dataset.time);
//     timer(seconds);
// }

// buttons.forEach(button => button.addEventListener('click', startTimer));

// //Form submission
// document.customForm.addEventListener('submit', function(e) {
//     e.preventDefault();
//     const mins = this.minutes.value;
//     console.log(mins);
//     timer(mins * 60);
//     this.reset();
// });

let countdown;
const timerDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('[data-time');

function timer(seconds) {
    // Clear any existing timers
    clearInterval(countdown)
  const now = Date.now();
  // then is when the timer stops (end time)
  const then = now + seconds * 1000;
  displayTimeLeft(seconds);
  displayEndTime(then);

  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);
    // check if we should stop it
    if(secondsLeft < 0) {
        clearInterval(countdown)
        return;
    }
    // display it
    displayTimeLeft(secondsLeft)
  }, 1000)
}

function displayTimeLeft(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainderSeconds = seconds % 60;
    const display = `${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`
    document.title = display;
    timerDisplay.textContent = display; 
   
}

function displayEndTime(timestamp){
        const end = new Date(timestamp);
        const hour = end.getHours();
        const minutes = end.getMinutes();
        endTime.textContent = 
        `Be Back at ${hour > 12 ? hour - 12 : hour}:${minutes < 10 ? '0' : ''}${minutes}`;
    }

function startTimer() {
    const seconds = parseInt(this.dataset.time);
    timer(seconds)

}

buttons.forEach(button => button.addEventListener('click', startTimer));

document.customForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const mins = this.minutes.value;
    console.log(mins)
    timer(mins * 60);
    this.reset();
})
