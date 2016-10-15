$(document).ready(function() {
  if ($('.animation').length) {
    text1 =              $('.animation .text-1');
    text2 =              $('.animation .text-2');
    text3 =              $('.animation .text-3');
    text4 =              $('.animation .text-4');
    laptopTop =          $('.animation .laptop .top');
    envelope =           $('.animation .envelope');
    var mailSequence = [
      {
        e: text1,
        p: {
          display:       'none',
          opacity:       0,
        },
        o: {
          duration:      0,
          delay:         0,
          sequenceQueue: false,
        }
      }, {
        e: text2,
        p: {
          display:       'none',
          opacity:       0,
        },
        o: {
          duration:      0,
          delay:         0,
          sequenceQueue: false,
        }
      }, {
        e: text3,
        p: {
          display:       'none',
          opacity:       0,
        },
        o: {
          duration:      0,
          delay:         0,
          sequenceQueue: false,
        }
      }, {
        e: text4,
        p: {
          display:       'none',
          opacity:       0,
        },
        o: {
          duration:      0,
          delay:         0,
          sequenceQueue: false,
        }
      }, {
        e: laptopTop,
        p: {
          translateX:    '0vw',
          translateY:    '0vw',
          translateZ:    '1vw',
          rotateX:       '0deg',
          rotateY:       '0deg',
          rotateZ:       '0deg',
        },
        o: {
          duration:      0,
          delay:         0,
          sequenceQueue: false,
        }
      }, {
        e: envelope,
        p: {
          translateX:    '9vw',
          translateY:    '30.4vw',
          translateZ:    '8vw',
          rotateX:       '-90deg',
          rotateY:       '0deg',
          rotateZ:       '0deg',
        },
        o: {
          duration:      0,
          delay:         0,
          sequenceQueue: false,
        }
      }, {
        e: text1,
        p: {
          display:       'block',
          opacity:       1,
        },
        o: {
          duration:      600,
          delay:         600,
        }
      }, {
        e: laptopTop,
        p: {
          rotateX:       '90deg',
        },
        o: {
          duration:      600,
          delay:         600,
        }
      }, {
        e: envelope,
        p: {
          opacity:       1,
        },
        o: {
          duration:      600,
          delay:         600,
        }
      }, {
        e: envelope,
        p: {
          translateX:    '42vw',
          translateY:    '35.7vw',
          translateZ:    '8vw',
          rotateX:       '0deg',
          rotateY:       '0deg',
          rotateZ:       '90deg',
        },
        o: {
          duration:      600,
          delay:         600,
        }
      }, {
        e: envelope,
        p: {
          translateZ:    '0vw',
        },
        o: {
          duration:      600,
          delay:         0,
        }
      }
    ];
    $.Velocity.RunSequence(mailSequence);
  }
});
