# 🎩 Find Your Hat - Terminal Game

A colorful command-line game where you navigate through a field to find your hat while avoiding holes and staying within boundaries!

[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow.svg)](https://www.javascript.com/)
[![Node.js](https://img.shields.io/badge/Node.js-14+-green.svg)](https://nodejs.org/)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

![Game Preview](https://img.shields.io/badge/Status-Complete-success)

---

## 📋 Table of Contents

- [About the Project](#about-the-project)
- [Game Description](#game-description)
- [Features](#features)
- [Coordinate System](#coordinate-system)
- [Installation](#installation)
- [How to Play](#how-to-play)
- [Code Structure](#code-structure)
- [Technologies Used](#technologies-used)
- [What I Learned](#what-i-learned)
- [Challenges & Solutions](#challenges--solutions)
- [Future Enhancements](#future-enhancements)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

---

## 🎯 About the Project

This project is a terminal-based game developed as part of a JavaScript coding assessment. The challenge was to implement the core game logic (`updateGame()` method) to handle player movement, collision detection, and win/lose conditions.

**Assessment Focus:** Implementation of the `updateGame()` method with:
- Position tracking (old vs new)
- Movement calculation
- Boundary validation
- Collision detection
- Trail clearing

---

## 🎮 Game Description

Navigate your character (`*`) through a field of grass (`░`) to find your hat (`^`) while avoiding dangerous holes (`O`). Make one wrong move and you'll either:
- 💀 Fall into a hole
- 🚫 Step out of bounds

Can you find your hat and win? 🏆

---

## ✨ Features

### Core Gameplay
- 🎯 **Dynamic Field Generation** - Randomized 10x10 field with 20% hole density
- 🚶 **Trail-Free Movement** - Old positions are cleared (no messy `*` trail)
- ⚠️ **Multiple Lose Conditions** - Holes and boundary violations
- 🏆 **Win Condition** - Successfully reach your hat
- 🎨 **Colorful Terminal Display** - Using chalk for enhanced visuals

### Technical Features
- ✅ **Object-Oriented Design** - Clean class-based architecture
- ✅ **2D Array Management** - Proper coordinate system implementation
- ✅ **State Management** - Separate tracking of old and new positions
- ✅ **Input Validation** - Handles invalid moves gracefully
- ✅ **Well-Commented Code** - Clear documentation throughout

---

## 📐 Coordinate System

Understanding the coordinate system is crucial for this game:
```
field[row][column] = field[y][x]

     COLUMNS (x-axis) →
       0   1   2   3   4
     ┌───┬───┬───┬───┬───┐
   0 │ * │ ░ │ O │ ░ │ ░ │  ← Row 0 (y=0)
     ├───┼───┼───┼───┼───┤
R  1 │ ░ │ ░ │ ░ │ O │ ░ │  ← Row 1 (y=1)
O    ├───┼───┼───┼───┼───┤
W  2 │ ░ │ O │ ░ │ ░ │ ░ │  ← Row 2 (y=2)
S    ├───┼───┼───┼───┼───┤
   3 │ ░ │ ░ │ ░ │ ^ │ ░ │  ← Row 3 (y=3)
(y)  └───┴───┴───┴───┴───┘
 ↓       ↑
         Column 1 (x=1)
```

### Key Concepts

| Axis | Represents | Movement |
|------|------------|----------|
| **x** | Column (horizontal) | LEFT: `x--`, RIGHT: `x++` |
| **y** | Row (vertical) | UP: `y--`, DOWN: `y++` |

### Array Access Examples
```javascript
field[0][0]  // Player starting position: * (top-left)
field[3][3]  // Hat position: ^ (row 3, column 3)
field[0][2]  // Hole at row 0, column 2

// Moving the player RIGHT from (0,0):
// Old position: field[0][0] = GRASS (clear trail)
// New position: field[0][1] = PLAYER
```

---

## 📦 Installation

### Prerequisites
- Node.js (v14 or higher)
- npm (Node Package Manager)

### Setup Steps

1. **Clone the repository:**
```bash
git clone https://github.com/FareedaH90/jsexamples_fareeda.git
cd jsexamples_fareeda/h_assessment_structure
```

2. **Install dependencies:**
```bash
npm install
```

Or install packages individually:
```bash
npm install prompt-sync
npm install chalk
```

3. **Run the game:**
```bash
node findmyhat.js
```

---

## 🎯 How to Play

### Starting the Game

Run the game using Node.js:
```bash
node findmyhat.js
```

### Controls

| Key | Action |
|-----|--------|
| `w` | Move UP (decrease row) |
| `s` | Move DOWN (increase row) |
| `a` | Move LEFT (decrease column) |
| `d` | Move RIGHT (increase column) |
| `q` | QUIT game |

### Game Elements

| Symbol | Meaning | Color |
|--------|---------|-------|
| `*` | Player (you) | Cyan |
| `^` | Hat (goal) | Yellow |
| `O` | Hole (danger!) | Red |
| `░` | Grass (safe) | Green |

### Objective

Navigate from the starting position (top-left) to the hat (`^`) without:
1. Falling into a hole (`O`)
2. Going out of bounds

### Game Preview
```
┌───────────────────────────────────────────────┐
│            ^ FIND YOUR HAT ^                  │
└───────────────────────────────────────────────┘

*░O░O░░░░░
░OO░O░O░░░
░░O░░░░░░░
O░O░░░░░░░
░░OO░░O░░░
░O░░░░░░░░
░░░░░░░░░░
░O░░░O░░░░
░░O░░░░░O░
░░░░░^░░░░

(w)up, (s)down, (a)left, (d)right, (q)exit: 
```

---

## 🏗️ Code Structure

### Class: `Field`

The main game logic is encapsulated in the `Field` class:
```javascript
class Field {
  constructor(field)           // Initialize game state
  static generateField()       // Create random field
  static welcomeMessage()      // Display welcome screen
  setHat()                     // Place hat randomly
  printField()                 // Display current field state
  updateMove()                 // Display move messages
  updateGame()                 // ⭐ Core game logic (ASSESSMENT FOCUS)
  start()                      // Main game loop
}
```

### Core Method: `updateGame()`

This is the heart of the game logic:
```javascript
/**
 * Updates game state based on player movement
 * @param {String} m - Player's move direction (UP|DOWN|LEFT|RIGHT)
 */
updateGame(m = "") {
  // 1. Capture OLD position (before moving)
  const currX = this.playerPosition.x;
  const currY = this.playerPosition.y;
  
  // 2. Clear OLD position (remove trail)
  this.field[currY][currX] = GRASS;
  
  // 3. Calculate NEW position based on move
  switch (m) {
    case UP:    this.playerPosition.y -= 1; break;
    case DOWN:  this.playerPosition.y += 1; break;
    case LEFT:  this.playerPosition.x -= 1; break;
    case RIGHT: this.playerPosition.x += 1; break;
    default:    return;
  }
  
  // 4. Store NEW position for validation
  const x = this.playerPosition.x;
  const y = this.playerPosition.y;
  
  // 5. Validate NEW position
  // Check boundaries
  if (y < 0 || y >= ROWS || x < 0 || x >= COLS) {
    console.log(OUT);
    process.exit();
  }
  
  // Check for hole
  if (this.field[y][x] === HOLE) {
    console.log(LOSE);
    process.exit();
  }
  
  // Check for hat (WIN!)
  if (this.field[y][x] === HAT) {
    console.log(WIN);
    process.exit();
  }
  
  // 6. Place player at NEW position
  this.field[y][x] = PLAYER;
}
```

### File Structure
```
jsexamples_fareeda/
└── h_assessment_structure/
    ├── findmyhat.js          # Main game file
    ├── package.json          # Dependencies
    └── README.md             # This file
```

---

## 🛠️ Technologies Used

| Technology | Purpose | Version |
|------------|---------|---------|
| **JavaScript** | Core programming language | ES6+ |
| **Node.js** | Runtime environment | v14+ |
| **prompt-sync** | Synchronous user input | ^4.2.0 |
| **chalk** | Terminal string styling | ^4.1.2 |

### Why These Technologies?

- **JavaScript ES6+**: Modern syntax with classes, const/let, arrow functions
- **Node.js**: Enables running JavaScript outside the browser
- **prompt-sync**: Simple synchronous input (easier than async for beginners)
- **chalk**: Makes terminal output colorful and engaging

---

## 🎓 What I Learned

Through implementing this project, I gained understanding of:

### Core Concepts
1. **2D Array Manipulation**
   - Understanding row/column indexing
   - Differentiating between `field[y][x]` and `field[x][y]`
   - Visualizing array coordinates

2. **Game State Management**
   - Tracking player position
   - Managing old vs new state
   - Clearing previous positions

3. **Object-Oriented Programming**
   - Class-based design
   - Instance vs static methods
   - Constructor initialization

4. **Control Flow**
   - Switch statements for movement
   - Early returns for invalid input
   - Proper order of validation checks

### Technical Skills
- ✅ Using `const` vs `let` appropriately
- ✅ Understanding scope and variable lifecycle
- ✅ Implementing game loops with `do...while`
- ✅ Terminal I/O handling
- ✅ Code documentation with JSDoc

### Problem-Solving Approach
- Breaking complex logic into small steps
- Testing edge cases (boundaries, first move)
- Debugging with console output
- Reading and understanding starter code

---

## 🚧 Challenges & Solutions

### Challenge 1: Coordinate System Confusion

**Problem:**
```javascript
// Initially confused about:
field[x][y] vs field[y][x]  // Which is correct?
x = row or column?           // What does x represent?
```

**Solution:**
- Created visual diagrams to understand array structure
- Remembered: `field[row][column]` = `field[y][x]`
- x = horizontal (column), y = vertical (row)
- Tested with non-square fields (10×5) to catch bugs

---

### Challenge 2: Understanding Old vs New Position

**Problem:**
```javascript
// Why do I need BOTH of these?
const currX = this.playerPosition.x;  // Old position
const x = this.playerPosition.x;      // New position (later)
// Seemed redundant!
```

**Solution:**
Realized they serve different purposes:
- `currX/currY`: Captured BEFORE moving (for clearing trail)
- `x/y`: Captured AFTER moving (for validation)
```javascript
// Timeline:
// 1. Save old position
const currX = this.playerPosition.x;  // currX = 3

// 2. Clear old position
this.field[currY][currX] = GRASS;

// 3. Move player
this.playerPosition.x += 1;  // Now x = 4

// 4. Validate new position
const x = this.playerPosition.x;  // x = 4 (different from currX!)
```

---

### Challenge 3: TODO Comment Errors

**Problem:**
The starter code had swapped messages:
```javascript
// TODO comments said:
// if hole → OUT (wrong!)
// if out of bounds → LOSE (wrong!)
```

**Solution:**
- Analyzed the logic carefully
- Realized comments were incorrect
- Implemented correct behavior:
  - Hole → LOSE
  - Out of bounds → OUT

---

### Challenge 4: Trail of Player Characters

**Problem:**
```javascript
// Without clearing old position:
**░O░  // Player left a trail of *
░*O░░
░░*░░
```

**Solution:**
```javascript
// Capture and clear BEFORE moving:
const currX = this.playerPosition.x;
const currY = this.playerPosition.y;
this.field[currY][currX] = GRASS;  // Clear old position

// Then move...
```

---

### Challenge 5: const vs let Decision

**Problem:**
When should I use `const` vs `let` for position variables?

**Solution:**
```javascript
// Use const when NOT reassigning:
const currX = this.playerPosition.x;  // ✅ Never changes
const x = this.playerPosition.x;      // ✅ Never changes

// Use let when reassigning:
let x = this.playerPosition.x;
x = x + 1;  // Reassigning → use let
```

---

## 🚀 Future Enhancements

Potential features to add:

### Difficulty Levels
- [ ] Easy: 5×5 field, 10% holes
- [ ] Normal: 10×10 field, 20% holes (current)
- [ ] Hard: 15×15 field, 30% holes
- [ ] Expert: 20×20 field, 40% holes

### Gameplay Features
- [ ] **Score System** - Track moves and time
- [ ] **Lives System** - 3 chances before game over
- [ ] **Power-ups** - Collect items to jump over holes
- [ ] **Moving Enemies** - Pac-Man style wandering obstacles
- [ ] **Multiple Levels** - Progress through increasing difficulty
- [ ] **Save/Load Game** - Resume from where you left off

### Technical Improvements
- [ ] **HTML/CSS Version** - Web-based UI with canvas
- [ ] **Sound Effects** - Audio feedback for moves/wins/losses
- [ ] **Animations** - Smooth player movement
- [ ] **Leaderboard** - Track best scores/times
- [ ] **Replay System** - Watch your winning run

### Code Quality
- [ ] **Unit Tests** - Jest test suite
- [ ] **TypeScript** - Type safety
- [ ] **ESLint** - Code quality enforcement
- [ ] **CI/CD** - Automated testing and deployment

---

## 👩‍💻 Author

**Fareeda H.**

- GitHub: [@FareedaH90](https://github.com/FareedaH90)
- Repository: [jsexamples_fareeda](https://github.com/FareedaH90/jsexamples_fareeda)
- Project: [Find Your Hat](https://github.com/FareedaH90/jsexamples_fareeda/blob/main/h_assessment_structure/findmyhat.js)

---

## 🙏 Acknowledgments

- **Chalk Library** - For making terminal output colorful and engaging
- **prompt-sync** - For simple synchronous input handling
- **Martin Leong** - For providing clear requirements and feedback


## 📝 Project Context

This project was completed as part of a JavaScript coding assessment where:
- **Provided:** Starter code with game structure and helper methods
- **Required:** Implementation of the `updateGame()` method
- **Focus:** Game logic, state management, and coordinate systems
- **Time Frame:** [Add your timeframe]
- **Status:** ✅ Complete

---

## 📜 License

This project was created for educational purposes as part of a coding assessment.

---

## 🎮 Try It Yourself!
```bash
# Quick start:
git clone https://github.com/FareedaH90/jsexamples_fareeda.git
cd jsexamples_fareeda/h_assessment_structure
npm install
node findmyhat.js
```

**Enjoy the game!** 🎩✨

---

## 📊 Project Stats

![Lines of Code](https://img.shields.io/badge/Lines%20of%20Code-200+-blue)
![Methods Implemented](https://img.shields.io/badge/Methods-8-green)
![Test Coverage](https://img.shields.io/badge/Assessment%20Focus-updateGame()-yellow)
![Status](https://img.shields.io/badge/Status-Complete-success)

---

<div align="center">

**Made with ❤️ and JavaScript**

[⬆ Back to Top](#-find-your-hat---terminal-game)

</div>