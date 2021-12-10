// Exports
export const loadSectionTitle = () => {
   document.querySelectorAll('.item a').forEach((element) => {
      const sectionNumber = element.dataset.section;
      const $sectionSubTitle = document.querySelector(`#section-${sectionNumber} .sub-title`);
      $sectionSubTitle.textContent = element.textContent;
   });
};
