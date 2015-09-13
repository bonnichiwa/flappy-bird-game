var pipe = require('./pipe');
var flappyBird = require('./flappy_bird');

document.addEventListener('DOMContentLoaded', function() {
  var pipes = new pipe.Pipe();
  pipes.run();

  var app = new flappyBird.FlappyBird();
  app.run();
});