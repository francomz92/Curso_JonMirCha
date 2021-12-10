import { showConectionStatusMessage } from '../ConectionStatus.js';

export const onlineEvents = () => {
   window.addEventListener('online', (e) => {
      showConectionStatusMessage(e.type);
   });
};
