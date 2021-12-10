import { changeNextTrackSong } from '../Alarms.js';

export const endedEvents = ($audio) => {
   $audio.addEventListener('ended', (e) => {
      // Change to next track alarm
      changeNextTrackSong($audio);
   });
};
