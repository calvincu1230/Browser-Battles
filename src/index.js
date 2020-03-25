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
      window.removeEventListener("keypress", menuListen)
      window.addEventListener("keydown", gameInput)
      player = new Player(100, 20, "Chrome", GAME_HEIGHT, GAME_WIDTH);
      computer = new Computer(100, 20, "Firefox", GAME_HEIGHT, GAME_WIDTH);
      game = new Game(player, computer);
      gameLoop();
    }
  };
  window.addEventListener("keypress", menuListen);
  
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

  // const selectMenu = document.getElementById("select-menu");
  // const selectBrowser = e => {
  //   if (e.keyCode === 32) {
  //     ctx.clearRect(0, 0, 840, 480);
  //     // statusText.draw();
  //     selectMenu.classList.add("close-menu");
  //     window.removeEventListener("keypress", selectBrowser)
  //     window.addEventListener("keydown", gameInput)
  //     player = new Player(100, 20, "Chrome", GAME_HEIGHT, GAME_WIDTH);
  //     computer = new Computer(100, 20, "Firefox", GAME_HEIGHT, GAME_WIDTH);
  //     game = new Game(player, computer);
  //     gameLoop();
  //   }
  // };
  
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
            action();
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

    if (!game.computer.attacking && !game.player.attacking) game.activeAttack = false;
    if (game.currentPlayer === game.computer && !game.activeAttack) {
      game.activeAttack = true;
      game.computer.playTurn(game.player);
      game.currentPlayer = game.player;
      // set timeout flag for player turns
    }
    if (game.currentPlayer === game.player && game.activeAttack) {
      if (!game.computer.statusText) game.battleOptions.draw(ctx);
      else {
        game.computer.statusText.update(ctx);
        game.computer.statusText.draw(ctx);
      }
    } else if (game.currentPlayer === game.computer && game.activeAttack) {
      if (!game.computer.statusText) game.battleOptions.draw(ctx);
      else {
        game.player.statusText.update(ctx);
        game.player.statusText.draw(ctx);
      }
    } else {
      game.battleOptions.draw(ctx);
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
      // game just abruptly ends, needs fixing
      // maybe game over
      setTimeout(() => game.winner(), 2000);
    }

    if (game.gameState) {
      requestAnimationFrame(gameLoop);
    } else {
      cancelAnimationFrame(gameLoop);
      window.removeEventListener("keydown", gameInput);
      gameOver.classList.remove("close-menu");
      window.addEventListener("keypress", overListen);
    }
  }
});