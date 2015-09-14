var pipe = require('../entities/pipe');

var PipesSystem = function(entities) {
  this.entities = entities;
  this.canvas = document.getElementById('main-canvas');
};

PipesSystem.prototype.run = function() {
  // Run the update loop
  window.setInterval(this.tick.bind(this), 2000);
};

PipesSystem.prototype.tick = function() {
  var right = 2 * this.canvas.width / this.canvas.height;
  var gapPosition = 0.4 + Math.random() * 0.2;

  var height = gapPosition - 0.15 / 2;
  var position = {
      x: right + 0.15 / 2,
      y: height / 2
  };

  var size = {
      x: 0.15,
      y: height
  };

  this.entities.push(new pipe.Pipe(position, size));

  var height = 1 - gapPosition - 0.15 / 2;
  var position = {
      x: right + 0.15 / 2,
      y: 1 - height / 2
  };

  var size = {
      x: 0.15,
      y: height
  };
  this.entities.push(new pipe.Pipe(position, size));
};
        
exports.PipesSystem = PipesSystem;