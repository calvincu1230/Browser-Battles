import "./styles/index.css";
import Computer from "./js/computer";
import Player from "./js/player";
import Input from "./js/input";
import Menu from "./js/menu";
import { menuInput } from "./js/menu_input";

const canvas = document.getElementById("game-board"); // changed to one after talking to oliver
const ctx = canvas.getContext("2d");
const GAME_HEIGHT = 480;
const GAME_WIDTH = 840;
// const player = new Player(100, 20, "Chrome", GAME_HEIGHT, GAME_WIDTH);
// const computer = new Computer(100, 20, "Firefox", GAME_HEIGHT, GAME_WIDTH);
const menu = new Menu(GAME_WIDTH, GAME_HEIGHT);

menu.draw(ctx);

menuInput(GAME_HEIGHT, GAME_WIDTH,ctx); // used to test which keys were what codes
// going to need this to only be called once maybe draw in initial game loop
// player.draw(ctx); // just to draw chrome logo for now but it is offscreen
// computer.draw(ctx)


// function gameLoop(timestamp) {
//   let dt = timestamp - lastTime;
//   lastTime = timestamp;
//   ctx.clearRect(0, 0, 840, 480)

//   requestAnimationFrame(gameLoop);
// }