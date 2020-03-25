export default class HealingObject {
  constructor(xPos, yPos, height) {
    this.height = 25;
    this.width = 25;
    this.img = new Image();
    this.img.src = `./src/images/heal.png`
    this.position = {
      x: xPos,
      y: yPos + height / 2
    }
    this.yVelocity = 60;
    this.done = false;
    this.finalPos = {
      y: yPos - height / 2
    };
  }

  handleCollision(){
    return;
  }

  update(dt) {
    if (this.position.y >= this.finalPos.y) {
      this.position.y -= this.yVelocity / dt;
    } else {
      this.done = true;
    }
  }

  draw(ctx) {
    if (this.done) return null;
    ctx.drawImage(this.img, this.position.x, this.position.y, this.width, this.height);
  }
}