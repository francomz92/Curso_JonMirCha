import { videoOnChangeTab } from '../AutoPlayVideo.js';

export const visibilityChangeEvents = (videoPlayers) => {
   document.addEventListener('visibilitychange', () => {
      // Stop-Play video on change tab
      videoOnChangeTab(videoPlayers);
   });
};
