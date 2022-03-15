import { ajax } from './ajax.js';

const $section2 = document.querySelector('.section-2');

export const createProgessElements = ($section) => {
   const $progressContainer = document.createElement('div');
   const $progress = document.createElement('progress');
   const $progressStatus = document.createElement('span');
   $progress.value = 0;
   $progress.max = 100;
   $progressContainer.insertAdjacentElement('beforeend', $progress);
   $progressContainer.insertAdjacentElement('beforeend', $progressStatus);
   $section.appendChild($progressContainer);
   return [$progress, $progressStatus];
};

export const setProssesBar = (files, $progress, $progressStatus) => {
   const fileReader = new FileReader();
   fileReader.readAsBinaryString(new Blob(files));

   fileReader.addEventListener('progress', (e) => {
      let progress = parseInt((e.loaded * 100) / e.total);
      $progressStatus.textContent = `${progress}%`;
      $progress.value = progress;
   });

   fileReader.addEventListener('loadend', (e) => {
      $progressStatus.textContent = '✔';
      $progress.value = 100;
      let timeout = setTimeout(() => {
         $progressStatus.remove();
         $progress.remove();
         clearTimeout(timeout);
      }, 2000);
   });
};

export const loadFiles = async (files) => {
   let formData = new FormData();
   for (const file of files) {
      formData.append('files', file, file.name);
   }
   ajax({
      url: 'http://localhost:3333/subir',
      method: 'POST',
      data: formData,
   });
};

export const uploadFilesHandler = (files) => {
   const [$progress, $progressStatus] = createProgessElements($section2);
   setProssesBar(files, $progress, $progressStatus);
   loadFiles(files);
};
