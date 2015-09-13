var flappyBird = require('./flappy_bird');
// var pipe = require('./pipe');

document.addEventListener('DOMContentLoaded', function() {
  var app = new flappyBird.FlappyBird();
  app.run();

  // var pipes = new pipe.Pipe();
  // pipes.run();
});