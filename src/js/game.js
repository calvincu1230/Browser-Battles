import HealthBar from "./health_bar";
import BattleOptions from "./battle_options";
import StatusText from "./status_text";

export default class Game {
  constructor(player, computer) {
    this.player = player;
    this.computer = computer;
    this.gameState = false; // starts true to prevent early attacks while players get positioned
    this.activeAttack = false;
    this.start = false;
    this.playHealth = new HealthBar(this.player);
    this.compHealth = new HealthBar(this.computer);
    this.battleOptions = new BattleOptions(this.player.gameHeight, this.player.gameWidth, this);
    this.winnerText = null;
    this.currentPlayer = this.player;
    this.status = null;
    this.changeTurn = this.changeTurn.bind(this);
    this.checkNames();
  }

  checkNames() {
    if (this.player.name === this.computer.name) {
      this.computer.name += " v2";
    }
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
    let winnerText = "";
    if (this.player.health <= 0) {
      winnerText = `${this.computer.name} wins!`;
    }

    if (this.computer.health <= 0) {
      winnerText = `${this.player.name} wins!`;
    }
    if (!winnerText) return false;
    this.winnerText = new StatusText(winnerText, this.player.gameHeight, this.player.gameWidth);
    return true;
  }

  gameOver() {
    if (this.player.currentHealth <= 0 || this.computer.currentHealth <= 0) {
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