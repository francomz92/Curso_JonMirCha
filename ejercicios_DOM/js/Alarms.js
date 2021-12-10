const soundTrackList = [
   './assets/audio/Carda_Keeks_Need_You_Now.mp3',
   './assets/audio/YVE_48_feat_LissA_Nothing_To_Say.mp3',
];

/* 
   @Param element -> event.target
   @Param $aduio -> HTML element from '<audio>' tag
      - Play track alarm or reload if $audio data-playing is 'stoped'
      - Clean track sound name and set it in $audio title attribute and section-1 'h3' element
      - Disable start alarm button and enable stop button
      - Show audio controls
      - Set $audio data-playing attribute to 'playing'
*/
const startTrackSound = (element, $audio) => {
   let name = $audio.currentSrc.split('/')[$audio.currentSrc.split('/').length - 1];
   name = name.replaceAll('_', ' ').replace('.mp3', '');
   if ($audio.dataset.playing === 'stoped') {
      $audio.load();
   }
   $audio.play();
   element.setAttribute('disabled', true);
   document.querySelector('#section-1 h3').textContent = `${name} ♫`;
   document.querySelector('.stop-alarm').removeAttribute('disabled');
   $audio.dataset.playing = 'playing';
   $audio.setAttribute('title', `${name}.mp3`);
   $audio.setAttribute('controls', true);
};

/* 
   @Param element -> event.target
   @Param $aduio -> HTML element from '<audio>' tag
      - Stop track alarm
      - Remove $audio title attribute
      - Clean section-1 'h3' element
      - Disable stop alarm button and enable start button
      - Hide audio controls
      - Set $audio data-playing attribute to 'stoped'
*/
const stopTrackSound = (element, $audio) => {
   $audio.pause();
   $audio.dataset.playing = 'stoped';
   document.querySelector('.start-alarm').removeAttribute('disabled');
   element.setAttribute('disabled', true);
   $audio.removeAttribute('title');
   $audio.removeAttribute('controls');
   document.querySelector('#section-1 h3').textContent = '';
};

/* 
   @Param $audio -> HTML element from '<audio>' tag
      - Change to next track alarm
      - If current track alarm is last track alarm stop track alarm otherwise change track alarm
*/
export const changeNextTrackSong = ($audio) => {
   let currentTrackSoundIndex = soundTrackList.indexOf($audio.getAttribute('src'));
   let nextTrackSound = soundTrackList[currentTrackSoundIndex + 1];
   if (nextTrackSound === undefined) {
      let element = document.querySelector('.stop-alarm');
      stopTrackSound(element, $audio);
   } else {
      let element = document.querySelector('.start-alarm');
      $audio.setAttribute('src', nextTrackSound);
      setTimeout(() => {
         $audio.load();
         startTrackSound(element, $audio);
      }, 1000);
   }
};

/* 
   @Param $audio -> HTML element from '<audio>' tag
      - Change to previus track alarm
      - If current track alarm is first track alarm play same track alarm otherwise change track alarm
*/
const changePreviusTrackSong = ($audio) => {
   let element = document.querySelector('.start-alarm');
   let currentTrackSoundIndex = soundTrackList.indexOf($audio.getAttribute('src'));
   let previusTrackSound = soundTrackList[currentTrackSoundIndex - 1];
   if (previusTrackSound === undefined) {
      previusTrackSound = soundTrackList[0];
   }
   $audio.setAttribute('src', previusTrackSound);
   setTimeout(() => {
      $audio.load();
      startTrackSound(element, $audio);
   }, 1000);
};

// Exports
export const alarmHandler = (event, $audio) => {
   // Click Event //
   if (event.type === 'click') {
      if (event.target.matches('.start-alarm')) startTrackSound(event.target, $audio);
      else stopTrackSound(event.target, $audio);
   }
   // Keydown Event //
   else if (event.type === 'keydown') {
      // Start Music
      if ($audio.dataset.playing === 'stoped' && event.code === 'Space') {
         startTrackSound(document.querySelector('.start-alarm'), $audio);
      }
      // Start/Change Music
      else if ($audio.dataset.playing === 'playing') {
         switch (event.code) {
            case 'Space':
               stopTrackSound(document.querySelector('.stop-alarm'), $audio);
               break;
            case 'ArrowLeft':
               changePreviusTrackSong($audio);
               break;
            case 'ArrowRight':
               changeNextTrackSong($audio);
               break;
            default:
               break;
         }
      }
   }
};
