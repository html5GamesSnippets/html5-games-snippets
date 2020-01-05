class Game {
  constructor(id, context, options = {}) {
    this.id = id; // the id of our canvas element
    this.context = context; // the context of canvas
  }

  // initialize the game
  init () { }

  // create the game screen (drawn with canvas) 🎨
  create () { }

  // make a loop every x times per second to bring our game to life
  update () { }
}

// start game immediately after the page has been loaded
window.onload = () => new Game('game', '2d', {
  title: 'Frogger HTML5', // title of the game
  fps: 30, // frames per second for our game
  width: 480, // width of the game
  height: 360, // height of the game
});
