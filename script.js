/* Here is the function for the dropdown at the top of the page */

const coll = document.getElementsByClassName('collapsible');
let i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener('click', function () {
    this.classList.toggle('active');
    const content = this.nextElementSibling;
    if (content.style.display === 'block') {
      content.style.display = 'none';
    } else {
      content.style.display = 'block';
    }
  });
}

// Here is the javascript for the clock

function showTime() {
  const date = new Date();
  let h = date.getHours(); // 0 - 23
  let m = date.getMinutes(); // 0 - 59
  let s = date.getSeconds(); // 0 - 59
  let session = 'AM';

  if (h === 0) {
    h = 12;
  }

  if (h > 12) {
    h -= 12;
    session = 'PM';
  }

  h = (h < 10) ? `0${h}` : h;
  m = (m < 10) ? `0${m}` : m;
  s = (s < 10) ? `0${s}` : s;

  const time = `${h}:${m}:${s} ${session}`;
  document.getElementById('MyClockDisplay').innerText = time;
  document.getElementById('MyClockDisplay').textContent = time;

  setTimeout(showTime, 1000);
}

showTime();

// Here is the code for the calculator to function

let nums = [];

function display(value) {
  document.getElementById('result').value += value;
}

function clearScreen() {
  document.getElementById('result').value = '';
}

function addition() {
  const x = document.getElementById('result').value;
  if (x !== '') {
    nums.push(x);
    nums.push('+');
    document.getElementById('result').value = '';
    console.log(nums);
  }
}

function subtraction() {
  const x = document.getElementById('result').value;
  if (x !== '') {
    nums.push(x);
    nums.push('-');
    document.getElementById('result').value = '';
    console.log(nums);
  }
}

function multiply() {
  const x = document.getElementById('result').value;
  if (x !== '') {
    nums.push(x);
    nums.push('*');
    document.getElementById('result').value = '';
    console.log(nums);
  }
}

function division() {
  const x = document.getElementById('result').value;
  if (x !== '') {
    nums.push(x);
    nums.push('/');
    document.getElementById('result').value = '';
    console.log(nums);
  }
}

function calculate() {
  const x = document.getElementById('result').value;
  nums.push(x);
  document.getElementById('result').value = '';
  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === '+') {
      result = parseFloat(nums[i - 1]) + parseFloat(nums[i + 1]);
      nums[i + 1] = result;
    } else if (nums[i] === '-') {
      result = parseFloat(nums[i - 1]) - parseFloat(nums[i + 1]);
      nums[i + 1] = result;
    } else if (nums[i] === '*') {
      result = parseFloat(nums[i - 1]) * parseFloat(nums[i + 1]);
      nums[i + 1] = result;
    } else if (nums[i] === '/') {
      result = parseFloat(nums[i - 1]) / parseFloat(nums[i + 1]);
      nums[i + 1] = result;
    }
  }
  document.getElementById('result').value = result;
  nums = [];
}

// Here is the code for the copy function for the notes

function copyNote() {
  // Get the text field
  const copyText = document.getElementById('myInput');

  // Select the text field
  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices

  // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.value);

  // Alert the copied text
  alert(`Copied the text: ${copyText.value}`);
}

// Here is the code to clear the note

function clearNote() {
  document.getElementById('myInput').value = '';
}

// code for the to do list

  // Save the to-do list to IndexedDB whenever a task is added or removed
  document.querySelector('#addToDo').onclick = function() {
    if (document.querySelector('#addToDoText').value.length == 0) {
      alert('Please Enter a Task');
    } else {
      document.querySelector('#tasks').innerHTML += `
        <div class="task">
          <div class="input-group mb-3">
            <button class="btn btn-outline-secondary" type="button" id="done">Done!</button>
            <input type="text" class="form-control" placeholder="" value="${document.querySelector('#addToDoText').value}" aria-label="Example text with button addon" aria-describedby="button-addon1">
          </div>
        </div>
      `;
      document.querySelector('#addToDoText').value = '';

      const current_tasks = document.querySelectorAll('#done');
      for (let i = 0; i < current_tasks.length; i++) {
        current_tasks[i].onclick = function() {
          this.parentNode.remove();
        };
      }

    }
  };






let timerOn = false;
let focusInterval; // variable to hold the interval ID
let minute;
let second;

// code for the focus button
function focusMode() {
  if (document.getElementById('timerAmount').value === '') {
    alert('Please enter a time');
  }
  else if (timerOn === false) {
    timerOn = true;
    minute = parseInt(document.getElementById('timerAmount').value);
    second = 0;

    const timer = `${minute}:${second < 10 ? '0' : ''}${second}`;
    document.getElementById('focusDisplay').innerText = timer;
    document.getElementById('focusDisplay').textContent = timer;
    document.querySelector('#timerAmount').value = '';

    // make the timer go down by 1 second every second
    focusInterval = setInterval(() => {
      if (minute <= 0 && second <= 0) {
        clearInterval(focusInterval);
        timerOn = false;
        alert('Times up!');
        document.getElementById('focusDisplay').innerText = '';
        document.getElementById('focusDisplay').textContent = '';
      } else if (second <= 0) {
        second = 59;
        minute--;
      } else {
        second--;
      }

      const timer = `${minute}:${second < 10 ? '0' : ''}${second}`;
      document.getElementById('focusDisplay').innerText = timer;
      document.getElementById('focusDisplay').textContent = timer;
    }, 1000);
  } else if (timerOn === true) {
    stopTimer();
    focusMode();
  }
}

// function to stop the timer
function stopTimer() {
  clearInterval(focusInterval);
  timerOn = false;
  document.getElementById('focusDisplay').innerText = '';
  document.getElementById('focusDisplay').textContent = '';
}




//    code to change youtube embed
function embed() {
  document.querySelector('#youtube').innerHTML += `
        <div class="embed">
        ${document.querySelector('#embedLink').value}
      </div>
        `;
  document.querySelector('#youtube').value = '';
}

// getting the users location

const successCallback = (position) => {
  console.log(position);
  let lat = position.coords.latitude;
  let long = position.coords.longitude;
  lat = lat.toString();
  long = long.toString();
  coord = `${lat},${long}`;

  console.log(lat);
  console.log(long);
  window.weatherWidgetConfig = window.weatherWidgetConfig || [];
  window.weatherWidgetConfig.push({
    selector: '.weatherWidget',
    apiKey: 'YUEKSE3YZAGH2X4W73FHR8UYY', // Sign up for your personal key
    location: coord, // Enter an address
    unitGroup: 'us', // "us" or "metric"
    forecastDays: 7, // how many days forecast to show
    title: 'Weather', // optional title to show in the
    showTitle: true,
    showConditions: true,
  });

  (function () {
    const d = document; const
      s = d.createElement('script');
    s.src = 'https://www.visualcrossing.com/widgets/forecast-simple/weather-forecast-widget-simple.js';
    s.setAttribute('data-timestamp', +new Date());
    (d.head || d.body).appendChild(s);
  }());
};

const errorCallback = (error) => {
  console.log(error);
};

navigator.geolocation.getCurrentPosition(successCallback, errorCallback);

//   add links to the bottom of the page

function addLink() {
  if (document.querySelector('#addLinkText').value.length == 0) {
    alert('Please Enter a Link');
  } else if (document.querySelector('#addLinkName').value.length == 0) {
    alert('Please Enter a Name');
  } else {
    document.querySelector('#links').innerHTML += `
        <a class="navbar-brand" target="_blank" href="${document.querySelector('#addLinkText').value}">${document.querySelector('#addLinkName').value}</a>
        `;
  }
  document.querySelector('#addLinkText').value = '';
  document.querySelector('#addLinkName').value = '';
}


