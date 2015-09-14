var PipeGraphicsComponent = function(entity) {
  this.entity = entity;
};

PipeGraphicsComponent.prototype.draw = function(context) {
  console.log("Drawing a pipe");
  context.beginPath();
  context.fillStyle = "green";
  context.fillRect(20, 0, 100, 100);
  console.log("Finished drawing pipe");
};

exports.PipeGraphicsComponent = PipeGraphicsComponent;