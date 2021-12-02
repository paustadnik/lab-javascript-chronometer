//const chronometer = require("./chronometer");

const chronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');

function printTime(minutes, seconds) {
  printMinutes(minutes)
  printSeconds(seconds)
}

function printMinutes(minutes) {
  minDecElement.innerHTML = minutes[0]
  minUniElement.innerHTML = minutes[1]
}

function printSeconds(seconds) {
  secDecElement.innerHTML = seconds[0]
  secUniElement.innerHTML = seconds[1]
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  // ... your code goes here
}

function clearSplits() {
  // ... your code goes here
}

function setStopBtn() {
  btnLeftElement.setAttribute('class', "btn stop") 
  btnLeftElement.textContent = 'STOP'
  
}

function setSplitBtn() {
  btnRightElement.setAttribute('class', 'btn split')
  btnRightElement.textContent = 'SPLIT'
}

function setStartBtn() {
  btnLeftElement.setAttribute('class', 'btn start')
  btnLeftElement.textContent = 'START'
}  

function setResetBtn() {
  btnRightElement.setAttribute('class', 'btn reset')
  btnRightElement.textContent = 'RESET'
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if (btnLeftElement.textContent === 'START') {
    chronometer.start()
    setStopBtn()
    setSplitBtn()
  }
  else {
    chronometer.stop()
    setStartBtn()
    setResetBtn()
  }

  /* btnLeftElement.classList.toggle("stop")
  btnRightElement.classList.toggle("split")

  if ((btnLeftElement.textContent === 'START') && (btnRightElement.textContent === 'RESET')) {
    btnLeftElement.textContent = 'STOP'
    btnRightElement.textContent = 'SPLIT'
  }
  else {
    btnLeftElement.textContent = 'START'
    btnRightElement.textContent = 'RESET'
  } */
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  // ... your code goes here
});
