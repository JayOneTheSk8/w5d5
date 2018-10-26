const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

class Game {
  constructor(tower_length = 3) {
    this.towers = [[], [], []];
    for (let i = 1; i <= tower_length; i++) {
      this.towers[0].push(i);
    }
  }
}

Game.prototype.promptMove = function(callback) {
  console.log(this.towers);
  reader.question("Where would you like to move from?\n", (res) => {
    let startTowerIdx = parseInt(res);
    reader.question("Where would you like to move to?\n", (res2) => {
      let endTowerIdx = parseInt(res2);
      let valid = callback(startTowerIdx, endTowerIdx);
      console.log(valid);
    });
  });
};

Game.prototype.isValidMove = function(startTowerIdx, endTowerIdx) {
  let startTowerIdx = parseInt(startTowerIdx);
  let endTowerIdx = parseInt(endTowerIdx);
  // if (startTowerIdx === endTowerIdx) { return false; } // if you are trying to move to the same tower
  if (this.towers[startTowerIdx].length === 0) { return false; } // if you are moving from an empty tower
  if (this.towers[endTowerIdx].length === 0) { return true; } // if the tower you're moving to is empty

  if (this.towers[startTowerIdx][0] > this.towers[endTowerIdx][0]) {
    return false;
  } else {
    return true;
  }
};

const g = new Game();
g.promptMove(g.isValidMove);
