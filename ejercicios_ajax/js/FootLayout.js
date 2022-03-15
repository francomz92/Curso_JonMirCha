import { startLoader } from './Loader.js';
import { stripeAPI } from '../Keys.js';

const API_URL = stripeAPI.URL;

const API_PUBLIC_KEY = stripeAPI.PUBLIC_KEY;
const API_SECRET_KEY = stripeAPI.SECRET_KEY;

const setComida = (comidas, prices) => {
   const $layout = document.querySelector('.foot-layout');
   const $template = document.getElementById('comidas').content;
   const comidasFragments = document.createDocumentFragment();
   comidas.forEach((comida, index) => {
      $template.querySelector('article').setAttribute('data-price', prices[index].id);
      $template.querySelector('article').setAttribute('title', comida.name);
      $template.querySelector('img').setAttribute('src', comida.images[0]);
      $template.querySelector('img').setAttribute('alt', comida.name);
      $template.querySelector('h5').textContent = comida.name;
      $template.querySelector('[data-id=description]').textContent = comida.description;
      $template.querySelector('[data-id=price]').textContent = parsePrice(prices[index].unit_amount_decimal);
      const clone = document.importNode($template, true);
      comidasFragments.appendChild(clone);
   });
   $layout.appendChild(comidasFragments);
};

const parsePrice = (price) => {
   return `$${price.slice(0, -2)},${price.slice(-2)} ARS`;
};

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

const success = async (responses) => {
   const foodData = [await responses[0].json(), await responses[1].json()];
   const products = foodData[0].data.sort((e) => e.id);
   const prices = foodData[1].data.sort((e) => e.product);
   setComida(products, prices);
};

const getData = async ([...urls], callback) => {
   const responses = await Promise.all(
      urls.map((url) => fetch(url, { headers: { Authorization: `Bearer ${API_SECRET_KEY}` } }))
   );
   callback(responses);
};

const addtoCheckout = (itemID) => {
   const response = Stripe(API_PUBLIC_KEY, { locale: 'es' }).redirectToCheckout({
      lineItems: [{ price: itemID, quantity: 1 }],
      mode: 'payment',
      successUrl: 'http://localhost:3556/templates/success.html',
      cancelUrl: 'https://example.com/cancel',
   });
   if (response.error) alert(response.error.message);
};

const itemCheckoutHandler = (item) => {
   if (item === document.querySelector('.foot-layout article'))
      addtoCheckout(item.getAttribute('data-price'));
   else addtoCheckout(item.parentElement.getAttribute('data-price'));
};

document.addEventListener('DOMContentLoaded', (e) => {
   const $loader = loadLoader();
   getData([API_URL + 'products', API_URL + 'prices'], success);
   removeLoader($loader);

   /* Click events */

   document.addEventListener('click', (e) => {
      if (e.target.matches('.foot-layout article *') || e.target.matches('.foot-layout article'))
         itemCheckoutHandler(e.target);
   });
});
