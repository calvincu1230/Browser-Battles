import "./styles/index.css";
import Computer from "./js/computer";
import Player from "./js/player";
// import gameInput from "./js/game_input";
import Game from "./js/game";
// import Menu from "./js/menu";
// import { menuInput } from "./js/menu_input";
// import GameInput from "./js/game_input";

const canvas = document.getElementById("game-board"); 
const ctx = canvas.getContext("2d");
const GAME_HEIGHT = 480;
const GAME_WIDTH = 840;
// const player = new Player(100, 20, "Chrome", GAME_HEIGHT, GAME_WIDTH);
// const computer = new Computer(100, 20, "Firefox", GAME_HEIGHT, GAME_WIDTH);
// const menu = new Menu(GAME_WIDTH, GAME_HEIGHT);

// menu.draw(ctx);

// add keydown eventListener to class "intro-menu"
let game;
let player;
let computer;

const menu = document.getElementById("menu");
const menuListen = e => {
  if (e.keyCode === 32) {
    ctx.clearRect(0, 0, 840, 480);
    menu.classList.add("close-menu");
    window.removeEventListener("keypress", menuListen)
    window.addEventListener("keydown", gameInput)
    player = new Player(100, 20, "Chrome", GAME_HEIGHT, GAME_WIDTH);
    computer = new Computer(100, 20, "Firefox", GAME_HEIGHT, GAME_WIDTH);
    game = new Game(player, computer);
    gameLoop();
  }
};

const gameOver = document.getElementById("game-over");
const overListen = e => {
  if (e.keyCode === 32) {
    ctx.clearRect(0, 0, 840, 480);
    // statusText.draw();
    gameOver.classList.add("close-menu");
    window.removeEventListener("keypress", overListen)
    window.addEventListener("keydown", gameInput)
    player = new Player(100, 20, "Chrome", GAME_HEIGHT, GAME_WIDTH);
    computer = new Computer(100, 20, "Firefox", GAME_HEIGHT, GAME_WIDTH);
    game = new Game(player, computer);
    gameLoop();
  }
};
window.addEventListener("keypress", menuListen);


// refactor eventually to add player based on key in puts on later screen
const gameInput = (e) => {
  if (game.currentPlayer === player) {
    switch (e.keyCode) {
      // case 37: // 37 is left arrow key
      //   break;
      // case 38: // 38 is up arrow key
      //   break;
      // case 39: // 39 is right arrow key        
      //   break;
      // case 40: // 40 is down arrow key        
      //   break;
      // case 13: // 13 is enter key
      //   break;
      case 65: // 65 is the a key
      // if muted then unmute, otherwise mute
        debugger
        game.player.attack(game.computer);
      // console.log("I should be attacking")
        game.currentPlayer = game.computer;
      break;
      case 83: // 83 is s key
        game.player.heal();
        game.currentPlayer = game.computer;
      break;
      case 81: // 81 is q key
      // if muted then unmute, otherwise mute
      // maybe set game to null and send to menu? or an are you sure pause? w/ y / n listeners
      break;
    }
  } else return;
};

// if (game.currentPlayer === game.player) {
  // not really sure what the plan was here
  // }
  // if (game) {
    //   new GameInput(game);
    // }
// let prevTime = 0;
// let count = 0;
function gameLoop(timestamp) {
  // count++;
  // if (count === 24) {
    // let dt = timestamp - prevTime;
    // prevTime = timestamp;

    ctx.clearRect(0, 0, 840, 480);
    // statusText();
    if (game.currentPlayer === game.computer) {
      game.computer.playTurn(game.player);
      game.currentPlayer = game.player;
    }
    game.player.draw(ctx);
    // debugger
    game.computer.draw(ctx);
    // debugger
    game.playHealth.draw(ctx);

    game.compHealth.draw(ctx);

    // battleOptions();
    // new GameInput(game);
  
    if (game.gameOver()) {
      game.winner();
      game = null;
    }
    // counat = 0;
  // }
  debugger
  if (game) {
    requestAnimationFrame(gameLoop);
  } else {
    cancelAnimationFrame(gameLoop);
    window.removeEventListener("keydown", gameInput);
    // ctx.clearRect(0, 0, 840, 480);
    game = null;
    gameOver.classList.remove("close-menu");
    window.addEventListener("keypress", overListen);
  }
}

// menuInput(GAME_HEIGHT, GAME_WIDTH, ctx); // used to test which keys were what codes
// going to need this to only be called once maybe draw in initial game loop
// player.draw(ctx); // just to draw chrome logo for now but it is offscreen
// computer.draw(ctx)