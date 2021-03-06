import MovingObject from "./moving_object";
import StatusText from "./status_text";
import HealingObject from "./healing_object";

export default class Player {
  constructor(player, gameHeight, gameWidth) { // width only would be used for opponent position
    this.name = player.name; // only if browsers are ALL made by inputing data into this 
    this.fileName = this.name.split(" ").join("");
    this.img = new Image();
    this.img.src = `./src/images/${this.fileName}.png`;
    this.height = 150;
    this.width = 150;
    this.gameHeight = gameHeight;
    this.gameWidth = gameWidth;
    this.health = player.health;
    this.currentHealth = player.health;
    this.maxHealth = player.health;
    this.attacking = false;
    this.attacked = false;
    this.items = [];
    this.inPosition = false;
    this.statusText = null;
    this.attackText = player.attackText;
    this.healText = player.healText;
    this.attackPower = player.attackPower;
    this.velocity = 55;
    this.position = { // default start pos
      y: this.gameHeight - this.height - 50,
      x: 40
    }
    this.initialPosition = { // currently hidden off screen
      x: -this.width
    }
    this.checkName(player.name);
  }

  checkName(name) {
    if (name === "Internet Explorer") {
      this.name = "IE";
    }
  }

  // player.js
  draw(ctx, dt) {
    // if being attacked, dont draw just return
    if (!this.attacked) {
      ctx.drawImage(this.img, this.initialPosition.x, this.position.y, this.width, this.height);
    }
    this.items = this.items.filter(item => item); // removes deleted objs
    this.items.forEach((item, idx) => { // draws every object associated with player
      if (item.done) {
        item.handleCollision();
        delete this.items[idx];
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
  }

  handleAttack() {
    this.attacked = true;
    const attackTimer = setInterval(() => {
      clearInterval(attackTimer);
      this.attacked = false;
    }, 20);
  }
  // attack(opponent) { // opponent should be instance of opponent class
    // const dmg = Math.round(((Math.random() + .25) * this.attackPower) / 3); // add this to comp if it works
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
    const num = Math.random();
    const totalDmg = Math.round(((num < 0.25 ? .25 : num) * this.attackPower));
    this.statusText = new StatusText(`${this.name} ${this.attackText} ${opponent.name} doing ${totalDmg} damage!`, this.gameHeight, this.gameWidth);
    let counter = 0;
    const dmg = totalDmg / 3;
    const attack = setInterval(() => {
      counter++;
      this.items.push(new MovingObject(this, opponent, dmg));
      if (counter === 3) {
        clearInterval(attack);
      }
    }, 250);
    const endAttack = setInterval(() => {
      clearInterval(endAttack);
      this.attacking = false;
    }, 2750);
  }

  heal() { // just adds health back to 
    // const healing = Math.round(Math.random() * 10) + 6 - this.attackPower / 4;
    this.healAnimation();
    // const healing = Math.round(this.maxHealth * .10 + (Math.random() * this.attackPower / 5));
    const healing = Math.round(this.maxHealth * .10);
    this.statusText = new StatusText(`${this.name} ${this.healText} healing for ${healing}!`, this.gameHeight, this.gameWidth);
    this.attacking = true;
    this.health += healing;
    if (this.health >= this.maxHealth) {
      this.health = this.maxHealth;
    }
    const endAttack = setInterval(() => {
      clearInterval(endAttack);
      this.attacking = false;
    }, 2250);
  }

  healAnimation() {
    let counter = 0;
    let width = this.width / 4;
    const xPos = this.position.x - this.width / 2;
    const heals = setInterval(() => {
      counter++;
      if (counter === 10) {
        clearInterval(heals);
      }
      if (counter === 6) {
        width = this.width / 3;
      }
      width += this.width / 5;
      this.items.push(new HealingObject((xPos + width), this.position.y + this.height / 2, this.height))
    }, 100); 
  }
}