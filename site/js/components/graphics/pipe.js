var PipeGraphicsComponent = function(entity) {
  this.entity = entity;
};

PipeGraphicsComponent.prototype.draw = function(context) {
  console.log("Drawing a pipe");
  context.beginPath();
  context.fillStyle = "green";
  context.fillRect(10, 50, 100, 100);
};

exports.PipeGraphicsComponent = PipeGraphicsComponent;