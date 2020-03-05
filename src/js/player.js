export default class Player {
  constructor(health, attackPower, name, gameHeight, gameWidth) { // width only would be used for opponent position
  
    this.height = 150;
    this.width = 150;
    this.health = health;
    this.gameHeight = gameHeight;
    this.maxHealth = health;
    this.attackPower = attackPower;
    this.name = name; // only if browsers are ALL made by inputing data into this 
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
    let img = new Image();
    const fileName = this.name.split(" ").join("");
    img.src = `./dist/images/${fileName}.png`;
    const position = this.position;
    const height = this.height;
    const width = this.width;
    img.onload = () => {
      debugger
      ctx.drawImage(img, position.x, position.y, height, width);
    }
  }

  attack(opponent) { // opponent should be instance of opponent class
    const dmg = Math.floor(Math.random() * this.attackPower);
    opponent.health -= dmg;
    if (opponent.health <= 0) {
      opponent.health = 0;
    }
    console.log(`${this.name} attacked ${opponent.name} for ${dmg} damage!`);
  }

  heal() { // just adds health back to 
    const healing = Math.floor(Math.random() * 20) + 10;
    this.health += healing;
  }

}