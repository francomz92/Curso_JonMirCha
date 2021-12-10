import { runAnimation } from './ConectionStatus.js';

export const getWebCam = async () => {
   const userDevices = navigator.mediaDevices;
   if (userDevices.getUserMedia) {
      try {
         const $video = document.getElementById('web-cam');
         const userMediaData = await userDevices.getUserMedia({
            audio: true,
            video: { width: { ideal: 1280 }, height: { ideal: 720 } },
         });
         $video.srcObject = userMediaData;
         $video.play();
      } catch (error) {
         const notification = document.createElement('span');
         notification.textContent = 'Web cam not found';
         notification.classList.add('connection-status-offline');
         document.body.appendChild(notification);
         runAnimation(notification);
      }
   }
};
