var box = document.querySelector(".box")
var dateEl = document.querySelector(".date");
var hourEl = document.querySelector(".hour");
var minuteEl = document.querySelector(".minutes");
var secondsEl = document.querySelector(".seconds");
var week_dayEl = document.querySelector(".week-day");
var dayEl = document.querySelector(".day");
var monthEl = document.querySelector(".month");
var yearEl = document.querySelector(".year");
var pm_or_am = document.querySelector(".pm-or-am")



function updateTime(){

    // For new date
    var currentDate = new Date()
    var date = currentDate.getDate()
    dayEl.innerHTML = date

    // For month
    var months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    var month = currentDate.getMonth()
    month = months[month]
    monthEl.innerHTML = month

    // For week
    var weeks = ["Sun","Mon","Tue","Wed","Thur","Fri","Sat"]
    var week = currentDate.getDay()
    week = weeks[week]
    week_dayEl.innerHTML = week

    // For current year
    var year = currentDate.getFullYear()
    yearEl.innerHTML = year

    
    // For hour
    var hour = currentDate.getHours()
    hourEl.innerHTML = hour

    // For minutes
    var minutes = currentDate.getMinutes()
    minuteEl.innerHTML = minutes

    // For seconds
    var seconds = currentDate.getSeconds()
    secondsEl.innerHTML = seconds
    pm_or_am.innerHTML = "AM"


    // check hour it's greater than 12 or not
    if(hourEl.innerHTML > 12){
        hourEl.innerHTML = hourEl.innerHTML - 12;
        pm_or_am.innerHTML = "PM"
        pm_or_am.style.display = "block"
    }
    
}

/*if you just call the function it will just show the second at once time but
when you pass the function in setInterval method it will show the new seconds at every time */
var stopClock = setInterval(updateTime,1000)
function start(){
    box.style.display = "flex"
    setTimeout(hide,30000)
}
function hide(){
    box.style.display = "none"
}