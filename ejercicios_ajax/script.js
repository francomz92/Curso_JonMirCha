import { validateEmail, validateName, validateForm } from './js/ValidateForm.js';
import { dragAndDropHandler, setDragStyle, unsetDragStyle } from './js/DragAndDrop.js';
import { loadIncludesContainers } from './js/Includes.js';
import { setData } from './js/section_1.js';
import { uploadFilesHandler } from './js/UploadFiles.js';

document.addEventListener('DOMContentLoaded', (e) => {
   // Load containers and set inital data
   loadIncludesContainers();

   /* Click events */
   document.addEventListener('click', (e) => {
      // e.preventDefault();
      if (e.target.matches('.menu a')) setData(e.target);
   });
   /* Change events */
   document.addEventListener('change', (e) => {
      if (e.target.matches('#files')) uploadFilesHandler(e.target.files);
   });

   document.addEventListener('dragover', (e) => {
      e.preventDefault();
      if (e.target.matches('.drop-zone')) setDragStyle();
   });
   document.addEventListener('dragleave', (e) => {
      if (e.target.matches('.drop-zone')) unsetDragStyle();
   });
   document.querySelector('.drop-zone').addEventListener('drop', (e) => {
      e.preventDefault();
      if (e.target.matches('.drop-zone')) dragAndDropHandler(e.dataTransfer.files);
   });
   document.addEventListener('keyup', (e) => {
      // Set Validate Style for first_name and last_name input
      if (e.target.matches('.validate-form input[type=text]')) validateName(e.target);
      // Set Validate Style for email input
      else if (e.target.matches('.validate-form input[type=email]')) validateEmail(e.target);
   });
   document.addEventListener('submit', (e) => {
      // Validate form before submit
      if (e.target.matches('.validate-form')) validateForm(e);
   });
});
