import { clearProvesResponsivePages } from './Utils.js';

const $proveResponsivePageForm = document.querySelector('.responsive-prove-form');

const mobileContent = `
         <a href="https://youtu.be/6IwUl-4pAzc" target="_blank" data-dark>Ver video</a>
         <a href="https://goo.gl/maps/zUXHqphGEJk9oNdn9" target="_blank" data-dark>Ver mapa</a>`;

const descktopContent = `
         <iframe src="https://www.youtube.com/embed/6IwUl-4pAzc?controls=0" title="Responsive con JavaScript" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>
         <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62298.59204147359!2d5.7559046!3d60.7940841!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x463da32be5e49025%3A0x7301c72b69e074ca!2sSlottet!5e0!3m2!1ses-419!2sar!4v1637693685830!5m2!1ses-419!2sar" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`;

// Exports
export const activeResponsiveJs = (id, mediaQuery) => {
   let breakpoint = window.matchMedia(mediaQuery);
   const setElements = (e) => {
      if (e.matches) document.getElementById(id).innerHTML = descktopContent;
      else document.getElementById(id).innerHTML = mobileContent;
   };
   breakpoint.addEventListener('change', setElements);
   setElements(breakpoint);
};

export const startProveResponsivePage = (event, provedResponsivePageList) => {
   event.preventDefault();
   let width = $proveResponsivePageForm.width.value,
      height = $proveResponsivePageForm.height.value,
      url = $proveResponsivePageForm.url.value;
   const urlValidator = /^http/;
   if (url !== '') {
      url = urlValidator.test(url) ? url : `https://${url}` || `http://${url}`;
      let newWindow = window.open(url, '_blank', `width=${width}, height=${height}`);
      provedResponsivePageList.push(newWindow);
   }
};

export const clearProvedPages = (provedResponsivePageList) => {
   if (provedResponsivePageList.length > 0) clearProvesResponsivePages(provedResponsivePageList);
};
