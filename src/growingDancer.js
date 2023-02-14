var makeGrowingDancer = function (top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
};

makeGrowingDancer.prototype = Object.create(MakeDancer.prototype);
makeGrowingDancer.prototype.step = function() {
  // MakeDancer.prototype.step.call(this); // why is this? to schedule time before executing next line?
  // is this unnecessary when the repeat of the animation is set within animate below?

  var currentDancer = this;
  var loopAnimation = function() {
    currentDancer.$node.css({height: 0, width: 0});
    currentDancer.$node.animate({height: 100,
      width: 100}, Math.random() * 5000, function() { loopAnimation(); });
  };
  loopAnimation();
};

makeGrowingDancer.prototype.setPosition = function(top, left) {
  var styleSettings = {
    top: top,
    left: left,
    border: '10px solid blue',
    'border-radius': 0,
    'background-color': 'yellow',
  };
  this.$node.css(styleSettings);
};