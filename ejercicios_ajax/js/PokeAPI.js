import { ajax } from './ajax.js';
import { startLoader } from './Loader.js';
// import { loadLoader, removeLoader } from './FootLayout.js';

const loadLoader = () => {
   const $loader = startLoader('body');
   $loader.classList.add('modal');
   return $loader;
};

const removeLoader = (loader) => {
   let t = setTimeout(() => {
      loader.remove();
      clearTimeout(t);
   }, 1000);
};

const $cardContainer = document.querySelector('.cards-container');
const $cardsTemplate = document.getElementById('poke-api-cards').content;
const cardsTemplateFragment = document.createDocumentFragment();

const loadPokemonsCards = (cardContainer) => cardContainer.appendChild(cardsTemplateFragment);

const setData = (pokemonData) => {
   $cardsTemplate.querySelector('figure').setAttribute('data-id', pokemonData.id);
   $cardsTemplate.querySelector('h5').textContent = pokemonData.name;
   $cardsTemplate.querySelector('img').setAttribute('src', pokemonData.sprites.front_default);
   $cardsTemplate.querySelector('img').setAttribute('alt', pokemonData.name);
   $cardsTemplate.querySelector('.type').textContent = `Type: ${pokemonData.types[0].type.name}`;
   $cardsTemplate.querySelector('.ability').textContent = `Ability: ${pokemonData.abilities[0].ability.name}`;
   const clone = document.importNode($cardsTemplate, true);
   cardsTemplateFragment.appendChild(clone);
};

const getPokemon = (pokemon) => {
   ajax({
      url: pokemon.url,
      succes: async (response) => {
         const pokemonData = await response.json();
         setData(pokemonData);
         loadPokemonsCards($cardContainer);
      },
      error: (err) => console.log(err),
   });
};

const enableButton = (cls, action) => {
   document.querySelector(cls).setAttribute('data-href', action);
   document.querySelector(cls).removeAttribute('disabled');
};

const disableButton = (cls) => {
   document.querySelector(cls).removeAttribute('data-href');
   document.querySelector(cls).setAttribute('disabled', '');
};

const setPaginationButtons = (responseData) => {
   if (responseData.next) enableButton('.next', responseData.next);
   else disableButton('.next');
   if (responseData.previous) enableButton('.prev', responseData.previous);
   else disableButton('.prev');
};

const getData = (url) => {
   ajax({
      url: url,
      succes: async (response) => {
         const pokemonsNames = await response.json();
         for (let i = 0; i < pokemonsNames.results.length; i++) {
            const pokemon = pokemonsNames.results[i];
            getPokemon(pokemon);
         }
         setPaginationButtons(pokemonsNames);
      },
   });
};

const loadPokemons = (url) => {
   const $loader = loadLoader();
   getData(url);
   removeLoader($loader);
};

document.addEventListener('DOMContentLoaded', (e) => {
   loadPokemons('https://pokeapi.co/api/v2/pokemon');

   document.addEventListener('click', (e) => {
      if (
         (e.target.matches('.next') || e.target.matches('.prev')) &&
         e.target.getAttribute('data-href') !== null
      ) {
         $cardContainer.innerHTML = '';
         loadPokemons(e.target.getAttribute('data-href'));
      }
   });
});
