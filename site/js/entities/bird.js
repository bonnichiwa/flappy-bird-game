var graphicsComponent = require("../components/graphics/bird");
var physicsComponent = require("../components/physics/physics");

var Bird = function() {
    var physics = new physicsComponent.PhysicsComponent(this);
    physics.position.y = 0.6;
    physics.acceleration.y = -1;

    var graphics = new graphicsComponent.BirdGraphicsComponent(this);

    this.components = {
        physics: physics,
        graphics: graphics,
    };
};

exports.Bird = Bird;