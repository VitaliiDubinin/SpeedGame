const circles = document.querySelectorAll(".circle");
const startButton = document.querySelector("#start");
const endButton = document.querySelector("#stop");

const clickedCircle = () => {
  console.log("circle was clicked");
};

circles.forEach((circle, i) => {
  circle.addEventListener("click", () => clickedCircle(i));
});

const overlay = document.querySelector("#overlay");

const closeButton = document.querySelector("#close");

const startGame = () => {
  console.log("game started");
};

const endGame = () => {
  console.log("game ended");
  overlay.style.visibility = "visible";
};

const reloadGame = () => {
  window.location.reload();
};

startButton.addEventListener("click", startGame);
endButton.addEventListener("click", endGame);
closeButton.addEventListener("click", reloadGame);
