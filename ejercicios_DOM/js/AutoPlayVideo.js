const $videoList = document.querySelectorAll('.video iframe');

const playCurrentVideo = (videoPlayers, video) => {
   videoPlayers[video.id].playVideo();
   video.dataset.playing = 'true';
};

const pauseCurrentVideo = (videoPlayers, video) => {
   try {
      videoPlayers[video.id].pauseVideo();
      video.dataset.playing = 'false';
   } catch (error) {}
};

export const createVideoPlayers = (videoPlayers) => {
   try {
      $videoList.forEach((item) => {
         videoPlayers[item.id] = new YT.Player(item.id);
      });
   } catch (error) {}
};

const videoHandler = (entries, videoPlayers) => {
   entries.forEach((entry) => {
      entry.isIntersecting && entry.target.dataset.playing === 'false'
         ? playCurrentVideo(videoPlayers, entry.target)
         : pauseCurrentVideo(videoPlayers, entry.target);
   });
};

export const loadYouTubeAPIHandler = (videoPlayers) => {
   const options = { threshold: 0.5 };
   const obrsever = new IntersectionObserver((entries) => videoHandler(entries, videoPlayers), options);
   $videoList.forEach((video) => obrsever.observe(video));
};

export const videoOnChangeTab = (videoPlayers) =>
   $videoList.forEach((video) =>
      document.visibilityState === 'visible' && video.dataset.playing === 'true'
         ? videoPlayers[video.id].playVideo()
         : videoPlayers[video.id].pauseVideo()
   );
