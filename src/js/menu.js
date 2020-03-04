export default class Menu {
  constructor(gameWidth, gameHeight) {
    this.gamewidth = gameWidth; 
    this.gameheight = gameHeight;
  }

  draw(ctx) {
    ctx.rect(0, 0, this.gameWidth, this.gameHeight);
    ctx.fillStyle = "red";
    // put inner text with a listener for any button click to go to character screen
    ctx.fill();
  }
}