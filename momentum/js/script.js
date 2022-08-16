const time = document.querySelector('.time'),
      dateDay = document.querySelector('.date'),
      greeting = document.querySelector('.greeting'),
      body = document.querySelector('.body');


function showTime() {
  const date = new Date();
  const currentTime = date.toLocaleTimeString([], { hour12: false });
  time.textContent = currentTime;
  setTimeout(showTime, 1000);
  showDay();
  showGreeting();
}

function showDay() {
  const date = new Date();
  const options = {weekday: 'long', month: 'long', day: 'numeric'};
  const currentDate = date.toLocaleDateString('en-US', options);
  dateDay.textContent = currentDate;
}

function getTimeOfDay() {
  const date = new Date();
  const hours = date.getHours();
  if (hours >= 6 && hours < 12) {
      return 'Morning';
  } else if (hours >= 12 && hours < 18) {
      return 'Afternoon';
  } else if (hours >= 18 && hours < 24) {
      return 'Evening';
  } else if (hours >= 24 || hours < 6) {
      return 'Night';
  }
}

function showGreeting() {
  const timeOfDay = getTimeOfDay();
  greeting.textContent = `Good ${timeOfDay},`;
}

function setLocalStorage() {
  const name = document.querySelector('.name');
  localStorage.setItem('name', name.value);
}

window.addEventListener('beforeunload', setLocalStorage);

function getLocalStorage() {
  const name = document.querySelector('.name');
  if(localStorage.getItem('name')) {
    name.value = localStorage.getItem('name');
  }
}

window.addEventListener('load', getLocalStorage);

showTime();

// body.style.backgroundImage = "url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/evening/18.jpg')";

// function getRandomNum(min, max) {
//   return Math.random() * (max - min) + min;
// }