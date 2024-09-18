"use strict";

const countDownElement = {
  note: document.querySelector(".note"),
  days: document.querySelector(".days"),
  hours: document.querySelector(".hours"),
  mins: document.querySelector(".mins"),
  secs: document.querySelector(".secs"),
};

function updateCountDown() {
  const currentDate = new Date();
  const targetDate = new Date("2024-09-27T12:56:00");

  const countDownMilliSecs = targetDate - currentDate;
  const countDownSecs = Math.floor(countDownMilliSecs / 1000);
  const countDownDays = Math.floor(countDownSecs / (60 * 60 * 24));
  const countDownHours = Math.floor((countDownSecs / (60 * 60)) % 24);
  const countDownMins = Math.floor((countDownSecs / 60) % 60);
  const countDownSec = Math.floor(countDownSecs % 60);

  if (countDownMilliSecs <= 0) {
    clearInterval;
    countDownElement.days = "00";
    countDownElement.hours = "00";
    countDownElement.mins = "00";
    countDownElement.secs = "00";
  }

  switch (countDownDays) {
    case 8:
      countDownElement.note.textContent = "take it easy, one after the other.";
      break;
    case 7:
      countDownElement.note.textContent = "refine the solutions, keep practicing";
      break;
    case 6:
      countDownElement.note.textContent = "practice them again";
      break;
    case 5:
      countDownElement.note.textContent = "yoooo it's today, goodluck bruh!";
      break;
    case 4:
      break;
    case 3:
      break;
    case 2:
      break;
    case 1:
      break;

    default:
      countDownElement.note.textContent = "Congratulations bro!";
      break;
  }

  countDownElement.days.textContent = countDownDays;
  countDownElement.hours.textContent = countDownHours;
  countDownElement.mins.textContent = countDownMins;
  countDownElement.secs.textContent = countDownSec;
}

setInterval(updateCountDown, 1000);
