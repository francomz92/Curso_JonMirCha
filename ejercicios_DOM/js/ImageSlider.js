// Exports
export const updateSlider = (event) => {
   const $prev = document.querySelector('.figures-container figure');
   let position = parseInt($prev.style.getPropertyValue('margin-left')) || 0;
   if (event.target.matches('#prev') && position < 200) {
      position += 200;
      $prev.style.marginLeft = `${position}%`;
   } else if (event.target.matches('#next') && position >= 0) {
      position -= 200;
      $prev.style.marginLeft = `${position}%`;
   }
   console.log(position);
};
