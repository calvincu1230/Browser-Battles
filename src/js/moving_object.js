export default class MovingObject {
  constructor(attacker, target) {
    this.height = 50;
    this.width = 50;
    this.img = new Image();
    this.img.src = `./src/images/rock.png`
    this.position = {
      x: attacker.position.x + attacker.width / 2,
      y: attacker.position.y + 50
    }
    this.attackTop = {
      x: target.position.x - target.width / 5,
      y: target.position.y + target.height / 2
    }
    this.attackBot = {
      x: target.position.x + target.width - 20,
      y: target.position.y
    }
    this.xVelocity = attacker.position.x > target.position.x ? -150 : 150; // if start is greater, vel will be neg
    this.yVelocity = this.xVelocity === 150 ? -60 : 60; // Y vel is opp of x vel
    this.done = false;
    this.finalPos = this.xVelocity > 0 ? this.attackTop : this.attackBot;
  }

  handleCollision(target) {
    if (this.xVelocity < 0) {
      this.finalPos = {
        x: target.position.x + target.width,
        y: target.position.y + target.height
      }
    }
  }

  update(dt) {
    if (this.xVelocity > 0) {
      if (this.position.x <= this.finalPos.x || this.position.y >= this.finalPos.y) {
        this.position.x += this.xVelocity / dt;
        this.position.y += this.yVelocity / dt;
      } else {
        this.done = true;
      }
    } else {
      debugger
      if (this.position.x >= this.finalPos.x || this.position.y <= this.finalPos.y) {
        this.position.x += this.xVelocity / dt;
        this.position.y += this.yVelocity / dt;
      } else {
        this.done = true;
      }
    }
  }

  draw(ctx) {
    if (this.done) return null;
    ctx.drawImage(this.img, this.position.x, this.position.y, this.width, this.height);
  }
}