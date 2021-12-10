import { alarmHandler } from '../Alarms.js';
import { togleBurgerMenu } from '../Burger.js';
import { clockHandler } from '../Clock.js';
import { runCounterDown } from '../CountDown.js';
import { togleDarkMode } from '../DarkMode.js';
import { updateSlider } from '../ImageSlider.js';
import { getLocation } from '../Location.js';
import { selectRandom } from '../RandomChoice.js';
import { getWebCam } from '../WebCam.js';

export const clickEvents = (clockIntervalIDsList, dateIntervalIDsList, $audio) => {
   document.addEventListener('click', (e) => {
      // Open-Close Burger menú
      if (e.target.matches('.burger') || e.target.matches('.item a')) togleBurgerMenu();
      // Togle dark mode
      else if (e.target.matches('.dark-mode')) togleDarkMode();
      // Start-Stop Clock
      else if (e.target.matches('.start-clock') || e.target.matches('.stop-clock'))
         clockHandler(e.target, clockIntervalIDsList);
      // Start-Stop track alarm
      else if (e.target.matches('.start-alarm') || e.target.matches('.stop-alarm')) alarmHandler(e, $audio);
      // Start-Stop countdown
      else if (e.target.matches('#reset-date')) runCounterDown(dateIntervalIDsList);
      // Go to top page
      else if (e.target.matches('.to-up')) window.scrollTo(0, 0);
      // Active web cam
      else if (e.target.matches('.web-cam-button')) getWebCam();
      // Active location detection
      else if (e.target.matches('.location-button')) getLocation();
      // Select random choice
      else if (e.target.matches('#random-choice-button')) selectRandom();
      // Image slider handler
      else if (e.target.matches('#prev') || e.target.matches('#next')) updateSlider(e);
   });
};
