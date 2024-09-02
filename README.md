# Tic-Tac-Toe Game 🎮

Overview

    This is a simple Tic-Tac-Toe game built using HTML, CSS, and JavaScript. The game allows two players to 
    take turns marking spaces in a 3x3 grid. The first player to align three of their symbols (either 
    vertically, horizontally, or diagonally) wins the game. If all spaces are filled without a winner, the 
    game ends in a draw.
    
Features

    • Two-player mode (Player X and Player O).

    • Winning/draw with alerts.

    • Reset button to start a new game.

Technologies Used

    • HTML: Defines the structure of the game board and user interface.

    • CSS: Styles the board, buttons, and text to make the game visually appealing.

    • JavaScript: Implements the game logic, checks for win/draw conditions, and resets the game.

How to Play

    1. Open the index.html file in your browser.

    2. The game begins with Player O's turn.

    3. Players take turns clicking on the grid cells to place their symbols (X or O).

    4.The game checks for a winner after each turn:

      • If a player gets three of their symbols in a row (horizontally, vertically, or diagonally), a 
         winning alert message will be displayed.

      • If all cells are filled and there is no winner, the game declares a draw.

    5. Click the Ok/Reset button to start a new game at any time.

Folder Structure:

    📦tic-tac-toe-game
    ┣ 📂css
    ┃ ┗ 📜style.css       # CSS for styling the game
    ┣ 📂js
    ┃ ┗ 📜app.js          # JavaScript for game logic
    ┗ 📜index.html        # HTML structure of the game

Code Highlights
• HTML
The HTML structure consists of a simple flex layout for the Tic-Tac-Toe board:

 <!-- Board -->
    <div id="board">
        <!-- Game Box -->
        <div class="box box-0" id="0"></div>
        <div class="box box-1" id="1"></div>
        <div class="box box-2" id="2"></div>
        <div class="box box-3" id="3"></div>
        <div class="box box-4" id="4"></div>
        <div class="box box-5" id="5"></div>
        <div class="box box-6" id="6"></div>
        <div class="box box-7" id="7"></div>
        <div class="box box-8" id="8"></div>
      </div>
    </div>

• CSS
The CSS styles the grid and handles the visual appearance of the game:

    #board {
      width: 450px;
      display: flex;
      flex-wrap: wrap;
      margin-top: 95px;
    }

    .box {
      height: 150px;
      width: 150px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 120px;
      border-right: 2px solid #8bc6ec;
      border-bottom: 2px solid #8bc6ec;
      font-family: "Kalnia Glaze", serif;
      cursor: pointer;
    }

• JavaScript
The JavaScript handles the game logic and checks for winning conditions:

    let boxes = Array.from(document.getElementsByClassName("box"));

    let currentPlayer = O_letter;

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

Setup Instructions:

    1. Clone or download the repository. 

    2. Open the index.html file in your preferred web browser.

    3. Start playing!

Future Enhancements

    • Add AI for single-player mode.

    • Implement score tracking for multiple rounds.

    • Add animations for winning combinations.
