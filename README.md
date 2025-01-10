# Tic-Tac-Toe-Game 🎮

Welcome to the **Tic Tac Toe** game! This project is a simple, fun, and interactive implementation of the classic **Tic Tac Toe** game using **HTML**, **CSS**, and **JavaScript**. Play against a friend and see who can get three in a row first! ❌⭕

---

## Features ✨

- **Two-player gameplay**: The game allows two players to take turns marking 'O' and 'X' on the grid. 🙋‍♂️🙋‍♀️

- **Win detection**: The game automatically detects a winner when a player aligns three marks vertically, horizontally, or diagonally. 🏆

- **Draw detection**: If all the cells are filled and there's no winner, the game will declare a draw. 😔

- **Responsive design**: The layout adapts to both desktop and mobile screens, so you can play on any device! 📱💻

- **Reset functionality**: Start a new game anytime with the **Reset Game** button. 🔄

---
  
## How to Play 🕹️

1. The game board is a **3x3 grid** consisting of nine cells.

2. **Player 1** uses the **'O'** symbol and **Player 2** uses the **'X'** symbol.

3. Players take turns clicking on an empty cell to place their respective symbol.

4. The first player to align three of their symbols in a row, column, or diagonal wins the game! 🏅

5. If all cells are filled and no player wins, the game ends in a draw. 💥

6. Click the **Reset Game** button to start over. 🔄

---

## Project Setup ⚙️

To set up and play the **Tic Tac Toe** game locally, follow these steps:

### 1. Clone the repository:

```bash
git clone https://github.com/yourusername/Tic-Tac-Toe-Game.git
```

### 2. Open the project folder:

Navigate to the project folder on your computer.

### 3. Open the `index.html` file:

Simply open the index.html file in any modern web browser (Chrome, Firefox, etc.) to start playing the game. 🎮

---

## File Structure 📁

Here's an overview of the project structure:

```bash
Tic-Tac-Toe-Game/
├── index.html      # The main HTML file that contains the game board and the layout
├── style.css       # The CSS file for the design, styling, and responsive behavior
├── script.js       # JavaScript file containing the game logic and interactivity
└── README.md       # This file, documenting the project
```

---

## Description of Files 🗂️

### `index.html` 📝

This file contains the basic structure of the game, including:

- The **game board** (a 3x3 grid).

- The **game title**.

- The **reset button** to restart the game.

### `style.css` 🎨

This file handles the **styling** of the game:

- Visual designs for the game board, buttons, and text.

- Responsive layout for mobile devices, ensuring the game looks great on any screen size.

### `script.js` 🧠

This file contains the **JavaScript code** that drives the game’s logic:

- **Player Turn Management**: Alternates between 'O' and 'X'.

- **Win Detection**: Checks for horizontal, vertical, and diagonal wins.

- **Draw Detection**: Detects when the game ends in a draw.

- **Reset Functionality**: Allows players to restart the game.

---

## How It Works 🔍

### 1. **HTML Layout** 📝

- The **game board** is built using a grid of `<div>` elements with the class `box`. There are 9 cells representing the **3x3 Tic Tac Toe grid**.

- Each **box** has an `id` (ranging from 0 to 8) to track the player's moves and map the positions on the grid.

- The **Reset Game** button is positioned fixed on the screen, allowing players to restart the game at any time.

### 2. **CSS Styling** 🎨

- The layout is styled with a **modern, clean, and responsive design**.

- The game board has a fixed size of **450px by 450px** on larger screens. It **adjusts** based on screen size for **mobile devices**.

- The cells are styled to look interactive, with borders to separate the boxes, and hover effects for a smooth user experience.

#### Key CSS Properties:

- **Grid Layout**: The boxes are displayed using **flexbox**, ensuring they are aligned neatly.

- **Responsive Design**: The game board and text **scale down** on smaller screens like **mobile devices** using **media queries**.

### 3. **JavaScript Logic** 🧠

#### Key Features:

- **Player Turns**: The game alternates turns between **Player 1 (O)** and **Player 2 (X)**. Each time a player clicks on a box, their symbol is placed in that cell.
  
- **Win Conditions**: The game checks for any of the following winning combinations:
  
  - **Rows**: `[0, 1, 2]`, `[3, 4, 5]`, `[6, 7, 8]`
  
  - **Columns**: `[0, 3, 6]`, `[1, 4, 7]`, `[2, 5, 8]`
  
  - **Diagonals**: `[0, 4, 8]`, `[2, 4, 6]`

- **Draw Detection**: The game detects a draw if all spaces are filled and no player has won. 🏁

- **Game Reset**: Clicking the **Reset Game** button clears the board and resets the game state, allowing players to play again. 🔄

---

<!-- ## Demo 🎥
Here is a GIF showing how the game looks and works:

![Tic Tac Toe Demo](assets/tic-tac-toe-demo.gif) -->

---

## How to Contribute 🤝
We welcome contributions to enhance and improve the game! If you’d like to contribute, follow these steps:

1. **Fork the repository to your GitHub account**.

2. **Clone your fork to your local machine**.

3. **Create a new branch for your changes**:

```bash
git checkout -b feature/your-feature-name
```

4. **Make your changes and test them**.

5. **Commit your changes**:

```bash
git commit -m 'Add a feature'
```

6. **Push your changes to your fork**:

```bash
git push origin feature/your-feature-name
```

7. **Open a Pull Request (PR) from your fork’s branch to the original repository**.

We’ll review your PR and, if everything looks good, we’ll merge it into the main codebase! 🚀

---

## Acknowledgements 🙏

- Special thanks to the **open-source community** for the inspiration and tools used in this project.

- A big shoutout to **[MDN Web Docs](https://developer.mozilla.org/)** for their comprehensive resources that helped guide the development process. 📚

---

Thank you for checking out this project! We hope you enjoy playing the game as much as we enjoyed building it! 🎉

Happy gaming! 🥳🎮
