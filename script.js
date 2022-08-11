const ticTacToe = (() => {

    let gameBoard = ['','X','','','O','','','',''];

    function GameBoard (gameSpots) {
        gameBoard.push(gameSpots);
        return gameBoard;
    }

    let spots = document.querySelectorAll('.spot-btn');
    spots = [...spots];

    function syncSpots() {
        for (let i = 0; i < spots.length ; i++) {
            spots[i].addEventListener('click', () => spots[i].value = 'X')
        }
    }

    function Players (player) {
        return {player};
    }


    return {GameBoard , Players, syncSpots, spots
    }
})();

ticTacToe.syncSpots()







const resetBtn = document.querySelector('#reset-btn');

resetBtn.addEventListener('click', () => ticTacToe.spots.forEach((spot)=> spot.value = ""))