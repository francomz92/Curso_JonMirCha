import { activeToUp } from '../ToUpButton.js';

export const scrollEvents = () => {
   window.addEventListener('scroll', (e) => {
      // Active to-up button
      activeToUp();
   });
};
