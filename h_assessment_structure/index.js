const prompt = require("prompt-sync")({ sigint: true });

// DONE: Game elements/assets constants
const GRASS = '░';
const HOLE = 'O';
const HAT = '^';
const PLAYER = '*';

// DONE: UP / DOWN / LEFT / RIGHT / QUIT keyboard constants
const UP = "w";
const DOWN = "s";
const LEFT = "a";
const RIGHT = "d";
const QUIT = "q";

// DONE: MSG_UP / MSG_DOWN / MSG_LEFT / MSG_RIGHT / MSG_ QUIT / MSG_INVALID message constants
const MSG_UP = "You moved up.";
const MSG_DOWN = "You moved down.";
const MSG_LEFT = "You moved left.";
const MSG_RIGHT = "You moved right.";
const MSG_QUIT = "You quit the game.";
const MSG_INVALID = "Invalid entry.";
const MSG_WELCOME = "\n******************************\nWelcome to Find Your Hat Game\n******************************\n";

// DONE: WIN / LOSE / OUT  messages constants
const WIN = "Congratulations, you won!";
const LOSE = "You fell into a hole, you lost!"
const OUT = "You went out-of-bounds , you lost!"
// DONE: MAP ROWS, COLUMNS AND PERCENTAGE
const ROWS = 10;
const COLS = 10;
const PERCENT = 0.2; // variable that set the % of randomisation of holes in the game

class Field {

  /**
   *  DONE: constructor, a built-in method of a class (invoked when an object of a class is instantiated)
   * @param {Array} field  - field is passed as an Array to populate the property field of this classes instance
   */
  constructor(field = null) {
    this.field = field;
    this.gamePlay = false;  // game is by default =false
    this.playerPosition = { x: 0, y: 0 }; // player position is by default  x=0, y=0;
  }

  /**
   *  DONE: generateField is a static method, returning a 2D array of the fields
   * @param {Number} rows -rows for the the field 
   * @param {Number} cols -cols for the field
   * @param {Number} percent - percentage of random holes
   * @returns {Array}  -2d array to be used by the instance of the game 
   */

  static generateField(rows = 8, cols = 8, percent = 0.1) {

    const map = new Array();

    // generate fields by rows and cols passed in
    for (let row = 0; row < rows; row++) {   // for each row
      map[row] = new Array();              // create a new array

      for (let col = 0; col < cols; col++) { //for each col
        map[row][col] = Math.random() > percent ? GRASS : HOLE; // use the MATH randomise the holes

      }

    }
    return map;

  }

  /**
  *   DONE: welcomeMessage is a static method, displays a string
  * @param {String} msg - a string value to print out to user at the start of the game
  */

  static welcomeMessage(msg) {
    console.log(msg);
  }


  // DONE: setHat positions the hat along a random x and y position within field array
  setHat() {
    const xHat = Math.floor(Math.random() * (ROWS - 1)) + 1;
    const yHat = Math.floor(Math.random() * (COLS - 1)) + 1;

    this.field[yHat][xHat] = HAT;  // NOTE: [row][col] = [y][x]
  }

  // TODO: printField displays the updated status of the field position
  printField() {
    this.field.forEach((row) => {
      console.log(row.join(""));
    });
  }

  // DONE: updateMove displays the move (key) entered by the user
  /**
   * 
   * @param {String} m -passes in the value representing the player's move
   * @returns 
   */
  updateMove(m = "") {
    if (m == UP) return console.log(MSG_UP);        // Tell user he move up
    if (m == DOWN) return console.log(MSG_DOWN);    // Tell user he move down
    if (m == LEFT) return console.log(MSG_LEFT);    // Tell user he move left
    if (m == RIGHT) return console.log(MSG_RIGHT);  // Tell user he move right
    if (m == QUIT) return console.log(MSG_QUIT); // Tell user he quit the game
    return console.log(MSG_INVALID);                          // Tell user he entered an invalid input
  }


  
  /**
   * !! TODO: updateGame Assessment Challenge
   * @param {*} m accept the value of the player's move (UP\DOWN\LEFT\RIGHT)
   */
  updateGame(m =""){
    //capture the player's curr X and curr Y position first
    // 1. update the field to show player's position
    // 2. check if player X and Y position is a hole, HOLE
    //  OUT
    // process.exit
    // 3. if player X and Y posiiton is out of the map, OUT
    // LOSE
    //process.exit
    // 4. if the player X and Y position === x and y of the HAT(^)
    //  WIN
    //process.exit
    //otherwise, move the player to the new X and Y position based on move 
  }

  //  DONE: start() a method of the class to start the game
  start() {
    // immediate-left and immediate-right, immediate-top and immediate-bottom is blocked
    //if(hatBlocked(this.field) && !this.gamePlay)  
    // this.field = Field.generateField();

    this.gamePlay = true;       // start the game
    this.field[0][0] = PLAYER;  // positioning the player on the field, based on player's default position
    this.setHat();              // the postion of the Hat
    

    //while gamePlay === true, track the player's move and update
    do {
      this.printField();
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
          this.updateMove();
          break;
      }
      if (input === QUIT)
        this.gamePlay = false;

      this.updateGame(input);
    
    } while (this.gamePlay);

  }

}

// DONE: Generate a new field - using Field's static method: generateField
const gameField = Field.generateField(ROWS, COLS, PERCENT);


// DONE: Generate aa welcome message
Field.welcomeMessage(MSG_WELCOME);

// DONE: Create a new instance of the game
const game = new Field(gameField);



// DONE: Invoke method start(...) from the instance of game object
game.start();