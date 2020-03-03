import "./styles/index.css";
import Player from "./player";
import Input from "./input";

const boardCanvas = document.getElementById("game-board");
const boardCtx = boardCanvas.getContext("2d");
const playerCanvas = document.getElementById("player");
const playerCtx = playerCanvas.getContext("2d");
const opponentCanvas = document.getElementById("computer");
const opponentCtx = opponentCanvas.getContext("2d");
// const currentTurn = 
const GAME_HEIGHT = 480;
const GAME_WIDTH = 840;
const player = new Player(100, 20, "Chrome", GAME_HEIGHT, GAME_WIDTH);
// const opponent = new Opponent(100, 20, "Internet Explorer", GAME_HEIGHT, GAME_WIDTH);


// window.addEventListener("DOMContentLoaded", () => {
  //   // window.chrome = 
  
  // });

new Input();
player.draw(playerCtx);
  
function gameLoop(timestamp) {
  let dt = timestamp - lastTime;
  lastTime = timestamp;
  ctx.clearRect(0, 0, 840, 480)

  requestAnimationFrame(gameLoop);
}