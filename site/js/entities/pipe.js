var graphicsComponent = require("../components/graphics/pipe");
var physicsComponent = require("../components/physics/physics");

var Pipe = function() {
  console.log("Creating Pipe entity");

  var physics = new physicsComponent.PhysicsComponent(this);
  physics.position.x = 0;
  physics.position.y = 5;

  var graphics = new graphicsComponent.PipeGraphicsComponent(this);
  this.components = {
      graphics: graphics,
      physics: physics
  };
};

exports.Pipe = Pipe;