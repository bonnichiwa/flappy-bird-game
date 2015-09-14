var graphicsSystem = require('./systems/graphics');
var physicsSystem = require('./systems/physics');

var bird = require('./entities/bird');

var FlappyBird = function() {
    this.entities = [new bird.Bird()];
    this.graphics = new graphicsSystem.GraphicsSystem(this.entities);
    this.physics = new physicsSystem.PhysicsSystem(this.entities);
};

FlappyBird.prototype.run = function() {
    this.graphics.run();
    this.physics.run();
};

exports.FlappyBird = FlappyBird;