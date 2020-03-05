import Game from "./game";
import { gameLoop } from "../index";
import Player from "./player";
import Computer from "./computer";

export const menuInput = () => {
  let clicked = false;
  document.addEventListener("keydown", (e) => {
    if (clicked === false) { // this is janky logic, maybe add removeEventListener later
      clicked = true;
      // const player = new Player(100, 20, "Chrome", gameHeight, gameWidth);
      // const computer = new Computer(100, 20, "Internet_Explorer", gameHeight, gameWidth);
      // refactor eventually to add player based on key in puts on later screen
      // const game = new Game(player, computer);
      gameLoop(); // for now starts game with default browsers
    } else return;
  });
}