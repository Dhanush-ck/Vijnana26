const day = document.getElementById('day');
const hour = document.getElementById('hour');
const minute = document.getElementById('minute');
const second = document.getElementById('second');

day.innerHTML = hour.innerHTML = minute.innerHTML = second.innerHTML = "00";

const targetDate = new Date("January 07 2026 09:00:00").getTime()

window.onload = timer();

function timer() {
    const currentDate = new Date().getTime()
    const distance = targetDate - currentDate

    const Day =  Math.floor(distance / 1000 / 60 / 60 / 24)
    const Hour = Math.floor(distance / 1000 / 60 / 60) % 24
    const Minute = Math.floor(distance / 1000 / 60 ) % 60
    const Second = Math.floor(distance / 1000 ) % 60
    
    day.innerHTML = Day
    hour.innerHTML = Hour
    minute.innerHTML = Minute
    second.innerHTML = Second

    if(Day < 10 ) 
        day.innerHTML = "0" + Day
    if(Hour < 10 ) 
        hour.innerHTML = "0" + Hour
    if(Minute < 10 ) 
        minute.innerHTML = "0" + Minute
    if(Second < 10 )
        second.innerHTML = "0" + Second
    
    if(distance < 0) {
        day.innerHTML = "00"
        hour.innerHTML = "00"
        minute.innerHTML = "00"
        second.innerHTML = "00"
    }
}

setInterval(timer, 1000)