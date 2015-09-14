var BirdGraphicsComponent = function(entity) {
  this.entity = entity;
  this.img = new Image();
  this.img.src = "img/flappy-bird.png";
};

BirdGraphicsComponent.prototype.draw = function(context) {
  var position = this.entity.components.physics.position;
  console.log("Drawing flappy bird");
  context.save();
  context.translate(position.x, position.y);
  context.scale(1,-1);
  context.drawImage(this.img, 0, 0, 0.06, 0.05);
  context.restore();
};

exports.BirdGraphicsComponent = BirdGraphicsComponent;