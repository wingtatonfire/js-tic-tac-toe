// store the gameboard as a array
const gameboard = (function createGameboard() {
    let gameboard = [];
    for (let i = 0; i < 9; i++) {
        gameboard.push(" ");
    }
    const putMarkX = function(index){
        gameboard[index] = "X";
        this.checkWin("X");
    }
    const putMarkO = function(index){
        gameboard[index] = "O";
        this.checkWin("O");
    }
    const winCon = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

    const checkWin = function(player){
        winCon.forEach((item)=>{
            if (gameboard[item[0]] === player && gameboard[item[1]] === player && gameboard[item[2]] === player) {
                console.log(player + " is the winner");
            }
        })
    }

    return {gameboard, putMarkX, putMarkO, checkWin}
})()
gameboard.putMarkX(0)
gameboard.putMarkX(1)
gameboard.putMarkX(2)



