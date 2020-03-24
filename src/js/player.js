import MovingObject from "./moving_object";

export default class Player {
  constructor(health, attackPower, name, gameHeight, gameWidth) { // width only would be used for opponent position
  
    this.name = name; // only if browsers are ALL made by inputing data into this 
    this.fileName = this.name.split(" ").join("");
    this.img = new Image();
    this.img.src = `./src/images/${this.fileName}.png`;
    this.height = 150;
    this.width = 150;
    this.health = health;
    this.currentHealth = health;
    this.gameHeight = gameHeight;
    this.gameWidth = gameWidth;
    this.maxHealth = health;
    this.attackItems = [];
    this.inPosition = false;
    this.statusText = null;
    this.attackText = null; // change later for more customized messages
    this.healText = null; // change later for more customized messages
    this.attackPower = attackPower;
    this.velocity = 55;
    this.position = { // default start pos
      y: this.gameHeight - this.height - 50,
      x: 40
    }
    this.initialPosition = { // currently hidden off screen
      x: -this.width
    }

    this.attackAnimation = this.attackAnimation.bind(this);
    this.draw = this.draw.bind(this);
  }

  // player.js
  draw(ctx, dt) {
    // if being attacked, dont draw just return
    ctx.drawImage(this.img, this.initialPosition.x, this.position.y, this.height, this.width);
    this.attackItems.forEach((item, idx) => {
      if (item.done) {
        item.handleCollision();
        delete this.attackItems[idx];
      }
      // check for collision, if there is, reduce health
      item.update(dt);
      item.draw(ctx);
    });
  }

  update(dt) {
    if (!dt) return; // for initial dt being null
    if (this.initialPosition.x < this.position.x) {
      this.initialPosition.x += this.velocity / dt;
    }
    if (this.initialPosition.x >= this.position.x) {
      this.inPosition = true; // flags player as in position
    }
    // if (/* attacking */true) {
    //   // attack animation()
    // } else if (/* initialPos !== to position */ true) {
    //   // increment 
    // }
  }

  // attack(opponent) { // opponent should be instance of opponent class
    // const dmg = Math.floor(((Math.random() + .25) * this.attackPower) / 3); // add this to comp if it works
    // opponent.health -= dmg;
    // this.attackAnimation(opponent);
    // if (opponent.health <= 0) {
      //   opponent.health = 0;
      // }
      // this.statusText = `${this.name} used ${this.attackText} on ${opponent.name} for ${dmg} damage!`;
      // console.log(`${this.name} attacked ${opponent.name} for ${dmg} damage!`);
  // }
    
  attackAnimation(opponent) {
    this.attacking = true;
    let counter = 0;
    const totalDmg = Math.floor(((Math.random() + .25) * this.attackPower));
    const dmg = totalDmg / 3;
    const attack = setInterval(() => {
      counter++;
      this.attackItems.push(new MovingObject(this, opponent, dmg));
      if (counter === 3) {
        clearInterval(attack);
        setTimeout(() => this.attacking = false, 1500);
      }
    },250);
    console.log(`${this.name} attacked ${opponent.name} for ${totalDmg} damage!`);
  }

  heal() { // just adds health back to 
    // const healing = Math.floor(Math.random() * 10) + 6 - this.attackPower / 4;
    const healing = Math.floor(this.maxHealth * .10);
    this.health += healing;
    if (this.health >= 100) {
      this.health = 100;
    }
    // this.statusText = `${this.name} used ${this.healText} to heal for ${healing}!`;
    console.log(`${this.name} healed for ${healing}!`);
  }

  healAnimation() {
    // maybe just make a bunch of gold stars or
  }

}