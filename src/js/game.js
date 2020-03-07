import HealthBar from "./health_bar";
import BattleOptions from "./battle_options";


export default class Game {
  constructor(player, computer) {
    this.player = player;
    this.computer = computer;
    this.gameState = true;
    this.activeAttack = false;
    this.playHealth = new HealthBar(this.player);
    this.compHealth = new HealthBar(this.computer);
    this.battleOptions = new BattleOptions(this.player.gameHeight, this.player.gameWidth);
    this.currentPlayer = this.player;
    this.players = { // customize AP Health and texts later
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
    this.changeTurn = this.changeTurn.bind(this);
  }
  // i believe this can be done in event listener
  // attackRequest(player, attack) {
  //   if (this.currentPlayer === player) {

  //   }
  // }

  pause() {
    this.gameState = false;
  }

  changeTurn() {
    // not sure how turn change will be handle yet
    if (this.currentPlayer === this.player) {
      this.currentPlayer = this.computer;
      // this.attacking = false;
    } else {
      this.currentPlayer = this.player;
      // this.attacking = false;
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