import "./styles/index.css";
import Computer from "./js/computer";
import Player from "./js/player";
import gameInput from "./js/game_input";
import Game from "./js/game";
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

let prevTime = 0

const player = new Player(100, 20, "Chrome", GAME_HEIGHT, GAME_WIDTH);
const computer = new Computer(100, 20, "Internet_Explorer", GAME_HEIGHT, GAME_WIDTH);
// refactor eventually to add player based on key in puts on later screen
const game = new Game(player, computer);

export function gameLoop(timestamp) {
  let dt = timestamp - prevTime;
  prevTime = timestamp;
  // things that need to be updated and redrawn
  ctx.clearRect(0, 0, 840, 480);
  game.player.draw(ctx);
  game.computer.draw(ctx);
  game.playHealth.draw(ctx);
  game.compHealth.draw(ctx);
  // statusText();
  if (game.currentPlayer === game.computer) {
    game.computer.playTurn(game.player);
  }
  // battleOptions();
  // new GameInput(game);
  // if (game.gameState === false) {

  // } else {
    // requestAnimationFrame(gameLoop);
  // }
}

menuInput(GAME_HEIGHT, GAME_WIDTH, ctx); // used to test which keys were what codes
// going to need this to only be called once maybe draw in initial game loop
// player.draw(ctx); // just to draw chrome logo for now but it is offscreen
// computer.draw(ctx)


// I'm slowly building the logic to my game and checking that things render, when I put in requestAnimationFrame(gameLoop); my pictures stop showing up.  I don't have constant updates, being a turn based game but I want to start implementing the attacks into the canvas