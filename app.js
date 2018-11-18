let currentTurn = 0;
let movesMade = 0;
let gameover = false;
let squares = document.querySelectorAll('.square');

squares.forEach(function (square) {
    square.addEventListener("click", squareClicked);
});

function squareClicked(e) {
    if (e.target.textContent = '') {
        e.target.textContent = squareOutput(currentTurn);
    }
};

function squareOutput(currentTurn) {
    if (gameover == false) {
        if (currentTurn % 2 == 0) {
            return 'X';
        } else if (currentTurn % 2 == 1) {
            return 'O';
        } else {
            alert('Error!');
        };
    };
};