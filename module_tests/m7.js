//Create a timer to be cleared later
const timer1 = setTimeout(() => {console.log("timer 1 has finished")}, 3000);

//Use clearTimeout() to stop a timer
const timer2 = setTimeout(() => {
    console.log("timer 2 has finished");
    clearTimeout(timer1);
}, 2000);