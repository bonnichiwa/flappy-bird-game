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
  
  context.drawImage(this.img, 0, 0, 0.13, 0.1);
  context.restore();
};

exports.BirdGraphicsComponent = BirdGraphicsComponent;