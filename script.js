const ticTacToe = (() => {
    
    let gameBoard = ['','','','','','','','',''];
    
    // function GameBoard (gameSpots) {
    //     gameBoard.push(gameSpots);
    //     return gameBoard;
    // }

    let spots = document.querySelectorAll('.spot-btn');
    spots = [...spots];

    
    function alternateMoves() {
        let movesX = gameBoard.filter((move) => move == "X").length;
        let movesO = gameBoard.filter((move) => move == "O").length
        if (movesX == movesO) return 'X';
        else if (movesX > movesO) return "O"
        }
    
    function syncSpots() {
        for (let i = 0; i < spots.length ; i++) {
            spots[i].addEventListener('click', () => {
                if(spots[i].value == "") {
                    spots[i].value = alternateMoves();
                    gameBoard[i] = spots[i].value;
                    console.log(gameBoard)
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

        
    function Players (player, moves) {
        return {player};
    }


    return {Players, syncSpots, spots, gameBoard, convertToMultiD}
})();


ticTacToe.syncSpots()










