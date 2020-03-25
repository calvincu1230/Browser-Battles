import HealthBar from "./health_bar";
import BattleOptions from "./battle_options";

export default class Game {
  constructor(player, computer) {
    this.player = player;
    this.computer = computer;
    this.gameState = true; // starts true to prevent early attacks while players get positioned
    this.activeAttack = false;
    this.start = false;
    this.playHealth = new HealthBar(this.player);
    this.compHealth = new HealthBar(this.computer);
    this.battleOptions = new BattleOptions(this.player.gameHeight, this.player.gameWidth, this);
    this.currentPlayer = this.player;
    this.status = null;
    this.changeTurn = this.changeTurn.bind(this);
  }

  changeTurn() {
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