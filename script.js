const playBtn = document.getElementById("Play");
const video = document.getElementById("myVideo");
const overlay = document.getElementById("fadeOverlay");
const mainContent = document.querySelector("section");
const backBtn = document.getElementById("Back");
const moreBtn = document.getElementById("More");
const showDetails = document.getElementById("details");
let closeDetails = document.getElementById("closeDtl");
playBtn.addEventListener("click", () => {
  overlay.classList.replace("opacity-0", "opacity-100");
  setTimeout(() => {
    mainContent.style.display = "none";
    video.classList.remove("hidden");
    backBtn.classList.remove("hidden");
    video.play();
    overlay.classList.replace("opacity-100", "opacity-0");
  }, 1000);
});

backBtn.addEventListener("click", () => {
  video.pause();
  video.currentTime = 0;
  video.classList.add("hidden");
  backBtn.classList.add("hidden");
  mainContent.style.display = "block";
});

moreBtn.addEventListener("click", () => {
  showDetails.classList.remove("hidden");
});
closeDetails.addEventListener("click", () => {
  showDetails.classList.add("hidden");
});
