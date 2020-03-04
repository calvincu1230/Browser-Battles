import "./styles/index.css";
import Computer from "./js/computer";
import Player from "./js/player";
import Input from "./js/input";
import Menu from "./js/menu";

const canvas = document.getElementById("game-board"); // changed to one after talking to oliver
const ctx = canvas.getContext("2d");
// const playerCanvas = document.getElementById("player");
// const playerCtx = playerCanvas.getContext("2d");
// const opponentCanvas = document.getElementById("computer"); 
// const opponentCtx = opponentCanvas.getContext("2d");
// const currentTurn =  // keep track of which player is going 
const GAME_HEIGHT = 480;
const GAME_WIDTH = 840;
const player = new Player(100, 20, "Chrome", GAME_HEIGHT, GAME_WIDTH);
const computer = new Computer(100, 20, "Internet_Explorer", GAME_HEIGHT, GAME_WIDTH);
const menu = new Menu(GAME_WIDTH, GAME_HEIGHT);

menu.draw(ctx)

new Input(); // used to test which keys were what codes
// player.draw(ctx); // just to draw chrome logo for now but it is offscreen
// computer.draw(ctx)


// function gameLoop(timestamp) {
//   let dt = timestamp - lastTime;
//   lastTime = timestamp;
//   ctx.clearRect(0, 0, 840, 480)

//   requestAnimationFrame(gameLoop);
// }