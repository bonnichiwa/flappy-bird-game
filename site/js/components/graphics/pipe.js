var PipeGraphicsComponent = function(entity) {
  this.entity = entity;
};

PipeGraphicsComponent.prototype.draw = function(context) {
  console.log("Drawing a pipe");
  var position = this.entity.components.physics.position;
  context.save();
  context.translate(position.x, position.y);
  var img = new Image();
  img.src = "./img/pipe.png";
  context.drawImage(img, 0, 0, 90, 90, 0, 0, 0.04, 0.04);
  context.restore();
  console.log("Finished drawing pipe");
};

exports.PipeGraphicsComponent = PipeGraphicsComponent;