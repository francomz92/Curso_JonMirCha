const $optionList = document.querySelector('.options-list');
const $template = document.getElementById('options-list-items').content;
const fragment = document.createDocumentFragment();
const $randomChoicebutton = document.getElementById('random-choice-button');

const options = ['JavaScript', 'Python', 'Java', 'Rubi', 'C++', 'php', 'Go', 'C'];

// Exports
export const loadLanguageList = () => {
   options.forEach((element) => {
      const li = document.createElement('li');
      li.textContent = element;
      $template.appendChild(li);
   });
   let clone = document.importNode($template, true);
   fragment.appendChild(clone);
   $optionList.appendChild(fragment);
};

export const selectRandom = () => {
   let index = Math.floor(Math.random() * options.length),
      html = `<span class="sub-title"><strong>"${$optionList.children[index].textContent}"</strong></span>`;
   $randomChoicebutton.parentElement.lastChild.remove();
   $randomChoicebutton.insertAdjacentHTML('afterend', html);
};
