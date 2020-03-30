export default class BattleOptions {
  constructor(gameHeight, gameWidth, game) {
    this.gameHeight = gameHeight;
    this.gameWidth = gameWidth;
    this.game = game;
    this.height = 125;
    this.width = 400;
    this.selected = 0;
    this.optionsText = ["Attack", "Heal", "Quit"]
    this.options = [this.attack, this.heal, null];
    this.position = {
      x: this.gameWidth - this.width - 50,
      y: this.gameHeight - this.height - 30
    }
  }

  drawLine(ctx, width) {
    if (this.selected === 0) {
      ctx.beginPath();
      ctx.moveTo(width, this.gameHeight - 75);
      ctx.lineTo(width + 85, this.gameHeight - 75);
      ctx.closePath();
      ctx.stroke();
    } else if (this.selected === 1){
      ctx.beginPath();
      ctx.moveTo(width + 115, this.gameHeight - 75);
      ctx.lineTo(width + 180, this.gameHeight - 75);
      ctx.closePath();
      ctx.stroke();
    } else if (this.selected === 2) {
      ctx.beginPath();
      ctx.moveTo(width + 210, this.gameHeight - 75);
      ctx.lineTo(width + 270, this.gameHeight - 75);
      ctx.closePath();
      ctx.stroke();
    }
  }

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
    const width = this.position.x + this.width / 6;
    ctx.fillText(options, width, this.position.y + this.height / 1.75);
    this.drawLine(ctx, width);
  }

  attack(currentPlayer, opponent) {
    currentPlayer.attackAnimation(opponent); // will mainly just work for human player
    // currentPlayer.attackAnimation();
  }

  heal(currentPlayer) {
    currentPlayer.heal(); // will mainly just work for human player
    // currentPlayer.healAnimation();
  }
  
}