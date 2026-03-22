const playBtn = document.getElementById("Play");
const video = document.getElementById("myVideo");
const videoContainer = document.getElementById("videoContainer");
const overlay = document.getElementById("fadeOverlay");
const mainContent = document.querySelector("section");
const backBtn = document.getElementById("Back");
const moreBtn = document.getElementById("More");
const showDetails = document.getElementById("details");
let closeDetails = document.getElementById("closeDtl");
const player = new Plyr("#myVideo", {
  controls: [
    "play-large",
    "play",
    "progress",
    "current-time",
    "mute",
    "volume",
    "fullscreen",
  ],
  hideControls: true,
});

playBtn.addEventListener("click", () => {
  if (window.innerWidth < 768) {
    videoContainer.classList.add("force-landscape");
    alert("Tolong matikan kunci orientasi untuk tampilan penuh");
  } else {
    videoContainer.classList.remove("force-landscape");
  }

  overlay.classList.replace("opacity-0", "opacity-100");
  setTimeout(() => {
    mainContent.style.display = "none";
    videoContainer.classList.remove("hidden");
    player.play();
    overlay.classList.replace("opacity-100", "opacity-0");
  }, 1000);
});

// Rely strictly on custom CSS rotation on mobile to avoid native OS Fullscreen blocks.

backBtn.addEventListener("click", () => {
  player.pause();
  player.restart();
  video.currentTime = 0;
  if (player.fullscreen.enabled && player.fullscreen.active) {
    player.fullscreen.exit();
  }
  videoContainer.classList.add("hidden");
  videoContainer.classList.remove("force-landscape");
  mainContent.style.display = "block";
});

moreBtn.addEventListener("click", () => {
  showDetails.classList.remove("hidden");
});
closeDetails.addEventListener("click", () => {
  showDetails.classList.add("hidden");
});
