import { clearProvedPages } from '../ResponsiveJavaScript.js';

export const resetEvents = (proveResponsivePageList) => {
   document.addEventListener('reset', (e) => {
      // Clear provedPagesList and close proves windows
      if (e.target.matches('.responsive-prove-form')) {
         clearProvedPages(proveResponsivePageList);
      }
   });
};
