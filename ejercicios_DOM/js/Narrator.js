const setSelectOptions = (voices) => {
   const $voiceSelect = document.querySelector('select[name=narrator]');
   voices.forEach((voice) => {
      const $option = document.createElement('option');
      $option.textContent = voice.name;
      $voiceSelect.insertAdjacentElement('afterbegin', $option);
   });
   try {
      $voiceSelect.firstChild.setAttribute('selected', '');
   } catch (error) {}
};

export const loadVoices = () => {
   window.speechSynthesis.addEventListener('voiceschanged', (e) => {
      const voices = window.speechSynthesis.getVoices();
      setSelectOptions(voices);
   });
};

export const speakEnteredText = (event) => {
   event.preventDefault();
   const text = document.querySelector('textarea[name=text_for_read]').value;
   speechSynthesis.speak(new SpeechSynthesisUtterance(text));
};
