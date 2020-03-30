export default class MovingObject {
  constructor(attacker, target, dmg) {
    this.height = 50;
    this.width = 50;
    this.dmg = dmg;
    this.name = attacker.name;
    this.target = target;
    this.img = new Image();
    this.img.src = `./src/images/rock.png`
    // may be helpful to have imgs per class with similar names so each will be unique
    // maybe `./src/images/${this.name}item.png`
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
    this.rotation = 0;
    this.finalPos = this.xVelocity > 0 ? this.attackTop : this.attackBot;
    this.done = false;
  }

  handleCollision() {
    this.target.health -= this.dmg;
    this.target.handleAttack();
    if (this.target.health <= 0) {
      this.target.health = 0;
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
      this.rotation += 2;
    } else {
      if (this.position.x >= this.finalPos.x || this.position.y <= this.finalPos.y) {
        this.position.x += this.xVelocity / dt;
        this.position.y += this.yVelocity / dt;
      } else {
        this.done = true;
      }
      this.rotation -= 2;
    }
  }

  draw(ctx) {
    if (this.done) return null;
    ctx.save();
    ctx.translate(this.position.x, this.position.y);
    // ctx.fillRect(this.width / -2, this.height / -2, this.width, this.height);  
    ctx.rotate((this.rotation % 360) * (Math.PI / 180));
    ctx.translate(-this.position.x, -this.position.y);
    ctx.drawImage(this.img, this.position.x, this.position.y, this.width, this.height);
    ctx.restore();
  }
}