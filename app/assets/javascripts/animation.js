$( document ).on('turbolinks:load', function() {
  if ($('.animation').length && $('.preserve3d').length) {
    texts =              $('.animation .texts');
    text =               $('.animation .text');
    text1 =              $('.animation .text-1');
    text2 =              $('.animation .text-2');
    text3 =              $('.animation .text-3');
    text4 =              $('.animation .text-4');
    laptopTop =          $('.animation .laptop .top');
    envelope1 =           $('.animation .envelope-1');
    envelope2 =           $('.animation .envelope-2');
    envelope3 =           $('.animation .envelope-3');
    envelope4 =           $('.animation .envelope-4');
    envelope5 =           $('.animation .envelope-5');
    envelope6 =           $('.animation .envelope-6');
    var mailSequence = [
      // Sadly have to set up 3D explicitly as force-feeding existing CSS doesnt' work in Velocity for 3D transforms
      {
        e: envelope1,
        p: {
          translateX:    '42vw',
          translateY:    '35.7vw',
          translateZ:    '0vw',
          rotateX:       '0deg',
          rotateY:       '0deg',
          rotateZ:       '90deg',
          opacity:       1
        },
        o: {
          duration:      0,
          delay:         0,
          sequenceQueue: false,
        }
      },
      {
        e: envelope2,
        p: {
          translateX:    '42vw',
          translateY:    '35.7vw',
          translateZ:    '0.1vw',
          rotateX:       '0deg',
          rotateY:       '0deg',
          rotateZ:       '90deg',
          opacity:       1
        },
        o: {
          duration:      0,
          delay:         0,
          sequenceQueue: false,
        }
      },
      {
        e: envelope3,
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
      },
      {
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
      },
      // Animation start
      {
        e: text1,
        p: {
          opacity:       1,
        },
        o: {
          duration:      600,
          delay:         600,
        }
      },
      {
        e: laptopTop,
        p: {
          rotateX:       '90deg',
        },
        o: {
          duration:      600,
          delay:         600,
        }
      },
      {
        e: envelope3,
        p: {
          opacity:       1,
        },
        o: {
          duration:      600,
          delay:         600,
        }
      },
      {
        e: envelope3,
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
      },
      {
        e: envelope3,
        p: {
          translateZ:    '0.2vw',
        },
        o: {
          duration:      600,
          delay:         600,
        }
      },
      {
        e: envelope3,
        p: {
          translateZ:    '8vw',
        },
        o: {
          duration:      600,
          delay:         600,
        }
      },
      {
        e: envelope3,
        p: {
          translateX:    '64vw',
          translateY:    '58vw',
          translateZ:    '8vw',
          rotateX:       '0deg',
          rotateY:       '0deg',
          rotateZ:       '0deg',
        },
        o: {
          duration:      600,
          delay:         600,
        }
      },
      {
        e: envelope3,
        p: {
          translateZ:    '0.2vw',
        },
        o: {
          duration:      600,
          delay:         600,
        }
      },
      {
        e: envelope3,
        p: {
          translateZ:    '8vw',
        },
        o: {
          duration:      600,
          delay:         600,
        }
      },
      {
        e: envelope3,
        p: {
          translateX:    '64.5vw',
          translateY:    '83vw',
          translateZ:    '8vw',
          rotateX:       '0deg',
          rotateY:       '0deg',
          rotateZ:       '0deg',
        },
        o: {
          duration:      600,
          delay:         600,
        }
      },
      {
        e: envelope3,
        p: {
          translateZ:    '0vw',
          scale:         0.5,
        },
        o: {
          duration:      600,
          delay:         0,
        }
      },
    ];
    $.Velocity.RunSequence(mailSequence);
  }
});
