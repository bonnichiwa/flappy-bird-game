var graphicsSystem = require('./systems/graphics');
var pipe = require('./entities/pipe');

var Pipe = function() {
  this.entities = [new pipe.Pipe()];
  this.graphics = new graphicsSystem.GraphicsSystem(this.entities);
};

Pipe.prototype.run = function() {
  this.graphics.run();
};

exports.Pipe = Pipe;