const $locationContainer = document.querySelector('.location-container');

const result = {
   success: (position) => {
      let x = position.coords.latitude,
         y = position.coords.longitude,
         aprox = position.coords.accuracy;
      let html = `
         <span>Latitud: ${x}</span>
         <span>Longitud: ${y}</span>
         <span>Aproximación: ${aprox.toFixed()} metros</span>
         <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28702.15264578162!2d-${y}!3d-${x}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x27cc6dd631060026!2zMjXCsDU2JzM0LjEiUyA2MMKwMzcnMDIuOSJX!5e0!3m2!1ses-419!2sar!4v1638210292648!5m2!1ses-419!2sar" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`;
      $locationContainer.innerHTML = '';
      $locationContainer.insertAdjacentHTML('afterbegin', html);
   },
   error: (error) => {
      let html = `
         <span style="text-align: center">No se concedieron permisos de ubicación.!</span>`;
      $locationContainer.innerHTML = '';
      $locationContainer.insertAdjacentHTML('afterbegin', html);
   },
   options: {
      enableHighAccuaracy: true,
      timeout: 5000,
      maximumAge: 0,
   },
};

export const getLocation = () => {
   const geolocation = window.navigator.geolocation;
   geolocation.getCurrentPosition(result.success, result.error);
};
