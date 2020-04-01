export default class StatusText {
  constructor(status, gameHeight, gameWidth) {
    this.gameHeight = gameHeight;
    this.gameWidth = gameWidth;
    this.finalStatus = status;
    this.currentStatus1 = "";
    this.currentStatus2 = "";
    this.statusLine1 = "";
    this.statusLine2 = "";
    this.height = 125;
    this.width = 500;
    this.count = 0;
    this.length = status.length;
    this.position = {
      x: this.gameWidth - this.width - 50,
      y: this.gameHeight - this.height - 30
    }
    this.draw = this.draw.bind(this);
    this.update = this.update.bind(this);
    this.checkLineLength(status);
  } 
  // add a method that will split text to two lines if over 
  checkLineLength(status) {
    const statusArr = status.split(" ");
    if (statusArr.length > 6) {
      this.statusLine1 = statusArr.slice(0, 6).join(" ");
      this.statusLine2 = statusArr.slice(6).join(" ");
    } else {
      this.statusLine1 = status;
    }
  }

  drawWinnerText(ctx) {
    ctx.font = '20px "Press Start 2P"';
    ctx.fillStyle = "black";
    const width = this.position.x + 15;
    ctx.fillText(this.currentStatus1, width + 50, this.position.y + this.height / 1.75);
  }

  drawMultiLineStatus(ctx) {
    const height = this.position.y + this.height / 3 + 15; // current line height
    // if (this.count.length < this.finalStatus.length) {
    this.drawSingleLine(ctx, height);

    if (this.count >= this.statusLine1.length) {
      this.drawSingleLine(ctx, height + 25, this.currentStatus2); // changes line height 
    }
  }

  drawSingleLine(ctx, height, status) {
    if (height === undefined) height = this.position.y + this.height / 1.75;
    if (status === undefined) status = this.currentStatus1;
    
    ctx.font = '12px "Press Start 2P"';
    ctx.fillStyle = "black";
    const width = this.position.x + 15;
    ctx.fillText(status, width, height);
  }

  draw(ctx) {
    ctx.rect(this.position.x, this.position.y, this.width, this.height);
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.lineWidth = 5;
    ctx.strokeStyle = "black";
    ctx.stroke();

    if (this.finalStatus.includes('wins')) {
      this.drawWinnerText(ctx);
    } else if (this.statusLine1 && this.statusLine2) {
      this.drawMultiLineStatus(ctx);
    } else {
      this.drawSingleLine(ctx);
    }
  }

  update() {
    if (this.finalStatus.includes('wins')) {
      this.currentStatus1 = this.finalStatus;
      return;
    }
    if (this.count < this.length) {
      if (this.count < this.statusLine1.length) {
        this.currentStatus1 += this.finalStatus[this.count];
        this.count++;
      } else if (this.count === this.statusLine1.length) {
        this.count++;
        return;
      } else {
        this.currentStatus2 += this.finalStatus[this.count];
        this.count++;
      }
    }
  }
}