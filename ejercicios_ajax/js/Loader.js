export const startLoader = (elementClass) => {
   const $loader = document.createElement('div');
   $loader.classList.add('start-loader');
   document.querySelector(elementClass).insertAdjacentElement('beforeend', $loader);
   return $loader;
};

export const stopLoader = (loaderClass) => {
   document.querySelector(loaderClass).remove();
};
