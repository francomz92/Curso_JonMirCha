const $listObserved = document.querySelectorAll('h2.sub-title');
const $items = document.querySelectorAll('.menu .item a');

const options = {
   rootMargin: '0px 0px -300px 0px',
   // threshold: 0.8,
};

const sectionObserver = new IntersectionObserver((entries) => {
   entries.forEach((entry) => {
      if (entry.isIntersecting) {
         $items.forEach((item) => {
            item.textContent.includes(entry.target.textContent)
               ? item.classList.add('active')
               : item.classList.remove('active');
         });
      }
   });
}, options);

export const activeObserver = () => $listObserved.forEach((element) => sectionObserver.observe(element));
