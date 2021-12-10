// Exports
export const stopIntervals = (intervalsList) => {
   intervalsList.forEach((id) => {
      clearInterval(id);
   });
   intervalsList.splice(0, intervalsList.length);
};

export const clearProvesResponsivePages = (proveResponsivePagesList) => {
   proveResponsivePagesList.forEach((id) => {
      id.close();
   });
   proveResponsivePagesList.splice(0, proveResponsivePagesList.length);
};

export const removeAllChilds = (parent) => {
   while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
   }
};
