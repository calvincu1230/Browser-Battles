export default class StatusText {
  constructor(status) {
    this.finalStatus = status;
    this.status = this.finalStatus.split("");
    this.currentStatus = "";
  }
// if lengths are not the same and status !== current, reset
  draw(ctx) {
    ctx.rect(this.position.x, this.position.y, this.width, this.height);
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.lineWidth = 5;
    ctx.strokeStyle = "black";
    ctx.stroke();
    ctx.font = "30px Arial";
    ctx.fillStyle = "black";
    const width = this.position.x + this.width / 6;
    ctx.fillText(this.currentStatus, width, this.position.y + this.height / 1.75);
  }

  update() {
    if (!this.finalStatus.includes(this.currentStatus)) {
      this.currentStatus = "";
    } else if (this.finalStatus === this.currentStatus) {
      return;
    } else {
      this.currentStatus += this.status.shift()
    }
  }
}