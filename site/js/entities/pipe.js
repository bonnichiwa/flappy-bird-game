var graphicsComponent = require("../components/graphics/pipe");
var physicsComponent = require("../components/physics/physics");
var collisionComponent = require("../components/collision/rect");

var Pipe = function(position, size) {
  
  var physics = new physicsComponent.PhysicsComponent(this);
  physics.position.y = 0.35;
  physics.velocity.x = -0.3;

  var graphics = new graphicsComponent.PipeGraphicsComponent(this, size);
  var collision = new collisionComponent.RectCollisionComponent(this, size);
  collision.onCollision = this.onCollision.bind(this);

  this.components = {
      graphics: graphics,
      physics: physics,
      collision: collision
  };
};

Pipe.prototype.onCollision = function(entity) {
  // console.log("Pipe collided with entity:", entity);
};

exports.Pipe = Pipe;