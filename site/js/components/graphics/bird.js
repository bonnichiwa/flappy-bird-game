var BirdGraphicsComponent = function(entity) {
  this.entity = entity;
};

BirdGraphicsComponent.prototype.draw = function(context) {
    context.beginPath();
    context.strokeStyle = "blue"
    context.arc(10, 10, 10, 0, 2 * Math.PI);
    context.arc(30, 30, 10, 0, 2 * Math.PI);
    context.arc(50, 50, 10, 0, 2 * Math.PI);
    context.arc(70, 70, 10, 0, 2 * Math.PI);
    context.arc(90, 90, 10, 0, 2 * Math.PI);
    context.stroke();
    context.fillStyle = "red"
    context.arc(110, 110, 10, 0, 2 * Math.PI);
    context.fill();
    console.log("Drawing a bird");
};

exports.BirdGraphicsComponent = BirdGraphicsComponent;