const MovingObject = require("./moving_object.js");
const Util = require("./util.js");
const Ship = require("./ship.js");
const Bullet = require("./bullet.js");

Util.inherits(MovingObject, Asteroid);

Asteroid.COLOR = "lightgreen";
Asteroid.RADIUS = 30;

function Asteroid(options) {

  let moOptions = {
    pos: options.pos,
    color: Asteroid.COLOR,
    radius: Asteroid.RADIUS,
    vel: Util.randomVec(Math.random() * 10),
    game: options.game
  }
    MovingObject.call(this, moOptions);
}

Asteroid.prototype.collideWith = function (otherObject) {
  if (otherObject instanceof Ship) {
      otherObject.relocate();
  } else if (otherObject instanceof Bullet) {
    this.game.remove(otherObject);
    this.game.remove(this);
  }
}


module.exports = Asteroid;