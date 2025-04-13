// store the gameboard as a array
const gameboard = (function createGameboard() {
    let gameboard = [];
    for (let i = 0; i < 9; i++) {
        gameboard.push(" ");
    }
    const putMarkX = function (index) {
        gameboard[index] = "X";
        checkWin("X");
    }
    const putMarkO = function (index) {
        gameboard[index] = "O";
        checkWin("O");
    }
    const winCon = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
    const checkWin = function (player) {
        winCon.forEach((item) => {
            if (gameboard[item[0]] === player && gameboard[item[1]] === player && gameboard[item[2]] === player) {
                console.log(player + " is the winner");
            }
        })
    }
    // function to render array to the webpage


    return { gameboard, putMarkX, putMarkO }
})();

const display = (function display(){
    // create a html element in the index
    // get the gameboard array and render the X and O corespondingly 
    return{};
})()

