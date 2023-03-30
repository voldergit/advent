const whiteKeys = [...document.querySelectorAll("path.white-keys")];
const blackKeys = [...document.querySelectorAll("path.black-keys")];
const keys = [...whiteKeys, ...blackKeys];

for (let i = 0; i < keys.length; i++) {
  keys[i].dataset.index = i + 1;
  keys[i].onclick = (e) => {
    const specKey = e.target.dataset.index;
    playSound(specKey);
  };
}

let audio;
const playSound = function (keyPlayedNow) {
  if (audio) {
    audio.pause();
    audio.currentTime = 0;
  }
  audio = new Audio(`audio/key-${keyPlayedNow}.mp3`);
  audio.play();
};
