export default class HealthBar {
  constructor(player) {
    this.height = 25;
    this.width = player.width * .75;
    this.player = player;
    this.draw = this.draw.bind(this);
    this.position = {
      x: player.position.x + player.width / 8,
      y: player.position.y + player.height + 10
    }
  }

  draw(ctx) {
    // draw box with player health and name
    // place box X pixels from player position to player passed in
    ctx.fillStyle = "white";
    ctx.fillRect(
      this.position.x, 
      this.position.y, 
      this.width, 
      this.height
      );
    ctx.fillStyle = "red";
    ctx.fillRect(
      this.position.x, 
      this.position.y, 
      this.width * (this.player.health / this.player.maxHealth), 
      this.height
      );
    ctx.font = "16px Arial";
    ctx.fillStyle = "black";
    ctx.fillText(this.player.health, this.position.x + this.width / 2, this.position.y + this.height - 5);
  }
}