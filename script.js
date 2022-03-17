const circles = document.querySelectorAll(".circle");
const startButton = document.querySelector("#start");
const endButton = document.querySelector("#stop");
const overlay = document.querySelector("#overlay");
const closeButton = document.querySelector("#close");
const scoreText = document.querySelector("#score");
const resultText = document.querySelector("#result");

let active = 0;
let score = 0;
let timer;
let pace = 1000;
let rounds = 0;

const clickedCircle = (i) => {
  console.log("clicked circle was: ", i);
  if (i !== active) {
    endGame();
  } else {
    score++;
    rounds--;
    scoreText.textContent = score;
  }
};

circles.forEach((circle, i) => {
  circle.addEventListener("click", () => clickedCircle(i));
});

function getRndInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const startGame = () => {
  for (let i = 0; i < circles.length; i++) {
    circles[i].style.pointerEvents = "auto";
  }
  startButton.style.display = "none";
  endButton.style.display = "inline";
  console.log("game started");
  let nextActive = pickNew(active);
  circles[nextActive].classList.toggle("active");
  circles[active].classList.remove("active");
  active = nextActive;
  console.log("active circle:", active);

  timer = setTimeout(startGame, pace);
  pace = pace - 10;

  if (rounds >= 3) {
    endGame();
  }
  rounds++;
  function pickNew(active) {
    let nextActive = getRndInt(0, 3);

    if (nextActive != active) {
      return nextActive;
    } else {
      return pickNew(active);
    }
  }
};

const endGame = () => {
  console.log("game ended");
  clearTimeout(timer);
  overlay.style.visibility = "visible";
  resultText.textContent = `Your collect ${score} points`;
};

const reloadGame = () => {
  window.location.reload();
};

startButton.addEventListener("click", startGame);
endButton.addEventListener("click", endGame);
closeButton.addEventListener("click", reloadGame);
