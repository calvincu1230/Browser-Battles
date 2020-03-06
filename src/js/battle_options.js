export default class BattleOptions {
  constructor(player) {
    this.player = player;
    this.selected = attackBtn;
  }

  attack(currentPlayer, opponent) {
    currentPlayer.attack(opponent) // will mainly just work for human player
  }

  heal(currentPlayer) {
    currentPlayer.heal(); // will mainly just work for human player
  }

  quit() {
    // will quit the game
    // renders html overlay with y and n listeners to confirm
    // if n go away, if y call reset
  }
  
}