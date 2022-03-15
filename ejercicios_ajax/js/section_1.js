import { ajax } from './ajax.js';

const $section = document.querySelector('.section-1');

const handleActiveStyle = (currentLink) => {
   document.querySelectorAll('.menu a').forEach((element) => {
      element.classList.remove('active');
      if (element === currentLink) element.classList.add('active');
   });
};

export const setInitalData = () => {
   const $links = document.querySelectorAll('.menu a');
   ajax({
      url: `http://localhost:55555/articulos`,
      succes: async (response) => {
         const articles = await response.json();
         articles.forEach((art, i) => {
            $links[i].dataset.id = art.id;
         });
         setData($links.item(0));
      },
   });
};

export const setData = (currentLink) => {
   ajax({
      url: `http://localhost:55555/articulos/${currentLink.dataset.id}`,
      succes: async (response) => {
         const article = await response.json();
         $section.querySelector('p').textContent = article.descripcion;
         $section.querySelector('img').src = article.imagen;
         handleActiveStyle(currentLink);
      },
   });
};
