$( document ).on('turbolinks:load', function() {
  if ($('.animation').length && $('.preserve3d').length) {
    texts                = $('.animation .texts');
    text                 = $('.animation .text');
    text1                = $('.animation .text-1');
    text2                = $('.animation .text-2');
    text3                = $('.animation .text-3');
    text4                = $('.animation .text-4');
    laptopTop            = $('.animation .laptop .top');
    envelope1            = $('.animation .envelope-1');
    envelope1blue        = $('.animation .envelope-1 .blue');
    envelope1red         = $('.animation .envelope-1 .red');
    envelope2            = $('.animation .envelope-2');
    envelope2blue        = $('.animation .envelope-2 .blue');
    envelope2red         = $('.animation .envelope-2 .red');
    envelope3            = $('.animation .envelope-3');
    envelope3blue        = $('.animation .envelope-3 .blue');
    envelope3red         = $('.animation .envelope-3 .red');
    envelope4            = $('.animation .envelope-4');
    envelope4blue        = $('.animation .envelope-4 .blue');
    envelope4red         = $('.animation .envelope-4 .red');
    envelope5            = $('.animation .envelope-5');
    envelope5blue        = $('.animation .envelope-5 .blue');
    envelope5red         = $('.animation .envelope-5 .red');
    envelope6            = $('.animation .envelope-6');
    envelope6blue        = $('.animation .envelope-6 .blue');
    envelope6red         = $('.animation .envelope-6 .red');
    var mailSequence     = [
      // Sadly have to set up 3D explicitly as force-feeding existing CSS doesnt' work in Velocity for 3D transforms
      {
        e: envelope1,
        p: {
          translateX:    '9vw',
          translateY:    '33.4vw',
          translateZ:    '11.5vw',
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
        e: envelope1blue,
        p: {
          opacity:       1,
        },
        o: {
          duration:      600,
          delay:         600,
        }
      },
      {
        e: envelope1,
        p: {
          translateX:    '44.2vw',
          translateY:    '39.5vw',
          translateZ:    '10vw',
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
        e: envelope1,
        p: {
          translateZ:    '0.2vw',
        },
        o: {
          duration:      600,
          delay:         0,
        }
      },
      {
        e: envelope1blue,
        p: {
          opacity:       0,
        },
        o: {
          duration:      300,
          delay:         0,
          sequenceQueue: false,
        }
      },
      {
        e: envelope1red,
        p: {
          opacity:       1,
        },
        o: {
          duration:      300,
          delay:         0,
          sequenceQueue: false,
        }
      },
      {
        e: envelope1,
        p: {
          translateZ:    '8vw',
        },
        o: {
          duration:      600,
          delay:         600,
          sequenceQueue: false,
        }
      },
      {
        e: envelope1,
        p: {
          translateX:    '64vw',
          translateY:    '35.7vw',
          translateZ:    '8vw',
          rotateX:       '0deg',
          rotateY:       '0deg',
          rotateZ:       '45deg',
        },
        o: {
          duration:      600,
          delay:         0,
          easing:        'ease-in',
        }
      },
      {
        e: envelope1,
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
          delay:         0,
          easing:        'ease-out',
        }
      },
      {
        e: envelope1,
        p: {
          translateZ:    '0.2vw',
        },
        o: {
          duration:      600,
          delay:         0,
        }
      },
      {
        e: envelope1,
        p: {
          translateZ:    '10vw',
        },
        o: {
          duration:      600,
          delay:         600,
        }
      },
      {
        e: envelope1,
        p: {
          translateX:    '64.5vw',
          translateY:    '84.5vw',
          translateZ:    '10vw',
          rotateX:       '0deg',
          rotateY:       '0deg',
          rotateZ:       '0deg',
        },
        o: {
          duration:      600,
          delay:         0,
        }
      },
      {
        e: envelope1,
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
