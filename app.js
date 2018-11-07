let squares = document.querySelectorAll('.square');

squares.forEach(function(square) {
    square.addEventListener("click", cellClicked);
});

function cellClicked(e) {
    alert(e.target.textContent);
}