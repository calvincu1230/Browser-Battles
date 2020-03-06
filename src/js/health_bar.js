export default class HealthBar {
  constructor(player) {
    this.gameHeight = player.gameHeight;
    this.gameWidth = player.gameWidth;
    this.height = 25;
    this.width = player.width * .75;
    this.player = player;
    this.draw = this.draw.bind(this);
    this.position = {
      x: player.position.x + player.width / 8,
      y: player.position.y + player.height + 10
    }
  }

  update(dt) {
    debugger
    if (this.player.currentHealth === this.player.health) return;
    if (this.player.currentHealth < this.player.health) {
      this.player.currentHealth++;
    }
    if (this.player.currentHealth > this.player.health) {
      this.player.currentHealth--;
    }
  }

  draw(ctx) {
    // draw box with player health
    ctx.fillStyle = "white";
    ctx.fillRect(
      this.position.x, 
      this.position.y, 
      this.width, 
      this.height
      );
    ctx.fillStyle = "red";
    debugger
    ctx.fillRect(
      this.position.x, 
      this.position.y, 
      this.width * (this.player.currentHealth / this.player.maxHealth), // calculates pixels based on current player health
      this.height
      );
    ctx.font = "16px Arial";
    ctx.fillStyle = "black";
    ctx.fillText(this.player.currentHealth, this.position.x + this.width / 2.5, this.position.y + this.height - 5);
  }
}