import Player from "./player";

export default class Opponent extends Player {
  constructor(health, attackPower, name, gameHeight, gameWidth) { // width only would be used for opponent position
    // may be better to deconstruct obj to pass in traits from other browsers
    // const { health, attackPower, name } = NAME OF OBJ PASSED IN

    this.height = 150;
    this.width = 150;
    this.health = health;
    this.attackPower = attackPower;
    this.name = name; // only if browsers are ALL made by inputing data into this 
    // this.img = new Image // added img in draw so likely wont need this
    this.position = {
      y: gameHeight - this.height - 40,
      x: 50
    }
  }


  draw(ctx) { // will have to refactor to get dif image per browser
    let img = new Image();
    img.src = "./dist/images/chrome.png"
    console.log(img);
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

}