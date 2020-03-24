export default class MovingObject {
  constructor(attacker, target) {
    this.height = 50;
    this.width = 50;
    this.img = new Image();
    this.img.src = `./src/images/rock.png`
    this.position = {
      x: attacker.position.x + attacker.width / 2,
      y: attacker.position.y + attacker.height / 2
    }
    this.finalPos = {
      x: target.position.x,
      y: target.position.y
    }
    this.xVelocity = attacker.position.x > target.position.x ? -100 : 100; // if start is greater, vel will be neg
    this.yVelocity = this.xVelocity === 100 ? -50 : 50; // Y vel is opp of x vel
    // ternary comparing initial points to determing velocity 
    this.done = false;
  }

  

  update(dt) {
    if (this.xVelocity > 0) {
      if (this.position.x < this.finalPos.x || this.position.y > this.finalPos.y) {
        this.position.x += this.xVelocity / dt;
        this.position.y += this.yVelocity / dt;
      } else {
        this.done = true;
      }
    } else {
      if (this.position.x > this.finalPos.x || this.position.y < this.finalPos.y) {
        this.position.x += this.xVelocity / dt;
        this.position.y += this.yVelocity / dt;
      } else {
        this.done = true;
      }
    }
  }

  draw(ctx) {
    ctx.drawImage(this.img, this.position.x, this.position.y, this.width, this.height);
  }
}