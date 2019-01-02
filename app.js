let squares = document.querySelectorAll('.square');
let currentPlayer = 'X';
let gameOver = false;
let currentTurn = 1;

squares.forEach(function (square) {
    square.addEventListener("click", squareClicked);
});

function squareClicked(e) {

    if (gameOver === true) {
        resetGame();
        return;
    }

    if (e.target.textContent !== '') {
        return;
    }

    e.target.textContent = currentPlayer;
    checkGame();
    togglePlayer();
    ++currentTurn;
};

function checkGame() {
    if (checkTop() || checkMiddle() || checkBottom() || checkLeft() || checkCenter() || checkRight() || checkMainDiagonal() || checkMinorDiagonal()) {
        results.textContent = currentPlayer + " Wins!";
        gameOver = true;
    } else if (currentTurn == 9) {
        results.textContent = "Draw!"
        gameOver = true;
    } else {
        gameOver = false;
    }

};

function checkTop() {
    if (squares[0].textContent === squares[1].textContent && squares[1].textContent === squares[2].textContent && !isEmpty(0, 1, 2)) {
        return true;
    } else {
        return false;
    }
};

function checkMiddle() {
    if (squares[3].textContent === squares[4].textContent && squares[4].textContent === squares[5].textContent && !isEmpty(3, 4, 5)) {
        return true;
    } else {
        return false;
    }
};

function checkBottom() {
    if (squares[6].textContent === squares[7].textContent && squares[7].textContent === squares[8].textContent && !isEmpty(6, 7, 8)) {
        return true;
    } else {
        return false;
    }
};

function checkLeft() {
    if (squares[0].textContent === squares[3].textContent && squares[3].textContent === squares[6].textContent && !isEmpty(0, 3, 6)) {
        return true;
    } else {
        return false;
    }
};

function checkCenter() {
    if (squares[1].textContent === squares[4].textContent && squares[4].textContent === squares[7].textContent && !isEmpty(1, 4, 7)) {
        return true;
    } else {
        return false;
    }
};

function checkRight() {
    if (squares[2].textContent === squares[5].textContent && squares[5].textContent === squares[8].textContent && !isEmpty(2, 5, 8)) {
        return true;
    } else {
        return false;
    }
};

function checkMainDiagonal() {
    if (squares[0].textContent === squares[4].textContent && squares[4].textContent === squares[8].textContent && !isEmpty(0, 4, 8)) {
        return true;
    } else {
        return false;
    }
};

function checkMinorDiagonal() {
    if (squares[2].textContent === squares[4].textContent && squares[4].textContent === squares[6].textContent && !isEmpty(2, 4, 6)) {
        return true;
    } else {
        return false;
    }
};

function isEmpty(a, b, c) {
    if (squares[a].textContent === "" || squares[b].textContent === "" || squares[c].textContent === "") {
        return true;
    } else {
        return false;
    }
};

function togglePlayer() {
    if (currentPlayer === 'X') {
        currentPlayer = 'O';
    } else {
        currentPlayer = 'X';
    }
};

function resetGame() {

    document.getElementById('results').textContent = '';
    squares.forEach(function (square) {
        square.textContent = '';
    });
    gameOver = false;
    currentTurn = 1;
};