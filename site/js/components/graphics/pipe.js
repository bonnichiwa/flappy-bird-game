var PipeGraphicsComponent = function(entity) {
  this.entity = entity;
  this.img = new Image();
  this.img.src = "img/pipe.png";
};

// PipesGraphicsSystem.prototype.run = function() {
//   window.setInterval(this.tick.draw(this), 2000);
// };

PipeGraphicsComponent.prototype.draw = function(context) {
  var position = this.entity.components.physics.position;
  context.save();
  context.translate(position.x, position.y);
  context.scale(1,-1);
  context.drawImage(this.img, 0.8, 0, 0.15, 0.4);
  context.scale(1,-1);
  context.drawImage(this.img, 0.8, 0.3, 0.15, 0.4);
  context.restore();
};

exports.PipeGraphicsComponent = PipeGraphicsComponent;