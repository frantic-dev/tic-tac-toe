const ticTacToe = (() => {
    
    let gameBoard = ['','','','','','','','',''];
    
    function GameBoard (gameSpots) {
        gameBoard.push(gameSpots);
        return gameBoard;
    }

    let spots = document.querySelectorAll('.spot-btn');
    spots = [...spots];

    const resetBtn = document.querySelector('#reset-btn');

    resetBtn.addEventListener('click', () => spots.forEach((spot)=> {
        spot.value = "";
        return gameBoard = ['','','','','','','','',''];
    } ))

    function playerMoves() {
        let movesX = gameBoard.filter((move) => move == "X").length;
        let movesO = gameBoard.filter((move) => move == "O").length
        if (movesX == movesO) return 'X';
        else if (movesX > movesO) return "O"
        }
    
    function syncSpots() {
        for (let i = 0; i < spots.length ; i++) {
            spots[i].addEventListener('click', () => {
                spots[i].value = playerMoves();
                gameBoard[i] = spots[i].value;
                console.log(gameBoard)
            }
            )}
        }
        
        
    function Players (player, moves) {
        return {player};
    }


    return {Players, syncSpots, spots, gameBoard}
})();


ticTacToe.syncSpots()








