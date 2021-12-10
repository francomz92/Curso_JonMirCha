import { stopIntervals } from './Utils.js';

const $clock = document.querySelector('.clock');

const showClock = (element, intervalIDsList) => {
   let id = setInterval(() => {
      $clock.textContent = new Date().toLocaleTimeString();
   }, 1000);
   intervalIDsList.push(id);
   element.setAttribute('disabled', true);
   document.querySelector('.stop-clock').removeAttribute('disabled');
};

const hideClock = (element, intervalIDsList) => {
   $clock.textContent = '';
   stopIntervals(intervalIDsList);
   element.removeAttribute('disabled');
   document.querySelector('.start-clock').removeAttribute('disabled');
};

// Exports
export const clockHandler = (element, setIntervalIDsList) => {
   if (element.matches('.start-clock')) showClock(element, setIntervalIDsList);
   else hideClock(element, setIntervalIDsList);
};
