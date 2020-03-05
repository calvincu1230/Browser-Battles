// export default class GameInput {
//   constructor(game) {
//     this.game = game;
//     document.addEventListener("keydown", (e) => {
//       if (this.game.currentPlayer === this.game.player) {
//         switch (e.keyCode) {
//           // case 37: // 37 is left arrow key

//           //   break;
  
//           // case 38: // 38 is up arrow key
  
//           //   break;
  
//           // case 39: // 39 is right arrow key
            
//           //   break;
  
//           // case 40: // 40 is down arrow key
            
//           //   break;
  
//           // case 13: // 13 is enter key
  
//           //   break;
  
//           case 65: // 65 a mute key
//             // if muted then unmute, otherwise mute
//             debugger
//             game.player.attack(game.computer);
//             // console.log("I should be attacking")
//             game.changeTurn();
//             break;
//           case 83: // 83 is s key
//             // if muted then unmute, otherwise mute
            
//             break;
//           case 81: // 81 is q key
//             // if muted then unmute, otherwise mute
//             break;
//         }
//       } else return;
//     });
//   }
// }