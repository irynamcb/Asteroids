
const MovingObject = require("./moving_object.js");
const Asteroid = require("./asteroid.js");
const Game = require("./game.js");
const GameView = require("./game_view.js");


console.log("Webpack is working!");


window.addEventListener('DOMContentLoaded', (event) => { 
  
  const canvas = document.getElementById("game-canvas");
  const ctx = canvas.getContext('2d');
  window.ctx = ctx;

  const img = new Image();
  img.onload = function () {
    ctx.drawImage(img, 0, 0);
  };
  img.src = "../src/asteroid.jpg";


  const g = new Game(img);
  const gv = new GameView(g, ctx);
  window.gv = gv;
  gv.start();
 
  console.log('DOM fully loaded and parsed');
});


