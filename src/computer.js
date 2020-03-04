import Player from "./player";

export default class Computer {
  constructor(health, attackPower, name, gameHeight, gameWidth) { // width only would be used for opponent position
    // may be better to deconstruct obj to pass in traits from other browsers
    // const { health, attackPower, name } = NAME OF OBJ PASSED IN

    this.height = 150;
    this.width = 150;
    this.health = health;
    this.attackPower = attackPower;
    this.name = name; // only if browsers are ALL made by inputing data into this 
    // this.img = new Image // added img in draw so likely wont need this
    this.position = { // currently hidden off screen
      y: 40,
      x: gameWidth - this.width - 40
    }

    this.attack = this.attack.bind(this);
    this.heal = this.heal.bind(this);
  }


  draw(ctx) { // will have to refactor to get dif image per browser
    let img = new Image();
    img.src = "./dist/images/Firefox.png"; // maybe make all files the name? so can be interpolated
    img.onload = () => {
      ctx.drawImage(img, this.position.x, this.position.y, this.height, this.width);
    }
  }

  attack(opponent) { // opponent should be instance of player class
    const dmg = Math.floor(Math.random * this.attackPower);
    opponent.health -= dmg;
  }

  heal() { // just adds health back to 
    const healing = Math.floor(Math.random * 20) + 10;
    this.health += healing;
  }

  playTurn(opponent) { // if health is low and opponent has more than low hp, heal
    const move = (this.health < 20 && opponent.health > 20) ? () => this.heal() : (opponent) => this.attack(opponent);
    
    window.setTimeout(move(opponent), 1500);
  }

}