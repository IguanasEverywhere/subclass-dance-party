var makeGrowingDancer = function (top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
};

makeGrowingDancer.prototype = Object.create(MakeDancer.prototype);
makeGrowingDancer.prototype.step = function() {
  MakeDancer.prototype.step.call(this); // why is this?
};


makeGrowingDancer.prototype.setPosition = function(top, left) {
  var styleSettings = {
    top: top,
    left: left,
    border: '10px solid blue',
    'border-radius': 0,
    'animation-name': 'grow',
    'animation-duration': '1s',
    'animation-iteration-count': 'infinite',
  };
  this.$node.css(styleSettings);

};