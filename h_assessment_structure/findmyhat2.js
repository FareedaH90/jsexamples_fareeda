const prompt = require("prompt-sync")({ sigint: true });
const chalk = require("chalk");

// Game elements (colored)
const GRASS = chalk.green("░");
const HOLE = chalk.red("O");
const HAT = chalk.yellow("^");
const PLAYER = chalk.cyan("*");
const PATH = chalk.gray("·");

// Movement keys
const UP = "w";
const DOWN = "s";
const LEFT = "a";
const RIGHT = "d";
const QUIT = "q";

// Globals set later
let ROWS, COLS;

// ==============================
// CLASS FIELD
// ==============================
class Field {
  constructor(field) {
    this.field = field;
    this.playerPosition = { x: 0, y: 0 };
    this.hatPosition = { x: 0, y: 0 };
    this.moves = 0;
  }

  // Generate random field
  static generateField(rows, cols) {
    const map = [];
    for (let r = 0; r < rows; r++) {
      map[r] = [];
      for (let c = 0; c < cols; c++) {
        map[r][c] = Math.random() > 0.2 ? GRASS : HOLE;
      }
    }
    return map;
  }

  // Set hat location in a safe spot
  setHat() {
    let x, y;
    do {
      x = Math.floor(Math.random() * (COLS - 1)) + 1;
      y = Math.floor(Math.random() * (ROWS - 1)) + 1;
    } while (this.field[y][x] === HOLE);

    this.field[y][x] = HAT;
    this.hatPosition = { x, y };
  }

  // ==============================
  // TRAP CHECK — avoids impossible maps
  // ==============================
  trapCheck() {
    const rightBlocked = this.field[0][1] === HOLE;
    const downBlocked = ROWS > 1 && this.field[1][0] === HOLE;

    if (rightBlocked && downBlocked) {
      this.field[0][1] = GRASS;
      console.log(chalk.yellow("✓ Trap fixed: escape path created."));
    }

    const hx = this.hatPosition.x;
    const hy = this.hatPosition.y;

    let reachable =
      (hy > 0 && this.field[hy - 1][hx] !== HOLE) ||
      (hy < ROWS - 1 && this.field[hy + 1][hx] !== HOLE) ||
      (hx > 0 && this.field[hy][hx - 1] !== HOLE) ||
      (hx < COLS - 1 && this.field[hy][hx + 1] !== HOLE);

    if (!reachable) {
      this.field[hy - 1][hx] = GRASS;
      console.log(chalk.yellow("✓ Trap fixed: path to hat unlocked."));
    }
  }

  // Display field
  printField() {
    console.clear();
    console.log(chalk.cyan("=".repeat(50)));
    console.log(chalk.white(`Moves: ${chalk.yellow(this.moves)}`));
    console.log(chalk.cyan("=".repeat(50)));

    console.log("\nControls:");
    console.log(`  ${chalk.cyan("[W]")} Up`);
    console.log(`  ${chalk.cyan("[A]")} Left`);
    console.log(`  ${chalk.cyan("[S]")} Down`);
    console.log(`  ${chalk.cyan("[D]")} Right`);
    console.log(`  ${chalk.cyan("[Q]")} Quit`);
    console.log();

    this.field.forEach((row) => console.log("  " + row.join("")));
    console.log();
    console.log(chalk.gray("Legend: * = You | ^ = Hat | O = Hole | · = Path"));
    console.log();
  }

  // Update player movement + collisions
  updateGame(move) {
    // capture the player's currX and currY position first
    const currX = this.playerPosition.x;
    const currY = this.playerPosition.y;

    // update the field to show the player's previous path
    this.field[currY][currX] = PATH;

    // Update position
    switch (move) {
      case UP:
        this.playerPosition.y -= 1;
        break;
      case DOWN:
        this.playerPosition.y += 1;
        break;
      case LEFT:
        this.playerPosition.x -= 1;
        break;
      case RIGHT:
        this.playerPosition.x += 1;
        break;
      default:
        return;
    }

    this.moves++;

    const x = this.playerPosition.x;
    const y = this.playerPosition.y;

    // Out of bounds
    if (y < 0 || y >= ROWS || x < 0 || x >= COLS) {
      this.printField();
      console.log(chalk.red.bold("✗ GAME OVER — Out of bounds!\n"));
      process.exit();
    }

    // Hole
    if (this.field[y][x] === HOLE) {
      this.printField();
      console.log(chalk.red.bold("✗ GAME OVER — Fell into a hole!\n"));
      process.exit();
    }

    // Hat → WIN
    if (this.field[y][x] === HAT) {
      this.printField();
      console.log(chalk.green.bold("✓ YOU WIN — You found your hat!\n"));
      process.exit();
    }

    // Move player to new location
    this.field[y][x] = PLAYER;
  }

  // Start game loop
  start() {
    this.field[0][0] = PLAYER;
    this.setHat();
    this.trapCheck();

    console.log(chalk.magenta("\nGame ready — press ENTER to begin!"));
    prompt("");

    while (true) {
      this.printField();
      const input = prompt("Your move: ").toLowerCase();

      if (input === QUIT) {
        console.log(chalk.gray("\nThanks for playing!"));
        break;
      }

      this.updateGame(input);
    }
  }
}

// ==============================
// WELCOME MESSAGE (NO FUNCTION)
// ==============================
console.clear();
console.log(
  chalk.cyan.bold(`
┌────────────────────────────────────────────┐
│           🎩 FIND YOUR HAT GAME 🎩         │
└────────────────────────────────────────────┘

Welcome! Your goal is simple:
  • Move your player (*)  
  • Avoid the holes (O)  
  • Reach the hat (^) to win!

Controls:
  • W = Up
  • A = Left
  • S = Down
  • D = Right
  • Q = Quit

Let's set up your game!
`)
);

// ==================================
// USER ROW / COL INPUT
// ==================================
while (true) {
  ROWS = parseInt(prompt("Enter number of rows (5–20): "));
  COLS = parseInt(prompt("Enter number of columns (5–20): "));

  if (
    !isNaN(ROWS) &&
    !isNaN(COLS) &&
    ROWS >= 5 &&
    ROWS <= 20 &&
    COLS >= 5 &&
    COLS <= 20
  ) {
    break;
  }

  console.log(chalk.red("Invalid input — try again.\n"));
}

console.log(
  chalk.green(`\n✓ Creating a ${ROWS} x ${COLS} game field...`)
);

// Build and start game
const gameField = Field.generateField(ROWS, COLS);
const game = new Field(gameField);
game.start();
