export default class BattleOptions {
  constructor(player) {
    this.player = player;
    this.gameHeight = player.gameHeight;
    this.gameWidth = player.gameWidth;
    this.height = 125;
    this.width = 400;
    this.selected = 0;
    this.optionsText = ["Attack", "Heal", "Quit"]
    this.options = [this.attack, this.heal, this.quit];
    this.position = {
      x: this.gameWidth - this.width - 50,
      y: this.gameHeight - this.height - 30
    }
  }

  // update(dt) {
  //   if (!dt) {

  //   }


  // }

  draw(ctx){
    ctx.rect(this.position.x, this.position.y, this.width, this.height);
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.lineWidth = 5;
    ctx.strokeStyle = "black";
    ctx.stroke();
    const options = this.optionsText.join("    ");
    ctx.font = "30px Arial";
    ctx.fillStyle = "black";
    // ctx.textAlign = "center";
    ctx.fillText(options, this.position.x + this.width / 6, this.position.y + this.height / 1.75);
    ctx.beginPath();
    ctx.moveTo(this.position.x + this.width / 6, );
  }

  attack(currentPlayer, opponent) {
    currentPlayer.attack(opponent) // will mainly just work for human player
  }

  heal(currentPlayer) {
    currentPlayer.heal(); // will mainly just work for human player
  }

  quit() {
    // will quit the game
    // renders html overlay with y and n listeners to confirm
    // if n go away, if y call reset
  }
  
}