export default class StatusText {
  constructor(status, gameHeight, gameWidth) {
    this.gameHeight = gameHeight;
    this.gameWidth = gameWidth;
    this.finalStatus = status;
    this.currentStatus = "";
    this.height = 125;
    this.width = 400;
    this.count = 0;
    this.length = status.length;
    this.position = {
      x: this.gameWidth - this.width - 50,
      y: this.gameHeight - this.height - 30
    }
    this.draw = this.draw.bind(this);
    this.update = this.update.bind(this);
    // this.currentStatus2
    // this.call the method that will split it up
  } 
  // add a method that will split text to two lines if over 

  draw(ctx) {
    ctx.rect(this.position.x, this.position.y, this.width, this.height);
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.lineWidth = 5;
    ctx.strokeStyle = "black";
    ctx.stroke();
    ctx.font = "16px Arial";
    ctx.fillStyle = "black";
    const width = this.position.x + 20;
    ctx.fillText(this.currentStatus, width, this.position.y + this.height / 1.75);
  }

  update() {
    if (this.finalStatus.includes('win')) {
      this.currentStatus = this.finalStatus;
      return;
    }
    if (this.count < this.length) {
      this.currentStatus += this.finalStatus[this.count];
      this.count++;
    }
  }
}