import "./styles/index.css";
import Computer from "./js/computer";
import Player from "./js/player";
import Game from "./js/game";
import GameOptions from "./js/game_options";

const players = [ // customize AP Health and texts later
  {
    health: 100,
    attackPower: 20,
    name: "Chrome",
    attackText: "threw rocks at", // maybe throws ads 
    healText: "used consume RAM," // maybe image is actual RAM
  },
  {
    health: 110,
    attackPower: 15,
    name: "Firefox",
    attackText: "threw rocks at",
    healText: "used a band-aid,"
  },
  {
    health: 150,
    attackPower: 5,
    name: "Internet Explorer",
    attackText: "used Obsolete, it's pretty useless and hit",
    healText: "used something, it just wont go away and heals for"
  },
  {
    health: 100,
    attackPower: 15,
    name: "Safari",
    attackText: "threw rocks at", // apple money? icloud?
    healText: "used a band-aid," // used apple support and use dollar signs instead
  }
]

// const players = [ // customize AP Health and texts later
//   {
//     health: 100,
//     attackPower: 20,
//     name: "Chrome",
//     attackText: "threw rocks at", // maybe throws ads 
//     healText: "used consume RAM," // maybe image is actual RAM
//   },
//   {
//     health: 100,
//     attackPower: 20,
//     name: "Firefox",
//     attackText: "threw rocks at",
//     healText: "used a band-aid,"
//   }
// ]

document.addEventListener("DOMContentLoaded", () => {
  const GAME_HEIGHT = 480;
  const GAME_WIDTH = 840;
  const canvas = document.getElementById("game-board"); 
  const ctx = canvas.getContext("2d");
  
  let game;
  let player;
  let computer;
  let selectedPlayer;
  let selectedComputer;
  let gameStartOptions = new GameOptions(players, GAME_WIDTH, GAME_HEIGHT);
  
  const menu = document.getElementById("menu");
  const menuListen = e => {
    if (e.keyCode === 32) {
      e.preventDefault();
      ctx.clearRect(0, 0, 840, 480);
      // player = new Player(selectedComputer, GAME_HEIGHT, GAME_WIDTH); // temporary auto choice until the player decides their browser
      // computer = new Computer(selectedPlayer, GAME_HEIGHT, GAME_WIDTH);
      // game = new Game(player, computer);
      menu.classList.add("close-menu");
      window.removeEventListener("keydown", menuListen);
      window.addEventListener("keydown", choosePlayer);
      // game = null; // THIS IS FOR TESTING ONLY CHANGE AFTER
      gameLoop();
    }
  };

  window.addEventListener("keydown", menuListen);
  
  const gameOver = document.getElementById("game-over");
  const overListen = e => {
    if (e.keyCode === 32) { // will redirect to main menu after space bar
      e.preventDefault();
      gameOver.classList.add("close-menu");
      window.removeEventListener("keydown", overListen);
      window.addEventListener("keydown", menuListen);
      // player = new Player(players[0], GAME_HEIGHT, GAME_WIDTH); // temporary auto choice until the player decides their browser
      // computer = new Computer(players[1], GAME_HEIGHT, GAME_WIDTH);
      // game = new Game(player, computer);
      game = null;
      // gameLoop();
    }
  };
  
  const youSure = document.getElementById("you-sure");
  const youSureListen = e => {
    if (e.keyCode === 121 || e.keyCode === 89) { // if they press y or Y
      e.preventDefault();
      // end the game
      ctx.clearRect(0, 0, 840, 480);
      youSure.classList.add("close-menu");
      menu.classList.remove("close-menu");
      player = null;
      computer = null;
      game = null;
      window.removeEventListener("keydown", youSureListen);
      window.addEventListener("keydown", menuListen);
    }
    if (e.keyCode === 110 || e.keyCode === 78) { // if they press n or N
      // remove event listener and turn game listener back on
      e.preventDefault();
      youSure.classList.add("close-menu");
      window.removeEventListener("keydown", youSureListen);
      window.addEventListener("keydown", gameInput); // ADD OPTIONS
      requestAnimationFrame(gameLoop);
    }
  }

  const gameInput = (e) => {
    if (!game) return;
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
            cancelAnimationFrame(requestId);
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
  
  const choosePlayer = (e) => { // changing logic to work with just given options
    // if (!game) return;
    // if (game.currentPlayer === game.player && game.activeAttack === false && game.start === true) {
    let selected = gameStartOptions.selected;
    switch (e.keyCode) {
      case 37: // 37 is left arrow key
        e.preventDefault();
        selected -= 1;
        if (selected < 0) { // change selected to allow player to choose move with keys
          selected = gameStartOptions.length - 1;
        }
        gameStartOptions.selected = selected;
        break;

      case 39: // 39 is right arrow key
        e.preventDefault();
        selected++;
        if (selected > gameStartOptions.length - 1) {
          selected = 0;
        }
        gameStartOptions.selected = selected;
        break;

      case 13: // 13 is enter key
        e.preventDefault();
        const choice = gameStartOptions.options[selected];
        const random = Math.round(Math.random() * (gameStartOptions.length - 1)); // chooses a random browser for computer
        const randComp = gameStartOptions.options[random];
        selectedPlayer = new Player(choice, GAME_HEIGHT, GAME_WIDTH);
        selectedComputer = new Computer(randComp, GAME_HEIGHT, GAME_WIDTH);
        game = new Game(selectedPlayer, selectedComputer);
        window.removeEventListener("keydown", choosePlayer);
        window.addEventListener("keydown", gameInput);
        break;
    }
  }
  
  let prevTime = 0;
  let requestId;

  function gameLoop(timestamp) {
    let dt = timestamp - prevTime;
    prevTime = timestamp;
  
    ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
    ctx.beginPath();

    if (!game) {
      gameStartOptions.draw(ctx);
      requestId = requestAnimationFrame(gameLoop);
    } else { 
      // drawings will always render/update until game is ended
      game.player.update(dt);
      game.player.draw(ctx, dt);

      game.computer.update(dt);
      game.computer.draw(ctx, dt);

      game.playHealth.update(dt);
      game.playHealth.draw(ctx);
    
      game.compHealth.update(dt);
      game.compHealth.draw(ctx);

      if (game.player.inPosition && game.computer.inPosition) {
        game.gameState = true;
      } else requestId = requestAnimationFrame(gameLoop);

      if (game.gameState) {
        if (!game.computer.attacking && !game.player.attacking) game.activeAttack = false;
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
            else {
              game.computer.statusText.update() ;
              game.computer.statusText.draw(ctx);
            }
          } else if (game.currentPlayer === game.computer && game.activeAttack) {
            // if (!game.computer.statusText) game.battleOptions.draw(ctx);
            // else {
              game.player.statusText.update();
              game.player.statusText.draw(ctx);
            // }
          } else { // if there is no active attack, draw options for human player
            game.battleOptions.draw(ctx);
          }
        }
        
        if (game.gameOver() && !game.activeAttack) {
          game.activeAttack = true;
        }
        
        if (game.gameState) {
          requestId = requestAnimationFrame(gameLoop);
        } else {
          cancelAnimationFrame(requestId);
          setTimeout(() => {
            // puts new overlay on the game if over to prompt play again
            window.removeEventListener("keydown", gameInput); // removes gameplay listeners
            gameOver.classList.remove("close-menu"); // displays overlay
            window.addEventListener("keydown", overListen); // adds restart game listener
          }, 2000);
        }
      }
    }
  }
});