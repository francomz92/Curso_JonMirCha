import { loadFiles, createProgessElements, setProssesBar } from './UploadFiles.js';

const $section3 = document.querySelector('.section-3');
const $dropZone = document.querySelector('.drop-zone');

export const setDragStyle = () => {
   $dropZone.classList.add('is_active');
};

export const unsetDragStyle = () => {
   $dropZone.classList.remove('is_active');
};

export const dragAndDropHandler = (files) => {
   const [$progress, $progressStatus] = createProgessElements($section3);
   setProssesBar(files, $progress, $progressStatus);
   loadFiles(files);
   unsetDragStyle();
};
