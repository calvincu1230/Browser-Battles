import "./styles/index.css";
import Computer from "./js/computer";
import Player from "./js/player";
import Game from "./js/game";

const players = [ // customize AP Health and texts later
  {
    health: 100,
    attackPower: 20,
    name: "Chrome",
    attackText: "Chrome used ",
    healText: " used consume RAM and healed for "
  },
  {
    health: 100,
    attackPower: 20,
    name: "Firefox",
    attackText: "",
    healText: ""
  },
  {
    health: 100,
    attackPower: 0,
    name: "Internet Explorer",
    attackText: " used Obsolete, it's pretty useless and did ",
    healText: ""
  },
  {
    health: 100,
    attackPower: 20,
    name: "Safari",
    attackText: "",
    healText: ""
  }
]

document.addEventListener("DOMContentLoaded", () => {
  const GAME_HEIGHT = 480;
  const GAME_WIDTH = 840;
  const canvas = document.getElementById("game-board"); 
  const ctx = canvas.getContext("2d");
  
  let game;
  let player;
  let computer;
  
  const menu = document.getElementById("menu");
  const menuListen = e => {
    if (e.keyCode === 32) {
      ctx.clearRect(0, 0, 840, 480);
      menu.classList.add("close-menu");
      window.removeEventListener("keydown", menuListen);
      window.addEventListener("keydown", gameInput);
      player = new Player(100, 20, "Chrome", GAME_HEIGHT, GAME_WIDTH); // temporary auto choice until the player decides their browser
      computer = new Computer(100, 20, "Firefox", GAME_HEIGHT, GAME_WIDTH);
      game = new Game(player, computer);
      gameLoop();
    }
  };
  window.addEventListener("keydown", menuListen);
  
  const gameOver = document.getElementById("game-over");
  const overListen = e => {
    if (e.keyCode === 32) { // will redirect to main menu after space bar
      // ctx.clearRect(0, 0, 840, 480);
      // statusText.draw();
      gameOver.classList.add("close-menu");
      window.removeEventListener("keydown", overListen);
      window.addEventListener("keydown", gameInput);
      player = new Player(100, 20, "Chrome", GAME_HEIGHT, GAME_WIDTH);
      computer = new Computer(100, 20, "Firefox", GAME_HEIGHT, GAME_WIDTH);
      game = new Game(player, computer);
      gameLoop();
    }
  };

  const youSure = document.getElementById("you-sure");
  const youSureListen = e => {
    // debugger
    if (e.keyCode === 121 || e.keyCode === 89) { // if they press y or Y
      // end the game
      youSure.classList.add("close-menu");
      menu.classList.remove("close-menu");
      window.removeEventListener("keydown", youSureListen);
      window.addEventListener("keydown", menuListen);
      game = null;
    }
    if (e.keyCode === 110 || e.keyCode === 78) { // if they press n or N
      // remove event listener and turn game listener back on
      youSure.classList.add("close-menu");
      window.removeEventListener("keydown", youSureListen);
      window.addEventListener("keydown", gameInput);
    }
  }
  
  const gameInput = (e) => {
    if (game.player.inPosition && game.computer.inPosition) {
      game.start = true;
    }
    if (game.currentPlayer === game.player && game.activeAttack === false && game.start === true) {
      let selected = game.battleOptions.selected;
      switch (e.keyCode) {
        case 37: // 37 is left arrow key
        e.preventDefault();
        selected -= 1;
        if (selected < 0) { // change selected to allow player to choose move with keys
          selected = game.battleOptions.options.length - 1;
        }
        game.battleOptions.selected = selected;
        break;
        case 39: // 39 is right arrow key
        e.preventDefault();
        selected++;
        if (selected > game.battleOptions.options.length - 1) {
          selected = 0;
        }
        game.battleOptions.selected = selected;
        break;
        case 13: // 13 is enter key
          e.preventDefault();
          const action = game.battleOptions.options[selected];
          if (selected === game.battleOptions.options.length - 1) {

            // temporary, will add a confirm (y/n) overlay in case of accidental click
            youSure.classList.remove("close-menu");
            window.removeEventListener("keydown", gameInput);
            window.addEventListener("keydown", youSureListen);
              
            // do this below action and return when quiting so turn doesnt change and make computer go
            return;
          }
          game.activeAttack = true;
          // ^^ will only flag if its an attack and not quit
          game.changeTurn();
          action(game.player, game.computer);
          // will either attack or heal based on player choice
          break;
      }
    } else return;
  };
  
  let prevTime = 0;
  
  function gameLoop(timestamp) {
    let dt = timestamp - prevTime;
    prevTime = timestamp;
  
    ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
    ctx.beginPath();

    if (!game.computer.attacking && !game.player.attacking && game.gameState) game.activeAttack = false;
    if (game.currentPlayer === game.computer && !game.activeAttack) {
      game.activeAttack = true;
      game.computer.playTurn(game.player);
      game.currentPlayer = game.player;
      // set timeout flag for player turns
    }
    if (game.winner()) {
      game.winnerText.update();
      game.winnerText.draw(ctx);
    } else {
      if (game.currentPlayer === game.player && game.activeAttack) {
        if (!game.computer.statusText) game.battleOptions.draw(ctx);
        else { // due to change turn mechanics, correct status will not be on the current player
          game.computer.statusText.update();
          game.computer.statusText.draw(ctx);
        }
      } else if (game.currentPlayer === game.computer && game.activeAttack) {
        // if (!game.computer.statusText) game.battleOptions.draw(ctx);
        // else { // due to change turn mechanics, correct status will not be on the current player
          game.player.statusText.update();
          game.player.statusText.draw(ctx);
        // }
      } else { // if there is no active attack, draw options for human player
        game.battleOptions.draw(ctx);
      }
    }

    game.player.update(dt);
    game.player.draw(ctx, dt);

    game.computer.update(dt);
    game.computer.draw(ctx, dt);

    game.playHealth.update(dt);
    game.playHealth.draw(ctx);
  
    game.compHealth.update(dt);
    game.compHealth.draw(ctx);
  
    // logic may need tweaking, due to initial null & timeouts
  
    if (game.gameOver() && !game.activeAttack) {
      game.activeAttack = true;
    }

    if (game.gameState) {
      requestAnimationFrame(gameLoop);
    } else {
      cancelAnimationFrame(gameLoop);
      setTimeout(() => {
        // puts new overlay on the game if over to prompt play again
        window.removeEventListener("keydown", gameInput); // removes gameplay listeners
        gameOver.classList.remove("close-menu"); // displays overlay
        window.addEventListener("keydown", overListen); // adds restart game listener
      }, 1750);
    }
  }
});