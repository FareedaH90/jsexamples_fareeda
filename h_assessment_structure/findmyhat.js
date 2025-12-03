const prompt = require("prompt-sync")({ sigint: true });
const chalk = require('chalk');  // Add chalk for colors

// DONE: Game elements/assets constants (COLORED)
const GRASS = chalk.green('░');
const HOLE = chalk.red.bold('O');
const HAT = chalk.yellow.bold('^');
const PLAYER = chalk.cyan.bold('*');

// DONE: UP / DOWN / LEFT / RIGHT / QUIT keyboard constants
const UP = "w";
const DOWN = "s";
const LEFT = "a";
const RIGHT = "d";
const QUIT = "q";

// DONE: MSG_UP / MSG_DOWN / MSG_LEFT / MSG_RIGHT / MSG_ QUIT / MSG_INVALID / MSG_WELCOME message constants
const MSG_UP = chalk.blue("You moved up.");
const MSG_DOWN = chalk.blue("You moved down.");
const MSG_LEFT = chalk.blue("You moved left.");
const MSG_RIGHT = chalk.blue("You moved right.");
const MSG_QUIT = chalk.gray("You quit the game.");
const MSG_INVALID = chalk.red("Invalid entry.");

const MSG_WELCOME = chalk.cyan.bold(`
┌───────────────────────────────────────────────┐
│            ^ FIND YOUR HAT ^                  │
└───────────────────────────────────────────────┘

The objective of this game is to get your character (*)
to your hat (^) without falling into a hole (O) or stepping
on your previous path.

Controls:
  • (w) = move up
  • (s) = move down
  • (a) = move left
  • (d) = move right
  • (q) = quit the game

Here is the starting board:
`);

// DONE: WIN / LOSE / OUT messages constants (COLORED)
const WIN = chalk.green.bold("Congratulations, you won!");
const LOSE = chalk.red.bold("You fell into a hole, you lost!");
const OUT = chalk.red.bold("You went out-of-bounds, you lost!");

// DONE: MAP ROWS, COLUMNS AND PERCENTAGE
const ROWS = 10;
const COLS = 10;
const PERCENT = 0.2;  // variable that sets % of randomisation of holes in game field to 20%

class Field {
    /**
     * DONE: constructor, a built-in method of a class (invoked when an object of a class is instantiated)
     * @param {Array} field - field is passed in as an Array to populate the property field of this class' instance
     */
    constructor(field = null) {
        this.field = field;
        this.gamePlay = false;              // game is by default = false
        this.playerPosition = { x: 0, y: 0 };  // player position is by default {x:0, y:0}
    }

    /**
     * DONE: generateField is a static method, returning a 2D array of the fields
     * @param {Number} rows     - rows for the field  
     * @param {Number} cols     - cols for the field
     * @param {Number} percent  - percentage of random holes
     * @returns {Array}         - 2D array to be used by the instance of the game 
     */
    static generateField(rows = 8, cols = 8, percent = 0.1) {

        const map = new Array();

        // generate fields by rows and cols passed in
        for (let row = 0; row < rows; row++) {                      // for each row
            map[row] = new Array();                                   // create a new array

            for (let col = 0; col < cols; col++) {                    // for each col
                map[row][col] = Math.random() > percent ? GRASS : HOLE; // use Math.random() to randomise the holes in the map
            }
        }

        return map;
    }

    /**
     * DONE: welcomeMessage is a static method, displays a string
     * @param {String} msg - is a string value to print out to the user at the start of the game
     */
    static welcomeMessage(msg) {
        console.log(msg);
    }

    // DONE: setHat positions the hat along a random x and y position within field array
    setHat() {
        const xHat = Math.floor(Math.random() * (ROWS - 1)) + 1; // (0 to 3) + 1, therefore, my min x = 1
        const yHat = Math.floor(Math.random() * (COLS - 1)) + 1; // (0 to 3) + 1, therefore, my min y = 1

        this.field[xHat][yHat] = HAT;
    } 

    // DONE: printField displays the updated status of the field
    printField() {
        this.field.forEach((row) => {
            console.log(row.join(""));
        })
    }

    // DONE: updateMove displays the move (key) entered by the user
    /**
     * 
     * @param {String} m - passes in the value representing the player's move
     * @returns 
     */
    updateMove(m = "") {
        if (m === UP) return console.log(MSG_UP);            // Tell user he move up
        if (m === DOWN) return console.log(MSG_DOWN);        // Tell user he move down
        if (m === LEFT) return console.log(MSG_LEFT);         // Tell user he move left
        if (m === RIGHT) return console.log(MSG_RIGHT);       // Tell user he move right
        if (m === QUIT) return console.log(MSG_QUIT);         // Tell user he quit the game
        return console.log(MSG_INVALID);                  // Tell user he entered an invalid value
    }

/**
 * Updates game state based on player movement
 * Handles position updates, collision detection, and win/lose conditions
 * @param {String} m - Player's move direction (UP|DOWN|LEFT|RIGHT|QUIT)
 * @returns {void}
 */
    updateGame(m = "") {

        // capture the player's currX and currY position first
        const currX = this.playerPosition.x;
        const currY = this.playerPosition.y;

        //  Clear the OLD position to remove trailing
        this.field[currY][currX] = GRASS;

        // Update the position based on player's  move and calculate new position
        switch (m) {
            case UP:
                this.playerPosition.y -= 1;      // Move up (decrease row) 
                break;
            case DOWN:
                this.playerPosition.y += 1;      // Move down (increase row) 
                break;
            case LEFT:
                this.playerPosition.x -= 1;      // Move left (decrease column) 
                break;
            case RIGHT:
                this.playerPosition.x += 1;      // Move right (increase column) 
                break;
            default:
                return;
        }

        // Store NEW position in different variables
        const x = this.playerPosition.x;
        const y = this.playerPosition.y;

        //  Check if NEW position is out of bounds
        if (y < 0 || y >= ROWS || x < 0 || x >= COLS) {
            console.log(OUT);               // "You went out-of-bounds, you lost!"
            process.exit();                // Stop the game
        }

        // if the player X and Y position is a HOLE
        if (this.field[y][x] === HOLE) {
            console.log(LOSE);             // "You fell into a hole, you lost!"
            process.exit();
        }

        // if the player X and Y position === X and Y of the HAT (^)
        if (this.field[y][x] === HAT) {
            console.log(WIN);              // "Congratulations, you won!"
            process.exit();                // Stop the game
        }

        // otherwise, move the player to the new x and y position based on move
        this.field[y][x] = PLAYER;       // Update the field to show the player's new position
    }

    // DONE: start() a method of the class to start the game
    start() {
        this.gamePlay = true;       // start the game
        this.field[0][0] = PLAYER;  // positioning the player on the field, based on player's default position
        this.setHat();              // the postion of the Hat

        // while gamePlay === true, track player moves and updates
        do {

            this.printField();        // print the formatted field
            const input = prompt("(w)up, (s)down, (a)left, (d)right, (q)exit: ");

            switch (input.toLowerCase()) {
                case UP:
                    this.updateMove(UP);
                    break;
                case DOWN:
                    this.updateMove(DOWN);
                    break;
                case LEFT:
                    this.updateMove(LEFT);
                    break;
                case RIGHT:
                    this.updateMove(RIGHT);
                    break;
                case QUIT:
                    this.updateMove(QUIT);
                    break;
                default:
                    this.updateMove();    // represents invalid entry
                    break;
            }

            if (input === QUIT)
                this.gamePlay = false;

            this.updateGame(input.toLowerCase());

        } while (this.gamePlay);
    }
}

// DONE: Generate a new field - using Field's static method: generateField
const gameField = Field.generateField(ROWS, COLS, PERCENT);

// DONE: Generate a welcome message
Field.welcomeMessage(MSG_WELCOME);

// DONE: Create a new instance of the game
const game = new Field(gameField);

// DONE: Invoke method start(...) from the instance of game object
game.start();