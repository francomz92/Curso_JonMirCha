import { alarmHandler } from '../Alarms.js';
import { ballHandler } from '../BallMovement.js';

export const keyDownEvents = ($audio) => {
   document.addEventListener('keydown', (e) => {
      // Start-Stop-Previus-Next track alarm
      if (e.ctrlKey) alarmHandler(e, $audio);
      // Ball Movement
      else if (e.shiftKey) ballHandler(e);
   });
};
