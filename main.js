const videoURL =
  "https://players.brightcove.net/6415475887001/2mvEoAvsy_default/index.html?videoId=6348433849112";

/**
 * Skips the video forward to a specified time.
 *
 * @param {HTMLElement} iframe - The iframe element containing the video.
 * @param {number} timeInSeconds - The time to skip to in the video, in seconds.
 */
const skipVideoTo = (iframe, timeInSeconds) => {
  const newSrc = `${videoURL}&t=${timeInSeconds}`;
  console.log("im trying to skip the video!");
  iframe.src = newSrc;
};

const main = () => {
  const iframe = document.getElementById("exercise-video");
  const delayBeforeSkip = 10000; // Time in milliseconds before skipping
  const skipToTime = 30; // Time in seconds to skip to in the video

  setTimeout(() => {
    skipVideoTo(iframe, skipToTime);
  }, delayBeforeSkip);
};

document.addEventListener("DOMContentLoaded", main);
