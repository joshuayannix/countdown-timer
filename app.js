const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('deadline');
const items = document.querySelectorAll('.deadline-format h4')

let futureDate = new Date(2020,7,25,13,53,0);

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();

let month = futureDate.getMonth();
month = months[month]
const date = futureDate.getDate();

const weekday = weekdays[futureDate.getDay()];

giveaway.textContent = `giveaway ends on ${weekday} ${month} ${date} ${year} ${hours}:${minutes}am`

// future time in ms
const futureTime = futureDate.getTime();

const getRemainingTime = () => {
  const today = new Date().getTime();
  const t = futureTime - today;
  
  // values in ms
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;
  // calculate all values
  let days = Math.floor(t/oneDay);
  let hours = Math.floor((t % oneDay) / oneHour);
  let minutes = Math.floor((t % oneHour) / oneMinute)
  let seconds = Math.floor((t % oneMinute) / 1000)
  
  // set values array
  const values = [days,hours,minutes,seconds];
  
  const format = item => {
    if(item < 10){
      return item = `0${item}`
    }
    return item
  }

  items.forEach((item, index) => {
    item.innerHTML = format(values[index]);
  })
 
  // countdown
  
}

getRemainingTime()