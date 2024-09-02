let textEl = document.getElementById("text");
let restartBtn = document.getElementById("restartBtn");
let boxes = Array.from(document.getElementsByClassName("box"));

const O_letter = `O`;
const X_letter = `X`;

let currentPlayer = O_letter;

let spaces = Array(9).fill(null);

const startGame = () => {
  boxes.forEach((box) => box.addEventListener("click", boxClicked));
};

function boxClicked(e) {
  const id = e.target.id;

  if (spaces[id] === null) {
    spaces[id] = currentPlayer;
    e.target.innerText = currentPlayer;

    if (checkWin()) {
      alert(`Player ${currentPlayer} wins!`);
      resetGame();
    } else if (checkDraw()) {
      alert("It's a draw!");
      resetGame();
    } else {
      currentPlayer = currentPlayer === O_letter ? X_letter : O_letter;
    }
  }
}

function checkWin() {
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  return winningCombinations.some((combination) =>
    combination.every((index) => spaces[index] === currentPlayer)
  );

  // Add more winning combinations as needed for a larger board
}

function checkDraw() {
  return spaces.every((space) => space !== null);
}

function resetGame() {
  spaces.fill(null);
  boxes.forEach((box) => (box.innerText = ""));
  currentPlayer = O_letter;
  startGame();
}

startGame();

// Add a reset button to the game

restartBtn.addEventListener("click", () => {
  resetGame();
});

startTimer();
