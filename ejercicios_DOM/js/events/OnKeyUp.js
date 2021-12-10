import { loadArticles } from '../ArticleGrid.js';
import { validateEmail, validateName } from '../ValidateForm.js';

export const keyUpEvents = ($articleSearch) => {
   document.addEventListener('keyup', (e) => {
      // Article Filter
      if (e.target === $articleSearch) loadArticles($articleSearch.value);
      // Set Validate Style for first_name and last_name input
      else if (e.target.matches('.validate-form input[type=text]')) validateName(e.target);
      // Set Validate Style for email input
      else if (e.target.matches('.validate-form input[type=email]')) validateEmail(e.target);
   });
};
