// import Player from "./player";

export default class Computer {
  constructor(health, attackPower, name, gameHeight, gameWidth) { // width only would be used for opponent position
    // may be better to deconstruct obj to pass in traits from other browsers
    // const { health, attackPower, name } = NAME OF OBJ PASSED IN 

    this.height = 150;
    this.width = 150;
    this.gameWidth = gameWidth;
    this.health = health;
    this.maxHealth = health;
    this.name = name; // only if browsers are ALL made by inputing data into this 
    this.fileName = this.name.split(" ").join("");
    this.img = new Image();
    this.img.src = `./dist/images/${this.fileName}.png`;
    this.attackPower = attackPower;
    // this.img = new Image // added img in draw so likely wont need this
    this.position = { // currently hidden off screen
      y: 20,
      x: this.gameWidth - this.width - 40
    }
    this.initialPosition = { // currently hidden off screen
      y: 20,
      x: this.gameWidth + this.width
    }

    this.attack = this.attack.bind(this);
    this.heal = this.heal.bind(this);
  }

  // computer.js
  draw(ctx) { 
    // made olivers changes for now, not sure if 
    // if (this.img) retu
    // let img = new Image();
    const position = this.position;
    const height = this.height;
    const width = this.width;
    ctx.drawImage(this.img, position.x, position.y, height, width);
    // img.src = `./dist/images/${fileName}.png`;
  }

  attack(opponent) { // opponent should be instance of player class
    const dmg = Math.floor(Math.random() * this.attackPower);
    opponent.health -= dmg;
    if (opponent.health <= 0) {
      opponent.health = 0;
    }
    console.log(`${this.name} attacked ${opponent.name} for ${dmg} damage!`);
  }

  heal() { // just adds health back to 
    const healing = Math.floor(Math.random() * 15) + 5;
    this.health += healing;
    if (this.health >= 100) {
      this.health = 100;
    }
    console.log(`${this.name} healed for ${healing}!`);
  }

  playTurn(opponent) { // if health is low and opponent has more than low hp, heal
    // debugger
    const move = (this.health < 20 && opponent.health > 20) ? () => this.heal() : (opponent) => this.attack(opponent);
    // move(opponent);
    window.setTimeout(() => move(opponent), 100);
  }

}