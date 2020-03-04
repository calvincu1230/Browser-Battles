export default class Player {
  constructor(health, attackPower, name, gameHeight, gameWidth) { // width only would be used for opponent position
  
    this.height = 150;
    this.width = 150;
    this.health = health;
    this.attackPower = attackPower;
    this.name = name; // only if browsers are ALL made by inputing data into this 
    // this.img = new Image // added img in draw so likely wont need this
    this.position = { // currently set off screen
      y: gameHeight - this.height - 40,
      x: 40
    }
  }


  draw(ctx) { // will have to refactor to get dif image per browser
    let img = new Image();
    img.src = "./dist/images/Chrome.png"
    img.onload = () => {
      ctx.drawImage(img, this.position.x, this.position.y, this.height, this.width);
    }
  }

  attack(opponent) { // opponent should be instance of opponent class
    const dmg = Math.floor(Math.random * this.attackPower);
    opponent.health -= dmg;
  }

  heal() { // just adds health back to 
    const healing = Math.floor(Math.random * 20) + 10;
    this.health += healing;
  }

}