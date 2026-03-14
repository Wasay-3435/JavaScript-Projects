// Game Variables
const boxes = document.querySelectorAll(".box");
const resetBtn = document.getElementById("reset-btn");
const newBtn = document.getElementById("new-btn");
const msgContainer = document.getElementById("msg-container");
const msg = document.getElementById("msg");
const playerTurnDisplay = document.getElementById("player-turn");

let currentPlayer = "X";
let gameBoard = ["", "", "", "", "", "", "", "", ""];
let gameActive = true;

// Winning Patterns
const winPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

// Initialize game
const initializeGame = () => {
  boxes.forEach((box, index) => {
    box.innerText = "";
    box.disabled = false;
    box.addEventListener("click", () => handleBoxClick(index));
  });
};

// Update turn display
const updateTurnDisplay = () => {
  playerTurnDisplay.innerHTML = `Player: <strong>${currentPlayer}</strong>`;
};

// Handle box click
const handleBoxClick = (index) => {
  if (!gameActive || gameBoard[index] !== "") return;

  gameBoard[index] = currentPlayer;
  boxes[index].innerText = currentPlayer;
  boxes[index].disabled = true;

  checkWinner();

  if (gameActive) {
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    updateTurnDisplay();
  }
};

// Check for winner
const checkWinner = () => {
  let hasWinner = false;

  for (let pattern of winPatterns) {
    const [a, b, c] = pattern;
    if (
      gameBoard[a] !== "" &&
      gameBoard[a] === gameBoard[b] &&
      gameBoard[b] === gameBoard[c]
    ) {
      hasWinner = true;
      showWinner(gameBoard[a]);
      break;
    }
  }

  if (!hasWinner && gameBoard.every((cell) => cell !== "")) {
    showDraw();
  }
};

// Show winner
const showWinner = (winner) => {
  gameActive = false;
  msg.innerText = `🎉 Player ${winner} Wins! 🎉`;
  msgContainer.classList.remove("hide");
  disableAllBoxes();
};

// Show draw
const showDraw = () => {
  gameActive = false;
  msg.innerText = "🤝 It's a Draw! 🤝";
  msgContainer.classList.remove("hide");
};

// Disable all boxes
const disableAllBoxes = () => {
  boxes.forEach((box) => (box.disabled = true));
};

// Reset game
const resetGame = () => {
  currentPlayer = "X";
  gameBoard = ["", "", "", "", "", "", "", "", ""];
  gameActive = true;
  msgContainer.classList.add("hide");
  updateTurnDisplay();
  initializeGame();
};

// Event Listeners
resetBtn.addEventListener("click", resetGame);
newBtn.addEventListener("click", resetGame);

// Start game
updateTurnDisplay();
initializeGame();
