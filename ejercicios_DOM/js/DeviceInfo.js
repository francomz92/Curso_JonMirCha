const defUserDevice = (userAgent) => {
   let isMobile = {
      ios: () => userAgent.match(/iphone|ipad|ipod/i),
      android: () => userAgent.match(/android/i),
      windowsPhone: () => userAgent.match(/windows phone/i),
      any: function () {
         return this.ios() || this.android() || this.windowsPhone();
      },
   };
   let isDescktop = {
      linux: () => userAgent.match(/linux/i),
      windows: () => userAgent.match(/windows nt/i),
      mac: () => userAgent.match(/mac os/i),
      any: function () {
         return this.linux() || this.windows() || this.mac();
      },
   };
   let isBrowser = {
      chrome: () => userAgent.match(/chrome/i),
      safari: () => userAgent.match(/safari/i),
      opera: () => userAgent.match(/opera/i),
      firefox: () => userAgent.match(/firefox/i),
      ie: () => userAgent.match(/ie/i),
      edge: () => userAgent.match(/edge/i),
      any: function () {
         return this.chrome() || this.safari() || this.opera() || this.firefox() || this.ie() || this.edge();
      },
   };
   return {
      isMobile,
      isDescktop,
      isBrowser,
   };
};

export const loadDeviceInfo = () => {
   const userAgent = window.navigator.userAgent;
   const validator = defUserDevice(userAgent);
   let device = validator.isMobile.any() ? validator.isMobile.any()[0] : validator.isDescktop.any()[0],
      browser = validator.isBrowser.any() ? validator.isBrowser.any()[0] : 'Desconocido';
   document.querySelector('.device').textContent = `Device ${device}, Browser ${browser}`;
   // Insert element just for android devices
   if (validator.isMobile.android()) {
      document
         .querySelector('.device')
         .insertAdjacentHTML(
            'afterend',
            `<div class="device">Contenido disponible solo desde un dispositivo Android</div>`
         );
   }
};
