import { removeAllChilds } from './Utils.js';
import { setTheme, $darkMode } from './DarkMode.js';

const $articlesGrid = document.querySelector('.articles-container');
const $template = document.getElementById('articles').content;
const fragment = document.createDocumentFragment();

const articles = {
   animals: {
      url: './assets/articles/animals.jpg',
      title: 'Animals',
   },
   culture: {
      url: './assets/articles/culture.jpg',
      title: 'Culture',
   },
   gourmet: {
      url: './assets/articles/gourmet.jpg',
      title: 'Gourmet',
   },
   history: {
      url: './assets/articles/history.jpg',
      title: 'History',
   },
   people: {
      url: './assets/articles/people.jpg',
      title: 'People',
   },
   tech: {
      url: './assets/articles/tech.jpg',
      title: 'Tech',
   },
};

const clearArticles = () => {
   removeAllChilds($template);
   removeAllChilds($articlesGrid);
};

const filterArticles = (valueToSearch) => {
   for (const art in articles) {
      const comp = new RegExp(valueToSearch, 'i');
      if (comp.test(art)) {
         const element = articles[art];
         const article = document.createElement('article');
         const html = `
         <figure>
            <img src="${element.url}" alt="${element.title}"/>
            <figcaption>${element.title}</figcaption>
         </figure>
         `;
         article.classList.add('article-card');
         article.setAttribute('data-dark-card', '');
         article.innerHTML = html;
         $template.appendChild(article);
      }
   }
   let clone = document.importNode($template, true);
   fragment.appendChild(clone);
   $articlesGrid.appendChild(fragment);
};

// Exports
export const loadArticles = (valueToSearch) => {
   clearArticles();
   filterArticles(valueToSearch);
   setTheme($darkMode);
};
