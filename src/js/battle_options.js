export default class BattleOptions {
  constructor() {

  }

  attack(currentPlayer, opponent) {
    currentPlayer.attack(opponent)
  }

  heal(currentPlayer) {

  }

  quit() {
    // will quit the game
  }
  
}