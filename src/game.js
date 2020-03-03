class Game {
  constructor(player, computer) {
    this.player = player;
    this.computer = computer;
  }

  update() {

  }

  draw() {

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
    
  }

}