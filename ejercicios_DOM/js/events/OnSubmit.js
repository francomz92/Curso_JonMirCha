import { speakEnteredText } from '../Narrator.js';
import { startProveResponsivePage } from '../ResponsiveJavaScript.js';
import { validateForm } from '../ValidateForm.js';

export const submitEvents = (proveResponsivePageList) => {
   document.addEventListener('submit', (e) => {
      // Adapt new window
      if (e.target.matches('.responsive-prove-form')) startProveResponsivePage(e, proveResponsivePageList);
      // Validate form before submit
      else if (e.target.matches('.validate-form')) validateForm(e);
      // Speak entered text
      else if (e.target.matches('.narrator-container')) speakEnteredText(e);
   });
};
