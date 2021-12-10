import { showConectionStatusMessage } from '../ConectionStatus.js';

export const offlineEvents = () => {
   window.addEventListener('offline', (e) => {
      showConectionStatusMessage(e.type);
   });
};
