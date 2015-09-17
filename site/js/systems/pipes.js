var pipe = require('../entities/pipe');

var PipesSystem = function(entities) {
  this.entities = entities;
  this.canvas = document.getElementById('main-canvas');
};

PipesSystem.prototype.run = function() {
  window.setInterval(this.tick.bind(this), 2000);
};

PipesSystem.prototype.tick = function() {

    var position = {
    };

    var size = {
    };

    this.entities.push(new pipe.Pipe(position, size));
};
        
exports.PipesSystem = PipesSystem;