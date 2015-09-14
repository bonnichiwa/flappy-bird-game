(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
},{}],2:[function(require,module,exports){
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
  context.scale(1,-1);
  context.drawImage(this.img, 0.8, 0, 0.15, 0.4);
  context.scale(1,-1);
  context.drawImage(this.img, 0.8, 0.3, 0.15, 0.4);
  context.restore();
  console.log("Finished drawing pipe");
};

exports.PipeGraphicsComponent = PipeGraphicsComponent;
},{}],3:[function(require,module,exports){
var PhysicsComponent = function(entity) {
  this.entity = entity;

  this.position = {
    x: 0,
    y: 0
  };
  this.velocity = {
    x: 0,
    y: 0
  };
  this.acceleration = {
    x: 0,
    y: 0
  };
};

PhysicsComponent.prototype.update = function(delta) {
  this.velocity.x += this.acceleration.x * delta;
  this.velocity.y += this.acceleration.y * delta;

  this.position.x += this.velocity.x * delta;
  this.position.y += this.velocity.y * delta;
};

exports.PhysicsComponent = PhysicsComponent;
},{}],4:[function(require,module,exports){
var graphicsComponent = require("../components/graphics/bird");
var physicsComponent = require("../components/physics/physics");

var Bird = function() {
    var physics = new physicsComponent.PhysicsComponent(this);
    physics.position.y = 0.6;
    physics.acceleration.y = -0.8;

    var graphics = new graphicsComponent.BirdGraphicsComponent(this);

    this.components = {
        physics: physics,
        graphics: graphics,
    };
};

exports.Bird = Bird;
},{"../components/graphics/bird":1,"../components/physics/physics":3}],5:[function(require,module,exports){
var graphicsComponent = require("../components/graphics/pipe");
var physicsComponent = require("../components/physics/physics");

var Pipe = function() {
  console.log("Creating Pipe entity");

  var physics = new physicsComponent.PhysicsComponent(this);
  physics.position.y = 0.35;
  physics.velocity.x = -0.3;

  var graphics = new graphicsComponent.PipeGraphicsComponent(this);
  this.components = {
      graphics: graphics,
      physics: physics
  };
};

exports.Pipe = Pipe;
},{"../components/graphics/pipe":2,"../components/physics/physics":3}],6:[function(require,module,exports){
var graphicsSystem = require('./systems/graphics');
var physicsSystem = require('./systems/physics');
var inputSystem = require('./systems/input');
var pipesSystem = require('./systems/pipes');

var bird = require('./entities/bird');
var pipe = require('./entities/pipe');

var FlappyBird = function() {
    this.entities = [new bird.Bird()];
    this.graphics = new graphicsSystem.GraphicsSystem(this.entities);
    this.physics = new physicsSystem.PhysicsSystem(this.entities);
    this.input = new inputSystem.InputSystem(this.entities);
    this.pipes = new pipesSystem.PipesSystem(this.entities);
};

FlappyBird.prototype.run = function() {
    this.graphics.run();
    this.physics.run();
    this.input.run();
    this.pipes.run();
};

exports.FlappyBird = FlappyBird;
},{"./entities/bird":4,"./entities/pipe":5,"./systems/graphics":8,"./systems/input":9,"./systems/physics":10,"./systems/pipes":11}],7:[function(require,module,exports){
var flappyBird = require('./flappy_bird');

document.addEventListener('DOMContentLoaded', function() {
  var app = new flappyBird.FlappyBird();
  app.run();
});
},{"./flappy_bird":6}],8:[function(require,module,exports){
var GraphicsSystem = function(entities) {
  this.entities = entities;
  // Canvas is where we draw
  this.canvas = document.getElementById('main-canvas');
  // Context is what we draw to
  this.context = this.canvas.getContext('2d');
};

GraphicsSystem.prototype.run = function() {
  // Run the render loop
  window.requestAnimationFrame(this.tick.bind(this));
};

GraphicsSystem.prototype.tick = function() {
  // Set the canvas to the correct size if the window is resized
  if (this.canvas.width != this.canvas.offsetWidth ||
    this.canvas.height != this.canvas.offsetHeight) {
    this.canvas.width = this.canvas.offsetWidth;
    this.canvas.height = this.canvas.offsetHeight;
  }

  this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

  this.context.save();
  this.context.translate(this.canvas.width / 2, this.canvas.height);
  this.context.scale(this.canvas.height, -this.canvas.height);

  for (var i=0; i<this.entities.length; i++) {
    var entity = this.entities[i];
    if (!'graphics' in entity.components) {
      continue;
    }

    entity.components.graphics.draw(this.context);
  }

  this.context.restore();

  window.requestAnimationFrame(this.tick.bind(this));
};

exports.GraphicsSystem = GraphicsSystem;
},{}],9:[function(require,module,exports){
var InputSystem = function(entities) {
  this.entities = entities;

  // Canvas is where we get input from
  this.canvas = document.getElementById('main-canvas');
};

InputSystem.prototype.run = function() {
  this.canvas.addEventListener('click', this.onClick.bind(this));
};

InputSystem.prototype.onClick = function() {
  var bird = this.entities[0];
  bird.components.physics.velocity.y = 0.6;
};

exports.InputSystem = InputSystem;
},{}],10:[function(require,module,exports){
var PhysicsSystem = function(entities) {
  this.entities = entities;
};

PhysicsSystem.prototype.run = function() {
  // Run the update loop
  window.setInterval(this.tick.bind(this), 1000 /60);
};

PhysicsSystem.prototype.tick = function() {
  for (var i=0; i<this.entities.length; i++) {
    var entity = this.entities[i];
    if (!'physics' in entity.components) {
      continue;
    }

    entity.components.physics.update(1/60);
  }
};

exports.PhysicsSystem = PhysicsSystem;
},{}],11:[function(require,module,exports){
var pipe = require('../entities/pipe');

var PipesSystem = function(entities) {
  this.entities = entities;
  this.canvas = document.getElementById('main-canvas');
};

PipesSystem.prototype.run = function() {
  window.setInterval(this.tick.bind(this), 2000);
};

PipesSystem.prototype.tick = function() {
  var right = 0.5 * this.canvas.width / this.canvas.height;
  var gapPosition = 0.4 + Math.random() * 0.2;
  var height = gapPosition - 0.35 / 2;

  var position = {
    x: right + 0.15 / 2,
    y: height / 2
  };

  this.entities.push(new pipe.Pipe(position));

  var position = {
  };

  this.entities.push(new pipe.Pipe(position));
};
        
exports.PipesSystem = PipesSystem;
},{"../entities/pipe":5}]},{},[7]);
