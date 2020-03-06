export default class Player {
  constructor(health, attackPower, name, gameHeight, gameWidth) { // width only would be used for opponent position
  
    this.height = 150;
    this.width = 150;
    this.health = health;
    this.currentHealth = health;
    this.gameHeight = gameHeight;
    this.gameWidth = gameWidth;
    this.maxHealth = health;
    this.attackPower = attackPower;
    this.name = name; // only if browsers are ALL made by inputing data into this 
    this.fileName = this.name.split(" ").join("");
    this.img = new Image();
    this.img.src = `../../images/${this.fileName}.png`;
    this.position = { // currently set off screen
      y: this.gameHeight - this.height - 50,
      x: 40
    }
    this.initialPosition = { // currently hidden off screen
      y: 20,
      x: -this.width
    }

    this.attack = this.attack.bind(this);
    this.draw = this.draw.bind(this);
  }

  // player.js
  draw(ctx) {
    const position = this.position;
    const height = this.height;
    const width = this.width;
    ctx.drawImage(this.img, position.x, position.y, height, width);
  }

  update(dt) {
    
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
    const healing = Math.floor(Math.random() * 10) + 5 + this.attackPower / 4;
    this.health += healing;
    if (this.health >= 100) {
      this.health = 100;
    }
    console.log(`${this.name} healed for ${healing}!`);
  }

  healAnimation() {

  }

}