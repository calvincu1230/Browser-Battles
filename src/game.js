class Game {
  constructor(player, computer) {
    this.player = player;
    this.computer = computer;
  }

  update() {

  }

  draw() {

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