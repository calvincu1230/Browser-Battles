import Game from "./game";
import Player from "./player";
import Computer from "./computer";

export const menuInput = (gameHeight, gameWidth, ctx) => {
  let count = 0;
  document.addEventListener("keydown", (e) => {
    if (count < 1) { // this is janky logic, maybe add removeEventListener later
      count++;
      const player = new Player(100, 20, "Chrome", gameHeight, gameWidth);
      const computer = new Computer(100, 20, "Internet_Explorer", gameHeight, gameWidth);
      // refactor eventually to add player based on key in puts on later screen
      const game = new Game(player, computer);
      game.start(ctx); // for now starts game with default browsers
    } else return;
  });
}