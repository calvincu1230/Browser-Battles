export default class GameOptions {
  constructor(optionsArr, gameWidth, gameHeight) {
    this.options = optionsArr;
    this.selected = 1;
    this.length = optionsArr.length;
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
  }

  drawBox(ctx, x, y) {
    const width = this.selected === 2 ? 190 : 110;
    const height = y - 205;

    ctx.rect(x, y, width, height);
    ctx.lineWidth = 5;
    ctx.strokeStyle = "white";
    ctx.stroke();
  }

  draw(ctx) {
    let startX = 100;
    const startY = this.gameHeight / 1.5; 

    ctx.fillStyle = "rgba(0, 0, 0, 0.75)";
    ctx.fillRect(0, 0, this.gameWidth, this.gameHeight);
    ctx.font = "60px Arial";
    ctx.fillStyle = "white";
    ctx.fillText("CHOOSE YOUR BROWSER", 35, this.gameHeight / 4);

    this.options.forEach((option, idx) => {
      const { name, attackPower, health } = option;

      if (idx > 2) startX += 75; // makes up for internet explorer being a longer word
      ctx.font = "22px Arial";
      ctx.fillText(`${name}`, startX, startY);
      ctx.fillText(`AP: ${attackPower}`, startX, startY + 27);
      ctx.fillText(`HP: ${health}`, startX, startY + 53);
      if (idx === this.selected) this.drawBox(ctx, startX - 15, startY - 25);
      startX += 150; // draws box at start pos of selected 
    });
    this.drawBox(ctx);
  }
}