const toggleClass = (bool, element, cls) => {
   bool ? element.classList.add(cls) : element.classList.remove(cls);
};

// Exports
export const $darkMode = document.querySelector('.dark-mode');

export const setTheme = () => {
   $darkMode.checked = localStorage.getItem('dark_mode');
   document.querySelectorAll('[data-dark]').forEach((element) => {
      toggleClass($darkMode.checked, element, 'dark');
   });
   document.querySelectorAll('[data-darkmode-button]').forEach((element) => {
      toggleClass($darkMode.checked, element, 'dark-button');
   });
   document.querySelectorAll('[data-dark-card]').forEach((element) => {
      toggleClass($darkMode.checked, element, 'dark-card');
   });
};

export const togleDarkMode = () => {
   if (localStorage.getItem('dark_mode')) {
      localStorage.removeItem('dark_mode');
      setTheme($darkMode);
   } else {
      localStorage.setItem('dark_mode', true);
      setTheme($darkMode);
   }
};
