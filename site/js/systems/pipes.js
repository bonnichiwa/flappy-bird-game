var pipe = require('../entities/pipe');

var PipesSystem = function(entities) {
  this.entities = entities;
  this.canvas = document.getElementById('main-canvas');
};

PipesSystem.prototype.run = function() {
  window.setInterval(this.tick.bind(this), 2000);
};

PipesSystem.prototype.tick = function() {
  var right = 0.5 * this.canvas.width / this.canvas.height;
  var gapPosition = 0.4 + Math.random() * 0.2;
  var height = gapPosition - 0.35 / 2;

  var position = {
    x: right + 0.15 / 2,
    y: height / 2
  };

  this.entities.push(new pipe.Pipe(position));

  var position = {
  };

  this.entities.push(new pipe.Pipe(position));
};
        
exports.PipesSystem = PipesSystem;