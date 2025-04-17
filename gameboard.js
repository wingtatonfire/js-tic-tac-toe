// store the gameboard as a array
const gameboard = (function createGameboard() {
    const winCon = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
    const board = [];
    const init = function () {
        for (let i = 0; i < 9; i++) {
            board.push(" ");
    }

    }
    const putMarkX = function (index) {
        board[index] = "X";
        checkWin("X");
    }
    const putMarkO = function (index) {
        board[index] = "O";
        checkWin("O");
    }
    const checkWin = function (player) {
        winCon.forEach((item) => {
            if (board[item[0]] === player && board[item[1]] === player && board[item[2]] === player) {
                alert(player + " is the winner");
                resetGame()
            }
        })
    }
    const resetGame = function () {
        board.length = 0;
        init();
        display.clear();
    }

    init()
    return {putMarkX, putMarkO, resetGame }
})();

const display = (function display() {
    const circleImg = "asset/circle-svgrepo-com.svg";
    const crossImg = "asset/cross-svgrepo-com.svg";
    const reButton = document.querySelector(".reButton")

    let player = "O";

    const init = function () {
        for (let i = 0; i < 9; i++) {
            document.getElementById(i).addEventListener("click", function () {
                if (this.children.length === 0) {
                    let image = document.createElement("img");
                    if (player === "O") {
                        image.setAttribute("src", circleImg);
                        this.appendChild(image);
                        setTimeout(() => { gameboard.putMarkO(i) }, 200);

                    } else {
                        image.setAttribute("src", crossImg);
                        this.appendChild(image);
                        setTimeout(() => { gameboard.putMarkX(i) }, 200);
                    }
                    player = (player === "O") ? "X" : "O";
                }
            })
        }
        reButton.addEventListener("click", () => {
            gameboard.resetGame()
        })
    }
    const clear = function () {
        for (let i = 0; i < 9; i++) {
            let cell = document.getElementById(i);
            if (cell.children.length > 0) {
                cell.removeChild(cell.firstChild)
            }
        }
        player = "O";
    }
    init()
    return {clear};
})()
