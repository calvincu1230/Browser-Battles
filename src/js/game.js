export default class Game {
  constructor(player, computer) {
    this.player = player;
    this.computer = computer;
    this.players = { // customize AP and Health later
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
    this.start = this.start.bind(this);
  }

  start() {
    // start with current render that is on screen
  }

  update() {

  }

  draw(ctx) {
    // sets up initial rendering of board
  }

  changeTurn() {
    // not sure how turn change will be handle yet
  }

  winner(player, computer) {
    if (player.health <= 0) {
      console.log(`${computer.name} wins!`);
      // this.gameOver();
    }

    if (computer.health <= 0) {
      console.log(`${player.name} wins!`);
      // this.gameOver();
    }
  }

  gameOver() {
    // ends game and renders start menu
  }

}