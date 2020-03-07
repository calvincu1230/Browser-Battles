import "./styles/index.css";
import Computer from "./js/computer";
import Player from "./js/player";
import Game from "./js/game";

const players = { // customize AP Health and texts later
  chrome: {
    health: 100,
    attackPower: 20,
    name: "Chrome",
    attackText: "Chrome used ",
    healText: "Chrome used consume RAM and healed for "
  },
  firefox: {
    health: 100,
    attackPower: 20,
    name: "Firefox",
    attackText: "",
    healText: ""
  },
  ie: {
    health: 100,
    attackPower: 0,
    name: "Internet Explorer",
    attackText: "Used Obsolete, it's pretty useless and did ",
    healText: ""
  },
  safari: {
    health: 100,
    attackPower: 20,
    name: "Safari",
    attackText: "",
    healText: ""
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("game-board"); 
  const ctx = canvas.getContext("2d");
  const GAME_HEIGHT = 480;
  const GAME_WIDTH = 840;
  
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
      debugger
      game.start = true;
    }
    if (game.currentPlayer === game.player && game.activeAttack === false && game.start === true) {
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
          const action = game.battleOptions.options[selected];
          if (selected === game.battleOptions.options.length - 1) {
            action();
            return;
            // do this below action and return when quiting so turn doesnt change and make computer go
          }
          game.changeTurn();
          action(game.player, game.computer);
          break;
      }
    } else return;
  };
  
  let prevTime = 0;
  
  function gameLoop(timestamp) {
    let dt = timestamp - prevTime;
    prevTime = timestamp;
  
    ctx.clearRect(0, 0, 840, 480);
    if (game.currentPlayer === game.computer && game.activeAttack === false) {
      game.computer.playTurn(game.player);
      game.currentPlayer = game.player;
    }
    game.player.update(dt);
    game.player.draw(ctx);
    // debugger
    game.computer.update(dt);
    game.computer.draw(ctx);
    // debugger
    game.playHealth.update(dt);
    game.playHealth.draw(ctx);
  
    game.compHealth.update(dt);
    game.compHealth.draw(ctx);
  
    // something along these lines
    // if (game.currentPlayer.attacking) {
      // game.currentPlayer.statusText.draw(ctx);
    // } else {
      game.battleOptions.draw(ctx);
    // }
  
    if (game.gameOver()) {
      game.winner();
    }
    // debugger
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