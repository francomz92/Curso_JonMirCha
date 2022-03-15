import { ajax } from './ajax.js';
import { startLoader, stopLoader } from './Loader.js';

const setValidState = (element) => {
   element.classList.add('valid');
   element.classList.remove('invalid');
   clearErrorMessage(element);
};
const setInvalidState = (element) => {
   element.classList.remove('valid');
   element.classList.add('invalid');
   clearErrorMessage(element);
   setErrorMessage(element);
};

const setErrorMessage = (element) => {
   const $error = document.createElement('span');
   $error.classList.add('input-error-message');
   $error.setAttribute('id', element.getAttribute('name'));
   $error.textContent = `El ${element.getAttribute('name')} ingresado no es válido`;
   element.insertAdjacentElement('afterend', $error);
};

const clearErrorMessage = (element) => {
   const $spanes = document.querySelectorAll(`#${element.getAttribute('name')}`);
   $spanes.forEach((span) => span.remove());
};

const clearInputStyle = (element) => {
   element.classList.remove('valid');
   element.classList.remove('invalid');
   clearErrorMessage(element);
};

export const validateName = (input) => {
   const validName = new RegExp(/[0-9]/);
   if (input.value === '') clearInputStyle(input);
   else !validName.test(input.value) ? setValidState(input) : setInvalidState(input);
};

export const validateEmail = (input) => {
   const validEmail = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/i);
   if (input.value === '') clearInputStyle(input);
   else validEmail.test(input.value) ? setValidState(input) : setInvalidState(input);
};

export const validateForm = (event) => {
   event.preventDefault();
   if (document.querySelector('.validate-form span')) alert('Corrige los campos necesarios');
   else {
      startLoader('.validate-form');
      ajax({
         url: 'http://localhost:3333/form',
         method: 'POST',
         data: new FormData(document.querySelector('.validate-form')),
         succes: async (res) => {
            const resData = await res.json();
            stopLoader('.validate-form .start-loader');
            alert(resData.message);
         },
         error: (err) => {
            alert(err.statusText || 'Mensaje de error');
         },
         extra: { mode: 'cors' },
      });
   }
};
