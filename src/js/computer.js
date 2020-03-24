import MovingObject from "./moving_object";

export default class Computer {
  constructor(health, attackPower, name, gameHeight, gameWidth) { // width only would be used for opponent position
    // may be better to deconstruct obj to pass in traits from other browsers
    // const { health, attackPower, name } = NAME OF OBJ PASSED IN 

    this.name = name; // only if browsers are ALL made by inputing data into this 
    this.fileName = this.name.split(" ").join("");
    this.img = new Image();
    this.img.src = `./src/images/${this.fileName}.png`;
    this.height = 150;
    this.width = 150;
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
    this.health = health;
    this.currentHealth = health;
    this.maxHealth = health;
    this.attacking = false;
    this.inPosition = false;
    this.attackItems = [];
    this.inPosition = false;
    this.statusText = null;
    this.attackText = null;
    this.attackPower = attackPower;
    this.velocity = 55;
    this.position = { // currently hidden off screen
      y: 20,
      x: this.gameWidth - this.width - 50
    }
    this.initialPosition = { // currently hidden off screen
      x: this.gameWidth
    }

    this.attackAnimation = this.attackAnimation.bind(this);
    this.heal = this.heal.bind(this);
  }

  // computer.js
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
    if (this.initialPosition.x > this.position.x) {
      this.initialPosition.x -= this.velocity / dt;
    }
    if (this.initialPosition.x <= this.position.x) {
      this.inPosition = true; // flags player as in position
    }
    // if (/* attacking */true) {
    //   // attack animation()
    // } else if (/* initialPos !== to position */ true) {
    //   // increment 
    // }
  }

  // attack(opponent) { // opponent should be instance of player class
  //   this.attacking = true;
  //   const dmg = Math.floor(Math.random() * this.attackPower);
  //   opponent.health -= dmg;
  //   if (opponent.health <= 0) {
  //     opponent.health = 0;
  //   }
  //   this.attackAnimation(opponent);
  //   console.log(`${this.name} attacked ${opponent.name} for ${dmg} damage!`);
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

  heal() { // heal logic that will need to be reworked to consider players AP level
    const healing = Math.floor(Math.random() * 10) + 5 + this.attackPower / 4;
    this.health += healing;
    if (this.health >= 100) {
      this.health = 100;
    }
    console.log(`${this.name} healed for ${healing}!`);
  }

  playTurn(opponent) { // if health is low and opponent has more than low hp, heal
    // debugger
    const move = (this.health < 20 && opponent.health > 20) ? () => this.heal() : (opponent) => this.attackAnimation(opponent);
    // chooses to attack or curHealth based on health and Opp health
    // move(opponent);
    setTimeout(() => move(opponent), 1);
  }

}