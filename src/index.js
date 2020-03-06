import "./styles/index.css";
import Computer from "./js/computer";
import Player from "./js/player";
import Game from "./js/game";

const canvas = document.getElementById("game-board"); 
const ctx = canvas.getContext("2d");
const GAME_HEIGHT = 480;
const GAME_WIDTH = 840;


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

const gameInput = (e) => {
  if (game.currentPlayer === game.player && game.activeAttack === false) {
    let selected = game.battleOptions.selected;
    switch (e.keyCode) {
      case 37: // 37 is left arrow key
        e.preventDefault();
        selected -= 1;
        if (selected < 0) { // change selected to allow player to choose move with keys
          game.battleOptions.selected = game.battleOptions.options.length - 1;
        } else {
          game.battleOptions.selected = selected;
        }
        break;
      case 39: // 39 is right arrow key
        e.preventDefault();
        selected++;
        if (selected > game.battleOptions.options.length - 1) {
          game.battleOptions.selected = 0;
        } else {
          game.battleOptions.selected = selected;
        }
        break;
      case 13: // 13 is enter key
        e.preventDefault();
        // game.activeAttack = true;
        game.changeTurn();
        const action = game.battleOptions.options[selected];
        action(game.player, game.computer);
        break;
      // case 65: // 65 is the a key
      //   debugger
      //   game.changeTurn();
      //   game.player.attack(game.computer); // will evenutally call function that is currently selected in the battleText()
      //   break;
      // case 83: // 83 is s key
      //   game.changeTurn();
      //   game.player.heal();
      //   break;
      case 81: // 81 is q key
        e.preventDefault();
      // maybe set game to null and send to menu? or an are you sure pause? w/ y / n listeners
        console.log("Button not implemented yet!");
        break;
    }
  } else return;
};

let prevTime = 0;

function gameLoop(timestamp) {
  let dt = timestamp - prevTime;
  prevTime = timestamp;

  ctx.clearRect(0, 0, 840, 480);
  if (game.currentPlayer === game.computer) {
    game.computer.playTurn(game.player);
    game.currentPlayer = game.player;
  }
  // game.player.update(dt);
  game.player.draw(ctx);
  // debugger
  // game.computer.update(dt);
  game.computer.draw(ctx);
  // debugger
  game.playHealth.update(dt);
  game.playHealth.draw(ctx);

  game.compHealth.update(dt);
  game.compHealth.draw(ctx);

  // something along these lines
  // if (game.currentPlayer.attacking) {
  //   game.currentPlayer.statusText.draw(ctx);
  // } else {
    game.battleOptions.draw(ctx);
  // }
  // new GameInput(game);

  if (game.gameOver()) {
    game.winner();
    game = null;
  }
  // debugger
  if (game) {
    requestAnimationFrame(gameLoop);
  } else {
    cancelAnimationFrame(gameLoop);
    window.removeEventListener("keydown", gameInput);
    // ctx.clearRect(0, 0, 840, 480);
    // game = null;
    gameOver.classList.remove("close-menu");
    window.addEventListener("keypress", overListen);
  }
}