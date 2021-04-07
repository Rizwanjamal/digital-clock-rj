(function showDate () {
  var currentDate = new Date()
  document.getElementById("dateContainer").innerText = currentDate.toDateString();
})()


// 08 : 09 : 20 PM

// Long Approach

function showTime() {
  var currentDate = new Date();
  var hours = currentDate.getHours() // 0 - 23 
  var minutes = currentDate.getMinutes() // 1 - 59
  var seconds = currentDate.getSeconds() // 0 - 59
  var session = 'AM'

  // converting 24 hour format to 12 hour format
  if (hours == 0) {
    hours = 12
  }

  else if (hours > 12) {
    session = 'PM'
    hours = hours - 12 // 15 -> 15 - 12 => 3 PM 
  }

  hours = hours < 10 ? 0 + "" + hours : hours
  minutes = minutes < 10 ? 0 + "" + minutes : minutes
  seconds = seconds < 10 ? 0 + "" + seconds : seconds

  // 08 : 09 : 20 PM
  var clockTime = hours + " : " + minutes + " : " + seconds + " " + session
  document.getElementById('clockContainer').innerText = clockTime;
}

function showTime1() {
  var clockTime = new Date().toLocaleTimeString([], {hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit'})
  document.getElementById('clockContainer').innerText = clockTime;
}

var intervalRef;
function startClock () {
  intervalRef = setInterval(showTime1, 1000);
}

function stopClock () {
  clearInterval(intervalRef)
}