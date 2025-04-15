// store the gameboard as a array
const gameboard = (function createGameboard() {
    const winCon = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
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
    const checkWin = function (player) {
        winCon.forEach((item) => {
            if (gameboard[item[0]] === player && gameboard[item[1]] === player && gameboard[item[2]] === player) {
                console.log(player + " is the winner");
            }
        })
    }
    return { gameboard, putMarkX, putMarkO }
})();

const display = (function display() {
    const circleImg = "asset/circle-svgrepo-com.svg";
    const crossImg = "asset/cross-svgrepo-com.svg";
    const render = function () {
        // get the gameboard array and render the X and O corespondingly 
        // read the item in the array and see it is a X or O then 
        // create the img in div with the class
        for (let i = 0; i < 9; i++) {
            if (gameboard.gameboard[i] === "X" || gameboard.gameboard[i] === "O") {
                let position = document.getElementById(i);
                let image = document.createElement("img");
                let marker = (gameboard.gameboard[i] === "X") ? crossImg : circleImg;
                image.setAttribute("src", marker);
                if (position.children.length > 0) {
                    position.removeChild(position.children[0]);
                };
                position.appendChild(image);
            }
        }
    }
    return {render};
})()

