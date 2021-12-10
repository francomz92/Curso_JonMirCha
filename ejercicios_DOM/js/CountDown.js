import { stopIntervals } from './Utils.js';

const $counterDown = document.querySelector('.count-down');

const setCounterDown = (date, dateIntervalIDsList) => {
   let interval;
   const destineDate = new Date(date);
   let millisecondsToDestine = destineDate.getTime() - new Date().getTime() + 1000 * 60 * 60 * 6; // +3hs
   destineDate.setTime(millisecondsToDestine);
   interval = setInterval(() => {
      // 10800460 represent to first date on JavaScript -> '1/1/1970 00:00:00'
      if (millisecondsToDestine > 10800460) {
         let days = parseInt(millisecondsToDestine / 1000 / 60 / 60 / 24);
         destineDate.setTime(destineDate.getTime() - 1000);
         $counterDown.textContent = `
         Faltan
         ${days} días
         ${destineDate.getHours()} horas
         ${destineDate.getMinutes()} minutos
         ${destineDate.getSeconds()} segundos
      `;
         millisecondsToDestine = destineDate.getTime();
      } else {
         $counterDown.textContent = 'Happy Birthday Friend.!!';
         stopIntervals(dateIntervalIDsList);
      }
   }, 1000);
   dateIntervalIDsList.push(interval);
};

// Exports
export const runCounterDown = (dateIntervalIDsList) => {
   const destineDate = document.getElementById('destine-date').value;
   if (destineDate !== '') {
      $counterDown.textContent = '';
      stopIntervals(dateIntervalIDsList);
      setCounterDown(destineDate, dateIntervalIDsList);
   }
};
