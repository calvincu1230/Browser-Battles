import Game from "./game";
import Player from "./player";
import Computer from "./computer";

export const menuInput = (gameHeight, gameWidth, ctx) => {
  document.addEventListener("keydown", (e) => {
    const player = new Player(100, 20, "Chrome", gameHeight, gameWidth);
    const computer = new Computer(100, 20, "Internet_Explorer", gameHeight, gameWidth);
    // refactor eventually to add player based on key in puts on later screen
    const game = new Game(player, computer);
    game.start(ctx); // for now starts game with default browsers
  });
}