import HealthBar from "./health_bar";
// import Player from "./player";
// import Computer from "./computer";
// import GameInput from "./game_input";

export default class Game {
  constructor(player, computer) {
    this.player = player;
    this.computer = computer;
    this.gameState = true;
    this.playHealth = new HealthBar(this.player);
    this.compHealth = new HealthBar(this.computer);
    this.currentPlayer = this.player;
    this. attacking = false; // only true during attack animation
    this.players = { // customize AP Health and texts later
      chrome: {
        health: 100,
        attackPower: 20,
        name: "Chrome",
        attackText: "",
        healText: ""
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
        attackPower: 20,
        name: "Internet Explorer",
        attackText: "",
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
    this.changeTurn = this.changeTurn.bind(this);
  }

  attackRequest(player, attack) {
    if (this.currentPlayer === player) {

    }
  }

  pause() {
    this.gameState = false;
  }

  changeTurn() {
    // not sure how turn change will be handle yet
    if (this.currentPlayer === this.player) {
      this.currentPlayer = this.computer;
    } else {
      this.currentPlayer = this.player;
    }
  }

  winner() {
    if (this.player.health <= 0) {
      console.log(`${this.computer.name} wins!`);
      // this.reset();
    }

    if (this.computer.health <= 0) {
      console.log(`${this.player.name} wins!`);
      // this.reset();
    }
  }

  gameOver() {
    if (this.player.health <= 0 || this.computer.health <= 0) {
      this.gameState = false;
      return true;
    }
    return false;
  }

}

// const canvas = document.getElementById("game-board"); // changed to one after talking to oliver
// const ctx = canvas.getContext("2d");
// const GAME_HEIGHT = 480;
// const GAME_WIDTH = 840;