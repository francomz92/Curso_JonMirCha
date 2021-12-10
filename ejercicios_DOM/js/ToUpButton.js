const $toUp = document.querySelector('.to-up');

// Exports
export const activeToUp = () => {
   if (window.scrollY > 300) {
      $toUp.style.setProperty('visibility', 'visible');
      $toUp.style.setProperty('opacity', '1');
   } else {
      $toUp.style.setProperty('visibility', 'hidden');
      $toUp.style.setProperty('opacity', '0');
   }
};
