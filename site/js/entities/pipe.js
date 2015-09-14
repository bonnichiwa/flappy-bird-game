var graphicsComponent = require("../components/graphics/pipe");
var physicsComponent = require("../components/physics/physics");

var Pipe = function() {
  console.log("Creating Pipe entity");

  var physics = new physicsComponent.PhysicsComponent(this);
  physics.position.y = 0.2;

  var graphics = new graphicsComponent.PipeGraphicsComponent(this);
  this.components = {
      graphics: graphics,
      physics: physics
  };
};

exports.Pipe = Pipe;