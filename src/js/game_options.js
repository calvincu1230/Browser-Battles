export default class GameOptions {
  constructor(optionsArr, gameWidth, gameHeight) {
    this.options = optionsArr;
    this.selected = 2;
    this.length = optionsArr.length;
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
  }

  drawBox(ctx) {
    const width = 90 * this.selected + 40;
    const height = (this.gameHeight / 2) - 30;
    debugger
    ctx.rect(width, height, width + 90, height - 110);
    ctx.lineWidth = 5;
    ctx.strokeStyle = "black";
    ctx.stroke();
  }

  draw(ctx) {
    // let width = 50 * this.selected + 25 * this.selected === 0 ? 1 : this.selected + 1;
    let width = 50;
    const height = this.gameHeight / 2;
    this.options.forEach((option, idx) => {
      const { name, attackPower, health } = option;
      ctx.font = "16px Press Start 2P";
      ctx.font = "30px Arial";
      ctx.fillStyle = "white";
      ctx.fillText(`${name}`, width, height)
      ctx.fillText(`AP: ${attackPower}`, width, height + 25)
      ctx.fillText(`HP: ${health}`, width, height + 50)
      width += 200;
    });
    this.drawBox(ctx);
  }

  update() {

  }
  
}