import { ajax } from './ajax.js';
import { setInitalData } from './section_1.js';

const toInclude = document.querySelectorAll('[data-include]');

export const loadIncludesContainers = () => {
   toInclude.forEach(async (element) => {
      ajax({
         url: element.getAttribute('data-include'),
         succes: async (response) => {
            const htmlTemplate = await response.text();
            element.outerHTML = htmlTemplate;
            // Load inital data
            setInitalData();
         },
      });
   });
};
