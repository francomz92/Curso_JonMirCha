import { loadSectionTitle } from './js/OnDOMLoad.js';
import { activeToUp } from './js/ToUpButton.js';
import { setTheme } from './js/DarkMode.js';
import { activeResponsiveJs } from './js/ResponsiveJavaScript.js';
import { loadDeviceInfo } from './js/DeviceInfo.js';
import { loadArticles } from './js/ArticleGrid.js';
import { loadLanguageList } from './js/RandomChoice.js';
import { activeObserver } from './js/AsideMenuDescktop.js';
import { createVideoPlayers, loadYouTubeAPIHandler } from './js/AutoPlayVideo.js';
import { loadVoices } from './js/Narrator.js';
import { endedEvents } from './js/events/OnEnded.js';
import { offlineEvents } from './js/events/OnOffline.js';
import { onlineEvents } from './js/events/OnOnline.js';
import { scrollEvents } from './js/events/OnScroll.js';
import { visibilityChangeEvents } from './js/events/OnVisibilityChange.js';
import { resetEvents } from './js/events/OnReset.js';
import { submitEvents } from './js/events/OnSubmit.js';
import { keyUpEvents } from './js/events/OnKeyUp.js';
import { keyDownEvents } from './js/events/OnKeyDown.js';
import { clickEvents } from './js/events/OnClick.js';

/* ***Elements selectors*** */
const $audio = document.getElementById('alarm-track');
const $articleSearch = document.querySelector('.search-article');

/* ***Intervals IDs Lists*** */
let clockIntervalIDsList = [];
let dateIntervalIDsList = [];
let proveResponsivePageList = [];
let videoPlayers = {};

/* ***DOMContentLoaded Events*** */
document.addEventListener('DOMContentLoaded', (e) => {
   // Check and set dark mode
   if (localStorage.getItem('dark_mode')) setTheme();
   // Load sections sub-titles
   loadSectionTitle();
   // Active go to up
   activeToUp();
   // Adapt section-4 view
   activeResponsiveJs('content-responsive', '(min-width: 600px)');
   // Detect Device Info
   loadDeviceInfo();
   // Load Articles
   loadArticles('');
   // Load Language List
   loadLanguageList();
   // Active intersection observer
   activeObserver();
   // Load settings for Youtube video handler
   createVideoPlayers(videoPlayers);
   loadYouTubeAPIHandler(videoPlayers);
   // Load languages voices
   loadVoices();

   /* *** Document Events *** */
   clickEvents(clockIntervalIDsList, dateIntervalIDsList, $audio);
   keyDownEvents($audio);
   keyUpEvents($articleSearch);
   submitEvents(proveResponsivePageList);
   resetEvents(proveResponsivePageList);
   visibilityChangeEvents(videoPlayers);

   /* *** Window Events *** */
   scrollEvents();
   onlineEvents();
   offlineEvents();

   /* ***Particular Events*** */
   endedEvents($audio);
});
