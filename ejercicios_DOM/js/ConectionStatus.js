export const runAnimation = (alretConnection) => {
   alretConnection.animate([{ opacity: '0' }, { opacity: '1' }], { duration: 1000 });
   let timerIn = setTimeout(() => {
      alretConnection.animate([{ opacity: '0' }], { duration: 1000 });
      let timerOut = setTimeout(() => {
         alretConnection.remove();
         clearTimeout(timerOut);
      }, 1000);
      clearTimeout(timerIn);
   }, 5000);
};

const setMessage = (parentElement, alretConnection) => {
   if (window.navigator.onLine) {
      alretConnection.textContent = 'Connecting...';
      alretConnection.classList.add('connection-status-online');
   } else {
      alretConnection.textContent = 'Lossing connection...';
      alretConnection.classList.add('connection-status-offline');
   }
   parentElement.append(alretConnection);
};

export const showConectionStatusMessage = (event) => {
   const $connecting = document.getElementById('section-7');
   const alretConnection = document.createElement('span');
   setMessage($connecting, alretConnection);
   runAnimation(alretConnection);
};
