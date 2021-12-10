const $spaceBox = document.querySelector('.space-box');
const $ball = document.querySelector('.ball');
let x = 0;

let y = 0;

// Exports
export const ballHandler = (event) => {
   let limitSpace = $spaceBox.getBoundingClientRect();
   let limitBall = $ball.getBoundingClientRect();
   switch (event.code) {
      case 'ArrowLeft':
         if (limitBall.left > limitSpace.left) x--;
         break;
      case 'ArrowRight':
         if (limitBall.right < limitSpace.right) x++;
         break;
      case 'ArrowUp':
         if (limitBall.top > limitSpace.top) y--;
         break;
      case 'ArrowDown':
         if (limitBall.bottom < limitSpace.bottom) y++;
         break;
      default:
         break;
   }
   $ball.style.transform = `translate(${x * 5}%, ${y * 5}%)`;
};
