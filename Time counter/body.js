// Change date here to see whats yours
const realDate = "4 June 2022";

const realDays = document.getElementById("days");
const realHours = document.getElementById("hours");
const realMinutes = document.getElementById("minutes");
const realSeconds = document.getElementById("seconds");

function countdown() {
  const newDate = new Date(realDate);
  const currentDate = new Date();
  const totalSeconds = (newDate - currentDate) / 1000;

  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const minutes = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds % 60);

  realDays.innerHTML = days;
  realHours.innerHTML = formatTime(hours);
  realMinutes.innerHTML = formatTime(minutes);
  realSeconds.innerHTML = formatTime(seconds);
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

countdown();

setInterval(countdown, 1000);
