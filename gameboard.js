// store the gameboard as a array
const gameboard = (function createGameboard() {
    let gameboard = [];
    for (let i = 0; i < 9; i++) {
        gameboard.push(" ");
    }
    const putMarkX = function(index){
        gameboard[index] = "X";
    }
    const putMarkO = function(index){
        gameboard[index] = "O";
    }
    return {gameboard, putMarkX, putMarkO}
})()

