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
  
  context.drawImage(this.img, 0.5, 0.5, 0.2, 0.2);
  context.restore();
  console.log("Finished drawing pipe");
};

exports.PipeGraphicsComponent = PipeGraphicsComponent;