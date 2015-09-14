var BirdGraphicsComponent = function(entity) {
  this.entity = entity;
};

BirdGraphicsComponent.prototype.draw = function(context) {
  var position = this.entity.components.physics.position;

  context.save();
  context.translate(position.x, position.y);
  var img = new Image();
  img.src = "./img/flappy-bird.png";
  context.drawImage(img, 0, 0, 90, 90, 0, 0, 0.04, 0.04);
  context.restore();
};

exports.BirdGraphicsComponent = BirdGraphicsComponent;