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
                alert(player + " is the winner");
                
            }
        })
    }
    return { gameboard, putMarkX, putMarkO }
})();

const display = (function display() {
    const circleImg = "asset/circle-svgrepo-com.svg";
    const crossImg = "asset/cross-svgrepo-com.svg";
    let player = "O";
    // const render = function () {
    //     for (let i = 0; i < 9; i++) {
    //         if (gameboard.gameboard[i] === "X" || gameboard.gameboard[i] === "O") {
    //             let position = document.getElementById(i);
    //             let image = document.createElement("img");
    //             let marker = (gameboard.gameboard[i] === "X") ? crossImg : circleImg;
    //             image.setAttribute("src", marker);
    //             if (position.children.length > 0) {
    //                 position.removeChild(position.children[0]);
    //             };
    //             position.appendChild(image);
    //         }
    //     }
    // }
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
    }
    const clear = function() {}
    init()

    return {};
})()

