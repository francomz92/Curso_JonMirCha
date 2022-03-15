const loadMarkDown = async () => {
   const $main = document.querySelector('main');
   try {
      const resopnse = await fetch('../md/mark_down.md');
      if (!resopnse.ok) throw resopnse;
      const data = await resopnse.text();
      const converter = new showdown.Converter();
      $main.innerHTML = converter.makeHtml(data);
   } catch (error) {
      console.log(error);
      const message = `Error ${error.status}, ${error.message}`;
      $main.innerHTML = message;
   }
};

document.addEventListener('DOMContentLoaded', loadMarkDown);
