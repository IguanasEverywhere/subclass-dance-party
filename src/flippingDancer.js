var makeFlippingDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
};

makeFlippingDancer.prototype = Object.create(MakeDancer.prototype);
makeFlippingDancer.prototype.constructor = makeFlippingDancer; //is this needed?
makeFlippingDancer.prototype.step = function() {
  var currentDancer = this;

  var faceLeft = false;
  var flipImg = function(faceLeft) {
    if (faceLeft) {
      currentDancer.$node.css('transform', 'scaleX(-1)');
    } else {
      currentDancer.$node.css('transform', 'scaleX(1)');
    }
    setTimeout(function() {
      flipImg(!faceLeft);
    }, 1000);

  };
  flipImg(faceLeft);


};

makeFlippingDancer.prototype.setPosition = function(top, left) {
  var backgroundImg = 'dancing.jpeg';
  var styleSettings = {
    top: top,
    left: left,
    border: '1px solid blue',
    'border-radius': 0,
    // transform: shouldFlip ? 'scale(-1, 1)' : 'scale(1, 1);',
  };

  //var backgroundImg = shouldFlip ? 'dancing-flipped.jpeg' : 'dancing.jpeg';
  this.$node.css('width', 100);
  this.$node.css('height', 100);

  this.$node.css('background-image', 'url(' + backgroundImg + ')');
  this.$node.css('background-size', 100 + 'px ' + 100 + 'px');
  this.$node.css(styleSettings);
};

// loopAnimation fn (leftorright)
// if left
// currentDancer.$node.css('transform', 'scaleX(-1'))
// if right

// var makeFlippingDancer = function(top, left, timeBetweenSteps) {
//   MakeDancer.call(this, top, left, timeBetweenSteps);
// };

// makeFlippingDancer.prototype = Object.create(MakeDancer.prototype);
// makeFlippingDancer.prototype.constructor = makeFlippingDancer; //is this needed?
// makeFlippingDancer.prototype.step = function() {
//   var currentDancer = this;
//   var loopAnimation = function() {
//     var randomTime = Math.random() * 1000;
//     currentDancer.$node.css({
//       height: 100,
//       width: 100,
//       'background-position' : '0 0'
//     });
//     currentDancer.$node.animate({
//       'background-position': '0 -100'
//       }, randomTime, function() {
//         currentDancer.$node.css({
//           'background-position': '0 0'
//         });
//         currentDancer.$node.animate({
//           'background-position': '0 100'
//         }, randomTime, function() {
//           loopAnimation();
//         });
//       });
//     };
//     loopAnimation();
//   };

// makeFlippingDancer.prototype.setPosition = function(top, left) {
//   var styleSettings = {
//     top: top,
//     left: left,
//     border: '1px solid blue',
//     'border-radius': 0,
//     'background-color': 'yellow',
//     transform: 'scale(1, 1)',
//     'background-image': 'url(dancing.jpeg)',
//     'background-size': 100 + 'px ' + 100 + 'px',
//     height: 100,
//     width: 100,
//   };
//   this.$node.css(styleSettings);
// };


// setTimeout(function() {
//   currentDancer.setPosition(currentDancer.$node.position().top, currentDancer.$node.position().left, shouldFlip);
//   shouldFlip = !shouldFlip;
//   loopAnimation();
// }, currentDancer.timeBetweenSteps);
//}