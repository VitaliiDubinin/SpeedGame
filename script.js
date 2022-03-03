const circles = document.querySelectorAll(".circle");
const startButton = document.querySelector("#start");
const endButton = document.querySelector("#stop");
const overlay = document.querySelector("#overlay");
const closeButton = document.querySelector("#close");
let active = 0;

const clickedCircle = (i) => {
  i += 1;
  console.log("clicked circle was: ", i);
};

circles.forEach((circle, i) => {
  circle.addEventListener("click", () => clickedCircle(i));
});

function getRndInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const startGame = () => {
  console.log("game started");
  let nextActive = pickNew(active);
  circles[nextActive].classList.toggle("active");
  circles[active].classList.remove("active");
  active = nextActive;
  console.log("active circle:", active);
  score += 1;
  timer = setTimeout(startGame, 1000);

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
  overlay.style.visibility = "visible";
};

const reloadGame = () => {
  window.location.reload();
};

startButton.addEventListener("click", startGame);
endButton.addEventListener("click", endGame);
closeButton.addEventListener("click", reloadGame);
