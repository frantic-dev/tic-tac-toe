const ticTacToe = (() => {
    
    let gameBoard = ['','','','','','','','',''];
    
    let spots = document.querySelectorAll('.spot-btn');
    spots = [...spots];

    const restartBtn = document.querySelector('#restart-btn');

    restartBtn.addEventListener('click', () => spots.forEach((spot)=> {
        spot.value = "";
        resultDiv.textContent = "";
        gameBoard = ['','','','','','','','',''];
    } ))

    function alternateMoves () {
        let movesX = gameBoard.filter((move) => move == player1.moves).length;
        let movesO = gameBoard.filter((move) => move == player2.moves).length
        if (movesX == movesO) return player1.moves;
        else if (movesX > movesO) return player2.moves
    }
    
    const resultDiv = document.querySelector('#result');
    
    function playRound() {
        for (let i = 0; i < spots.length ; i++) {
            spots[i].addEventListener('click', () => {
                if(spots[i].value == "" && resultDiv.textContent == "") {
                    spots[i].value = alternateMoves();
                    gameBoard[i] = spots[i].value;
                    console.log(gameBoard)
                    resultDiv.textContent = gameWon();
                    gameTie()
                    showResult()
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
                if(player1.moves === row[0]) {
                    return result = player1.name + " won!!!";
                } else return result = player2.name + " won!!"
            }
        })
        convertToMultiD().cols.forEach((col) => {
            if (col[0] == col[1] && col[0] == col[2] && col[0] != "") {
                if(player1.moves === col[0]) return result = player1.name+ " has won biiii-";
                else return result = player2.name + " has won biii-";
            }
        })
        convertToMultiD().across.forEach((diagonal) => {
            if(diagonal[0] == diagonal[1] && diagonal[0] == diagonal[2] && diagonal[0] != "") {
                if(player1.moves === diagonal[0]) return result = "oof you won " + player1.name;
                else return result = 'oof you won ' + player2.name;
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

    const startBtn = document.querySelector('#start-btn');
    const playersContainer = document.querySelector('#players-container');
    const board = document.querySelector('#board');
    let player1Name = document.querySelector('#player1-input');
    let player2Name = document.querySelector('#player2-input');

    startBtn.addEventListener('click', () => {
        startBtn.setAttribute('style', 'display: none');
       playersContainer.setAttribute('style', 'display: none;');
        restartBtn.setAttribute('style', 'display: block');
        board.setAttribute('style', 'display: grid');
        getPlayers()
    })

    let player1;
    let player2;

    function getPlayers() {
        player1Name = player1Name.value;
        player2Name = player2Name.value;
        player1 = Players(player1Name, "X");
        player2 = Players(player2Name, "O")
    }
 
    // const exitResultBtn = document.querySelector('#exit-result-btn');
    // const resultContainer = document.querySelector('#result-container')
    
    exitResultBtn.addEventListener('click', () => resultContainer.setAttribute('style', 'display: none;'))
    
    function showResult() {
        if(resultDiv.textContent != "") {
            resultContainer.style.display = "flex";
        }
    }

    function Players (name, moves) {
        return {name, moves};
    }

    const exitResultBtn = document.querySelector('#exit-result-btn');
    const resultContainer = document.querySelector('#result-container')
    
    exitResultBtn.addEventListener('click', () => resultContainer.setAttribute('style', 'display: none;'))
    
    function showResult() {
        if(resultDiv.textContent != "") {
            resultContainer.style.display = "flex";
        }
    }

    function Players (name, moves) {
        return {name, moves};
    }


    return {playRound, getPlayers}
})()

ticTacToe.playRound()


