$( document ).on('turbolinks:load', function() {
  if ($('.animation').length && $('.preserve3d').length) {

    // Pre-set elements to variables
    var texts            = $('.animation .texts');
    var text             = $('.animation .text');
    var text1            = $('.animation .text-1');
    var text2            = $('.animation .text-2');
    var text3            = $('.animation .text-3');
    var text4            = $('.animation .text-4');
    var text5            = $('.animation .text-5');
    var line1            = $('.animation .line-1');
    var line2            = $('.animation .line-2');
    var line3            = $('.animation .line-3');
    var line4            = $('.animation .line-4');
    var line5            = $('.animation .line-5');
    var line6            = $('.animation .line-6');
    var foregroundRed    = $('.animation .foreground .red');
    var foregroundBlue   = $('.animation .foreground .blue');
    var backgroundRed    = $('.animation .background .red');
    var backgroundBlue   = $('.animation .background .blue');
    var laptopTop        = $('.animation .laptop .top');
    var phoneWindow      = $('.animation .phone-window');
    var laptopWindow     = $('.animation .laptop .laptop-window');
    var envelope         = $('.animation .envelope');
    var envelope1        = $('.animation .envelope-1');
    var envelope1blue    = $('.animation .envelope-1 .blue');
    var envelope1red     = $('.animation .envelope-1 .red');
    var envelope2        = $('.animation .envelope-2');
    var envelope2blue    = $('.animation .envelope-2 .blue');
    var envelope2red     = $('.animation .envelope-2 .red');
    var envelope3        = $('.animation .envelope-3');
    var envelope3blue    = $('.animation .envelope-3 .blue');
    var envelope3red     = $('.animation .envelope-3 .red');
    var envelope4        = $('.animation .envelope-4');
    var envelope4blue    = $('.animation .envelope-4 .blue');
    var envelope4red     = $('.animation .envelope-4 .red');
    var envelope5        = $('.animation .envelope-5');
    var envelope5blue    = $('.animation .envelope-5 .blue');
    var envelope5red     = $('.animation .envelope-5 .red');
    var envelope6        = $('.animation .envelope-6');
    var envelope6blue    = $('.animation .envelope-6 .blue');
    var envelope6red     = $('.animation .envelope-6 .red');

    // Move locations into variables
    var emailLaptop = {
      translateX:        '9vw',
      translateY:        '33.4vw',
      translateZ:        '11.5vw',
      rotateX:           '-90deg',
      rotateY:           '0deg',
      rotateZ:           '0deg',
      scale:             1,
    }
    var emailInbox = {
      translateX:        '44.2vw',
      translateY:        '39.5vw',
      translateZ:        '10vw',
      rotateX:           '0deg',
      rotateY:           '0deg',
      rotateZ:           '90deg',
    }
    var emailSafe = {
      translateX:        '65.5vw',
      translateY:        '37.7vw',
      translateZ:        '8vw',
      rotateX:           '0deg',
      rotateY:           '0deg',
      rotateZ:           '45deg',
    }
    var emailUnsafe = {
      translateX:        '44.5vw',
      translateY:        '58.7vw',
      translateZ:        '8vw',
      rotateX:           '0deg',
      rotateY:           '0deg',
      rotateZ:           '45deg',
    }
    var emailOutbox = {
      translateX:        '64vw',
      translateY:        '58vw',
      translateZ:        '8vw',
      rotateX:           '0deg',
      rotateY:           '0deg',
      rotateZ:           '0deg',
    }
    var emailPhone = {
      translateX:        '64.5vw',
      translateY:        '84.6vw',
      translateZ:        '10vw',
      rotateX:           '0deg',
      rotateY:           '0deg',
      rotateZ:           '0deg',
    }
    var moveUp = {
      translateZ:        '10vw',
    }
    var moveDown = {
      translateZ:        '0vw',
    }
    var showIt = {
      opacity:           1,
    }
    var hideIt = {
      opacity:           0,
    }

    // Main sequence
    var mailSequence     = [
      // Reset
      {
        e: text5,
        p: hideIt,
        o: {
          sequenceQueue: false,
        }
      },
      {
        e: backgroundBlue,
        p: hideIt,
        o: {
          sequenceQueue: false,
        }
      },
      {
        e: backgroundRed,
        p: showIt,
        o: {
          sequenceQueue: false,
        }
      },
      {
        e: foregroundBlue,
        p: hideIt,
        o: {
          sequenceQueue: false,
        }
      },
      {
        e: foregroundRed,
        p: showIt,
        o: {
          sequenceQueue: false,
        }
      },
      {
        e: envelope,
        p: emailLaptop,
        o: {
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
          sequenceQueue: false,
        }
      },
      // Scene 1
      {
        e: text1,
        p: showIt,
        o: {
          delay:         600,
        }
      },
      {
        e: laptopTop,
        p: {
          rotateX:       '90deg',
        },
        o: {
          delay:         600,
        }
      },
      {
        e: envelope1blue,
        p: showIt,
        o: {
          delay:         600,
        }
      },
      {
        e: envelope1,
        p: emailInbox,
        o: {
          delay:         600,
        }
      },
      {
        e: envelope1,
        p: moveDown,
      },
      {
        e: envelope1blue,
        p: hideIt,
        o: {
          sequenceQueue: false,
        }
      },
      {
        e: envelope1red,
        p: showIt,
        o: {
          sequenceQueue: false,
        }
      },
      {
        e: envelope1,
        p: moveUp,
        o: {
          delay:         600,
          sequenceQueue: false,
        }
      },
      {
        e: envelope1,
        p: emailSafe,
        o: {
          easing:        'ease-in',
        }
      },
      {
        e: envelope1,
        p: emailOutbox,
        o: {
          easing:        'ease-out',
        }
      },
      {
        e: envelope1,
        p: moveDown,
      },
      {
        e: envelope1,
        p: moveUp,
        o: {
          delay:         600,
        }
      },
      {
        e: envelope1,
        p: emailPhone,
      },
      {
        e: envelope1,
        p: {
          translateZ:    '0vw',
          scale:         0.5,
        },
      },
      {
        e: envelope1red,
        p: hideIt,
        o: {
          delay:         600,
        }
      },
      {
        e: text1,
        p: hideIt,
        o: {
          delay:         600,
          sequenceQueue: false,
        }
      },
      // Scene 2
      {
        e: text2,
        p: showIt,
      },
      {
        e: phoneWindow,
        p: showIt,
        o: {
          sequenceQueue: false,
        }
      },
      {
        e: laptopWindow,
        p: showIt,
        o: {
          sequenceQueue: false,
        }
      },
      {
        e: backgroundBlue,
        p: showIt,
        o: {
          sequenceQueue: false,
        }
      },
      {
        e: backgroundRed,
        p: hideIt,
        o: {
          sequenceQueue: false,
        }
      },
      {
        e: foregroundBlue,
        p: showIt,
        o: {
          sequenceQueue: false,
        }
      },
      {
        e: foregroundRed,
        p: hideIt,
        o: {
          sequenceQueue: false,
        }
      },
      {
        e: line2,
        p: {
          borderColor:   '#0247DC',
        },
        o: {
          sequenceQueue: false,
        }
      },
      {
        e: line3,
        p: {
          borderColor:   '#0247DC',
        },
        o: {
          sequenceQueue: false,
        }
      },
      {
        e: envelope2blue,
        p: showIt,
        o: {
          delay:         2000,
        }
      },
      {
        e: envelope2,
        p: emailInbox,
        o: {
          delay:         600,
        }
      },
      {
        e: envelope2,
        p: moveDown,
      },
      {
        e: envelope2,
        p: moveUp,
        o: {
          delay:         600,
        }
      },
      {
        e: envelope2,
        p: emailSafe,
        o: {
          easing:        'ease-in',
        }
      },
      {
        e: envelope2,
        p: emailOutbox,
        o: {
          easing:        'ease-out',
        }
      },
      {
        e: envelope2,
        p: moveDown,
      },
      {
        e: envelope2,
        p: moveUp,
        o: {
          delay:         600,
        }
      },
      {
        e: envelope2,
        p: emailPhone,
      },
      {
        e: envelope2,
        p: {
          translateZ:    '0vw',
          scale:         0.5,
        },
      },
      {
        e: envelope1blue,
        p: hideIt,
        o: {
          delay:         600,
        }
      },
      {
        e: text2,
        p: hideIt,
        o: {
          delay:         600,
          sequenceQueue: false,
        }
      },
      // Scene 3
      {
        e: text3,
        p: showIt,
      },
      {
        e: line5,
        p: showIt,
        o: {
          sequenceQueue: false,
        }
      },
      {
        e: line6,
        p: showIt,
        o: {
          sequenceQueue: false,
        }
      },
      {
        e: envelope3blue,
        p: showIt,
        o: {
          delay:         600,
        }
      },
      {
        e: envelope3,
        p: emailInbox,
        o: {
          delay:         600,
        }
      },
      {
        e: envelope3,
        p: moveDown,
      },
      {
        e: envelope3,
        p: moveUp,
        o: {
          delay:         600,
        }
      },
      {
        e: envelope3blue,
        p: hideIt,
        o: {
          sequenceQueue: false,
        }
      },
      {
        e: envelope3red,
        p: showIt,
        o: {
          sequenceQueue: false,
        }
      },
      {
        e: envelope3,
        p: emailUnsafe,
        o: {
          easing:        'ease-in',
        }
      },
      {
        e: envelope3,
        p: emailOutbox,
        o: {
          easing:        'ease-out',
        }
      },
      {
        e: envelope3,
        p: moveDown,
      },
      {
        e: envelope3,
        p: moveUp,
        o: {
          delay:         600,
        }
      },
      {
        e: envelope3,
        p: emailPhone,
      },
      {
        e: envelope3,
        p: {
          translateZ:    '0vw',
          scale:         0.5,
        },
      },
      {
        e: envelope2blue,
        p: hideIt,
        o: {
          delay:         600,
        }
      },
      {
        e: envelope3red,
        p: hideIt,
        o: {
          delay:         600,
          sequenceQueue: false,
        }
      },
      {
        e: text3,
        p: hideIt,
        o: {
          delay:         600,
          sequenceQueue: false,
        }
      },
      // Scene 4
      {
        e: text4,
        p: showIt,
      },
      {
        e: phoneWindow,
        p: hideIt,
        o: {
          sequenceQueue: false,
        }
      },
      {
        e: laptopWindow,
        p: hideIt,
        o: {
          sequenceQueue: false,
        }
      },
      {
        e: line5,
        p: hideIt,
        o: {
          sequenceQueue: false,
        }
      },
      {
        e: line6,
        p: hideIt,
        o: {
          sequenceQueue: false,
        }
      },
      {
        e: envelope4blue,
        p: showIt,
        o: {
          delay:         600,
        }
      },
      {
        e: envelope4,
        p: emailInbox,
        o: {
          delay:         600,
        }
      },
      {
        e: envelope4,
        p: moveDown,
      },
      {
        e: envelope4,
        p: moveUp,
        o: {
          delay:         600,
        }
      },
      {
        e: envelope4,
        p: emailSafe,
        o: {
          easing:        'ease-in',
        }
      },
      {
        e: envelope4,
        p: emailOutbox,
        o: {
          easing:        'ease-out',
        }
      },
      {
        e: envelope4,
        p: moveDown,
      },
      {
        e: envelope4,
        p: moveUp,
        o: {
          delay:         600,
        }
      },
      {
        e: envelope4,
        p: emailPhone,
      },
      {
        e: envelope4,
        p: {
          translateZ:    '0vw',
          scale:         0.5,
        },
      },
      {
        e: envelope4blue,
        p: hideIt,
        o: {
          delay:         600,
        }
      },
      {
        e: laptopTop,
        p: {
          rotateX:       '0deg',
        },
        o: {
          delay:         600,
          sequenceQueue: false,
        }
      },
      {
        e: text4,
        p: hideIt,
        o: {
          delay:         600,
          sequenceQueue: false,
        }
      },
      {
        e: text5,
        p: showIt,
        o: {
          delay:         600,
          sequenceQueue: false,
        }
      },
    ];
    $.Velocity.RunSequence(mailSequence);
  }
  $('.animation .replay').click(function() {
    $.Velocity.RunSequence(mailSequence);
  });
});
