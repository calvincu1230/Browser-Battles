export default class Player {
  constructor(health, attackPower, name, gameHeight, gameWidth) { // width only would be used for opponent position
  
    this.height = 150;
    this.width = 150;
    this.health = health;
    this.currentHealth = health;
    this.gameHeight = gameHeight;
    this.gameWidth = gameWidth;
    this.maxHealth = health;
    this.inPosition = false;
    this.statusText = null;
    this.attackPower = attackPower;
    this.name = name; // only if browsers are ALL made by inputing data into this 
    this.fileName = this.name.split(" ").join("");
    this.img = new Image();
    this.img.src = `./dist/images/${this.fileName}.png`;
    this.velocity = 55;
    this.position = { // default start pos
      y: this.gameHeight - this.height - 50,
      x: 40
    }
    this.initialPosition = { // currently hidden off screen
      x: -this.width
    }

    this.attack = this.attack.bind(this);
    this.draw = this.draw.bind(this);
  }

  // player.js
  draw(ctx) {
    // if being attacked, dont draw just return
    ctx.drawImage(this.img, this.initialPosition.x, this.position.y, this.height, this.width);
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

  attack(opponent) { // opponent should be instance of opponent class
    const dmg = Math.floor(Math.random() * this.attackPower);
    opponent.health -= dmg;
    if (opponent.health <= 0) {
      opponent.health = 0;
    }
    console.log(`${this.name} attacked ${opponent.name} for ${dmg} damage!`);
  }

  attackAnimation() {

  }

  heal() { // just adds health back to 
    // const healing = Math.floor(Math.random() * 10) + 6 - this.attackPower / 4;
    const healing = Math.floor(this.maxHealth * .10);
    this.health += healing;
    if (this.health >= 100) {
      this.health = 100;
    }
    console.log(`${this.name} healed for ${healing}!`);
  }

  healAnimation() {

  }

}