var PipeGraphicsComponent = function(entity) {
  this.entity = entity;
  this.img = new Image();
  this.img.src = "img/pipe.png";
};

PipeGraphicsComponent.prototype.draw = function(context) {
  console.log("Drawing a pipe");
  var position = this.entity.components.physics.position;
  context.save();
  context.translate(position.x, position.y);
  context.scale(1,-1);
  context.drawImage(this.img, 0.8, 0, 0.15, 0.4);
  context.scale(1,-1);
  context.drawImage(this.img, 0.8, 0.3, 0.15, 0.4);
  context.restore();
  console.log("Finished drawing pipe");
};

exports.PipeGraphicsComponent = PipeGraphicsComponent;