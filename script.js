const ticTacToe = (() => {
    
    let gameBoard = ['','','','','','','','',''];
    
    // function GameBoard (gameSpots) {
    //     gameBoard.push(gameSpots);
    //     return gameBoard;
    // }

    let spots = document.querySelectorAll('.spot-btn');
    spots = [...spots];

    const resetBtn = document.querySelector('#reset-btn');

    resetBtn.addEventListener('click', () => spots.forEach((spot)=> {
        spot.value = "";
        resultDiv.textContent = "";
        gameBoard = ['','','','','','','','',''];
    } ))

    function alternateMoves() {
        let movesX = gameBoard.filter((move) => move == "X").length;
        let movesO = gameBoard.filter((move) => move == "O").length
        if (movesX == movesO) return 'X';
        else if (movesX > movesO) return "O"
    }
    
    const resultDiv = document.querySelector('#result');
    
    function syncSpots() {
        for (let i = 0; i < spots.length ; i++) {
            spots[i].addEventListener('click', () => {
                if(spots[i].value == "" && resultDiv.textContent == "") {
                    spots[i].value = alternateMoves();
                    gameBoard[i] = spots[i].value;
                    console.log(gameBoard)
                    resultDiv.textContent = gameWon();
                    gameTie()

                }
            }
            )}
    }
        
    function convertToMultiD() {
        let multiDBoard = {
            rows : [[gameBoard[0] , gameBoard[1] , gameBoard[2]],[ gameBoard[3] , gameBoard[4] , gameBoard[5]],[gameBoard[6] , gameBoard[7] , gameBoard[8]]],
            cols:[[gameBoard[0] ,  gameBoard[3] , gameBoard[6]],[gameBoard[1], gameBoard[4] , gameBoard[7]],[gameBoard[2] , gameBoard[5] , gameBoard[8]]],
            across:[[gameBoard[0] , gameBoard[4] , gameBoard[8]],[gameBoard[2] , gameBoard[4] , gameBoard[6]]]
        };
        return multiDBoard;
    }

    function gameWon() {
        let result = "";

        convertToMultiD().rows.forEach((row) => {
            if (row[0] == row[1] && row[0] == row[2] && row[0] != "") {
                return result = row[0] + " won!!!";
            }
        })
        convertToMultiD().cols.forEach((col) => {
            if (col[0] == col[1] && col[0] == col[2] && col[0] != "") {
                return result = col[0] + " has won biiii-";
            }
        })
        convertToMultiD().across.forEach((diagonal) => {
            if(diagonal[0] == diagonal[1] && diagonal[0] == diagonal[2] && diagonal[0] != "") {
                return result = "oof you won " + diagonal[0];
            }
        })
        return result;
    }

    function gameTie() {
        let emptySpots = 9;
        for (let spot of gameBoard) {
            if(spot != "") emptySpots--;
            if(emptySpots == 0 && resultDiv.textContent == "") return resultDiv.textContent = "it's a tie."
        }
    }
        
    function Players (player, moves) {
        return {player};
    }


    return {Players, syncSpots, spots, gameBoard, convertToMultiD}
})();


ticTacToe.syncSpots()








