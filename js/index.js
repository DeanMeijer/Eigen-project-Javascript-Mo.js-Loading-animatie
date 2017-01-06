'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var burst = new mojs.Burst({
  radius: {
    0: 100
  },
  count: 20,
  children: {
    shape: 'cross',
    stroke: 'teal',
    strokeWidth: {
      6: 0
    },
    angle: {
      360: 0
    },
    radius: {
      30: 5
    },
    duration: 3000
  }
});

var burst2 = new mojs.Burst({
  radius: {
    0: 200
  },
  count: 12,
  children: {
    shape: 'zigzag',
    points: 7,
    stroke: {
      'magenta': 'pink'
    },
    fill: 'none',
    strokeWidth: {
      6: 0
    },
    angle: {
      '-360': 0
    },
    radius: {
      30: 5
    },
    opacity: {
      1: 0
    },
    duration: 3000
  }
});

var burst3 = new mojs.Burst({
  radius: {
    0: 200
  },
  count: 5,
  children: {
    color: 'purple',
    points: 7,
    angle: {
      '-360': 0
    },
    radius: {
      10: 5
    },
    opacity: {
      1: 0
    },
    duration: 3000
  }
});

var circ_opt = {
  radius: {
    0: 200
  },
  count: 20,
  fill: 'none',
  stroke: 'yellow',
  opacity: {
    1: 0
  },
  duration: 3500
};

var circ1 = new mojs.Shape(_extends({}, circ_opt));

var circ2 = new mojs.Shape(_extends({}, circ_opt, {
  delay: 500
}));

var timeline = new mojs.Timeline({
  repeat: 999
}).add(burst, burst2, burst3, circ1, circ2).play();