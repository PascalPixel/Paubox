$( document ).on('turbolinks:load', function() {
  if ($('.animation').length && $('.preserve3d').length) {
    texts                = $('.animation .texts');
    text                 = $('.animation .text');
    text1                = $('.animation .text-1');
    text2                = $('.animation .text-2');
    text3                = $('.animation .text-3');
    text4                = $('.animation .text-4');
    line1                = $('.animation .line-1');
    line2                = $('.animation .line-2');
    line3                = $('.animation .line-3');
    line4                = $('.animation .line-4');
    line5                = $('.animation .line-5');
    line6                = $('.animation .line-6');
    foregroundRed        = $('.animation .foreground .red');
    foregroundBlue       = $('.animation .foreground .blue');
    backgroundRed        = $('.animation .background .red');
    backgroundBlue       = $('.animation .background .blue');
    laptopTop            = $('.animation .laptop .top');
    phoneWindow          = $('.animation .phone-window');
    laptopWindow         = $('.animation .laptop .laptop-window');
    envelope             = $('.animation .envelope');
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
        e: envelope,
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
      // Scene 1
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
          translateX:    '65.5vw',
          translateY:    '37.7vw',
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
          translateY:    '84.6vw',
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
      {
        e: envelope1red,
        p: {
          opacity:       0,
        },
        o: {
          duration:      600,
          delay:         600,
        }
      },
      {
        e: text1,
        p: {
          opacity:       0,
        },
        o: {
          duration:      600,
          delay:         600,
          sequenceQueue: false,
        }
      },
      // Scene 2
      {
        e: text2,
        p: {
          opacity:       1,
        },
        o: {
          duration:      600,
          delay:         0,
        }
      },
      {
        e: phoneWindow,
        p: {
          opacity:       1,
        },
        o: {
          duration:      600,
          delay:         0,
          sequenceQueue: false,
        }
      },
      {
        e: laptopWindow,
        p: {
          opacity:       1,
        },
        o: {
          duration:      600,
          delay:         0,
          sequenceQueue: false,
        }
      },
      {
        e: backgroundBlue,
        p: {
          opacity:       1,
        },
        o: {
          duration:      600,
          delay:         0,
          sequenceQueue: false,
        }
      },
      {
        e: backgroundRed,
        p: {
          opacity:       0,
        },
        o: {
          duration:      600,
          delay:         0,
          sequenceQueue: false,
        }
      },
      {
        e: foregroundBlue,
        p: {
          opacity:       1,
        },
        o: {
          duration:      600,
          delay:         0,
          sequenceQueue: false,
        }
      },
      {
        e: foregroundRed,
        p: {
          opacity:       0,
        },
        o: {
          duration:      600,
          delay:         0,
          sequenceQueue: false,
        }
      },
      {
        e: line2,
        p: {
          borderColor:   '#0247DC',
        },
        o: {
          duration:      600,
          delay:         0,
          sequenceQueue: false,
        }
      },
      {
        e: line3,
        p: {
          borderColor:   '#0247DC',
        },
        o: {
          duration:      600,
          delay:         0,
          sequenceQueue: false,
        }
      },
      {
        e: envelope2blue,
        p: {
          opacity:       1,
        },
        o: {
          duration:      600,
          delay:         600,
        }
      },
      {
        e: envelope2,
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
        e: envelope2,
        p: {
          translateZ:    '0.2vw',
        },
        o: {
          duration:      600,
          delay:         0,
        }
      },
      {
        e: envelope2,
        p: {
          translateZ:    '8vw',
        },
        o: {
          duration:      600,
          delay:         600,
        }
      },
      {
        e: envelope2,
        p: {
          translateX:    '65.5vw',
          translateY:    '37.7vw',
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
        e: envelope2,
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
        e: envelope2,
        p: {
          translateZ:    '0.2vw',
        },
        o: {
          duration:      600,
          delay:         0,
        }
      },
      {
        e: envelope2,
        p: {
          translateZ:    '10vw',
        },
        o: {
          duration:      600,
          delay:         600,
        }
      },
      {
        e: envelope2,
        p: {
          translateX:    '64.5vw',
          translateY:    '84.6vw',
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
        e: envelope2,
        p: {
          translateZ:    '0vw',
          scale:         0.5,
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
          duration:      600,
          delay:         600,
        }
      },
      {
        e: text2,
        p: {
          opacity:       0,
        },
        o: {
          duration:      600,
          delay:         600,
          sequenceQueue: false,
        }
      },
      // Scene 3
      {
        e: text3,
        p: {
          opacity:       1,
        },
        o: {
          duration:      600,
          delay:         0,
        }
      },
      {
        e: line5,
        p: {
          opacity:       1,
        },
        o: {
          duration:      600,
          delay:         0,
          sequenceQueue: false,
        }
      },
      {
        e: line6,
        p: {
          opacity:       1,
        },
        o: {
          duration:      600,
          delay:         0,
          sequenceQueue: false,
        }
      },
      {
        e: envelope3blue,
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
        e: envelope3,
        p: {
          translateZ:    '0.2vw',
        },
        o: {
          duration:      600,
          delay:         0,
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
        e: envelope3blue,
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
        e: envelope3red,
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
        e: envelope3,
        p: {
          translateX:    '44.5vw',
          translateY:    '58.7vw',
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
          delay:         0,
          easing:        'ease-out',
        }
      },
      {
        e: envelope3,
        p: {
          translateZ:    '0.2vw',
        },
        o: {
          duration:      600,
          delay:         0,
        }
      },
      {
        e: envelope3,
        p: {
          translateZ:    '10vw',
        },
        o: {
          duration:      600,
          delay:         600,
        }
      },
      {
        e: envelope3,
        p: {
          translateX:    '64.7vw',
          translateY:    '84.4vw',
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
        e: envelope3,
        p: {
          translateZ:    '0.1vw',
          scale:         0.5,
        },
        o: {
          duration:      600,
          delay:         0,
        }
      },
      {
        e: envelope2blue,
        p: {
          opacity:       0,
        },
        o: {
          duration:      600,
          delay:         600,
        }
      },
      {
        e: envelope3red,
        p: {
          opacity:       0,
        },
        o: {
          duration:      600,
          delay:         600,
          sequenceQueue: false,
        }
      },
      {
        e: text3,
        p: {
          opacity:       0,
        },
        o: {
          duration:      600,
          delay:         600,
          sequenceQueue: false,
        }
      },
      // Scene 4
      {
        e: text4,
        p: {
          opacity:       1,
        },
        o: {
          duration:      600,
          delay:         0,
        }
      },
      {
        e: phoneWindow,
        p: {
          opacity:       0,
        },
        o: {
          duration:      600,
          delay:         0,
          sequenceQueue: false,
        }
      },
      {
        e: laptopWindow,
        p: {
          opacity:       0,
        },
        o: {
          duration:      600,
          delay:         0,
          sequenceQueue: false,
        }
      },
      {
        e: line5,
        p: {
          opacity:       0,
        },
        o: {
          duration:      600,
          delay:         0,
          sequenceQueue: false,
        }
      },
      {
        e: line6,
        p: {
          opacity:       0,
        },
        o: {
          duration:      600,
          delay:         0,
          sequenceQueue: false,
        }
      },
      {
        e: envelope4blue,
        p: {
          opacity:       1,
        },
        o: {
          duration:      600,
          delay:         600,
        }
      },
      {
        e: envelope4,
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
        e: envelope4,
        p: {
          translateZ:    '0.2vw',
        },
        o: {
          duration:      600,
          delay:         0,
        }
      },
      {
        e: envelope4,
        p: {
          translateZ:    '8vw',
        },
        o: {
          duration:      600,
          delay:         600,
        }
      },
      {
        e: envelope4,
        p: {
          translateX:    '65.5vw',
          translateY:    '37.7vw',
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
        e: envelope4,
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
        e: envelope4,
        p: {
          translateZ:    '0.2vw',
        },
        o: {
          duration:      600,
          delay:         0,
        }
      },
      {
        e: envelope4,
        p: {
          translateZ:    '10vw',
        },
        o: {
          duration:      600,
          delay:         600,
        }
      },
      {
        e: envelope4,
        p: {
          translateX:    '64.5vw',
          translateY:    '84.6vw',
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
        e: envelope4,
        p: {
          translateZ:    '0vw',
          scale:         0.5,
        },
        o: {
          duration:      600,
          delay:         0,
        }
      },
      {
        e: envelope4blue,
        p: {
          opacity:       0,
        },
        o: {
          duration:      600,
          delay:         600,
        }
      },
      {
        e: laptopTop,
        p: {
          rotateX:       '0deg',
        },
        o: {
          duration:      600,
          delay:         600,
          sequenceQueue: false,
        }
      },
      {
        e: text4,
        p: {
          opacity:       0,
        },
        o: {
          duration:      600,
          delay:         600,
          sequenceQueue: false,
        }
      },
    ];
    $.Velocity.RunSequence(mailSequence);
  }
});
