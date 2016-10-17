// On Turbolinks load, not on Ready.
$( document ).on('turbolinks:load', function() {

  // Use Modernizr to test if browser supports 3D, if not, show fallback (done in CSS already).
  if ($('.email_animation').length && $('.preserve3d').length) {

    // Pre-set elements to variables
    var texts            = $('.animation .texts');
    var text             = $('.animation .text');
    var text1            = $('.animation .text-1');
    var text2            = $('.animation .text-2');
    var text3            = $('.animation .text-3');
    var text4            = $('.animation .text-4');
    var text5            = $('.animation .text-5');
    var line1            = $('.animation .line-1');
    var line4            = $('.animation .line-4');
    var line5            = $('.animation .line-5');
    var line6            = $('.animation .line-6');
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

    // Move locations into variables
    var emailLaptop = {
      translateX:        '37.5vw',
      translateY:        '61.4vw',
      translateZ:        '11vw',
      rotateX:           '-90deg',
      rotateY:           '0deg',
      rotateZ:           '0deg',
      scale:             1,
    };
    var emailSafe = {
      translateX:        '65.5vw',
      translateY:        '66.5vw',
      translateZ:        '3vw',
      rotateX:           '0deg',
      rotateY:           '0deg',
      rotateZ:           '45deg',
    };
    var emailUnsafe = {
      translateX:        '43.5vw',
      translateY:        '84.6vw',
      translateZ:        '3vw',
      rotateX:           '0deg',
      rotateY:           '0deg',
      rotateZ:           '45deg',
    };
    var emailPhone = {
      translateX:        '64.5vw',
      translateY:        '84.6vw',
      translateZ:        '0vw',
      rotateX:           '0deg',
      rotateY:           '0deg',
      rotateZ:           '0deg',
      scale:             0.5,
    };
    var moveUp = {
      translateZ:        '10vw',
    };
    var moveDown = {
      translateZ:        '0vw',
    };
    var showIt = {
      opacity:           1,
    };
    var halfHideIt = {
      opacity:           0.1,
    };
    var hideIt = {
      opacity:           0,
    };

    // Main sequence
    var mailSequence     = [
      // Reset
      {
        e: text5,
        p: halfHideIt,
        o: {
          sequenceQueue: false,
        }
      },
      {
        e: line1,
        p: hideIt,
        o: {
          sequenceQueue: false,
        }
      },
      {
        e: line4,
        p: hideIt,
        o: {
          sequenceQueue: false,
        }
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
        p: showIt,
        o: {
          duration:      600,
          delay:         600,
        }
      },
      {
        e: envelope1,
        p: emailUnsafe,
        o: {
          duration:      600,
          delay:         600,
        }
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
        p: emailPhone,
        o: {
          duration:      600,
          delay:         600,
        }
      },
      {
        e: envelope1red,
        p: hideIt,
        o: {
          duration:      600,
          delay:         600,
        }
      },
      {
        e: text1,
        p: halfHideIt,
        o: {
          duration:      600,
          delay:         600,
        }
      },
      // Scene 2
      {
        e: text2,
        p: showIt,
        o: {
          duration:      600,
          delay:         600,
        }
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
        e: line1,
        p: showIt,
        o: {
          sequenceQueue: false,
        }
      },
      {
        e: line4,
        p: showIt,
        o: {
          sequenceQueue: false,
        }
      },
      {
        e: envelope2blue,
        p: showIt,
        o: {
          duration:      600,
          delay:         600,
        }
      },
      {
        e: envelope2,
        p: emailSafe,
        o: {
          duration:      600,
          delay:         600,
        }
      },
      {
        e: envelope2,
        p: emailPhone,
        o: {
          duration:      600,
          delay:         600,
        }
      },
      {
        e: envelope2blue,
        p: hideIt,
        o: {
          duration:      600,
          delay:         600,
        }
      },
      {
        e: text2,
        p: halfHideIt,
        o: {
          duration:      600,
          delay:         600,
        }
      },
      // Scene 3
      {
        e: text3,
        p: showIt,
        o: {
          duration:      600,
          delay:         600,
        }
      },
      {
        e: envelope3blue,
        p: showIt,
        o: {
          duration:      600,
          delay:         600,
        }
      },
      {
        e: envelope3,
        p: emailUnsafe,
        o: {
          duration:      600,
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
        p: emailPhone,
        o: {
          duration:      600,
          delay:         600,
        }
      },
      {
        e: envelope3red,
        p: hideIt,
        o: {
          duration:      600,
          delay:         600,
        }
      },
      {
        e: text3,
        p: halfHideIt,
        o: {
          duration:      600,
          delay:         600,
        }
      },
      // Scene 4
      {
        e: text4,
        p: showIt,
        o: {
          duration:      600,
          delay:         600,
        }
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
          duration:      600,
          delay:         600,
        }
      },
      {
        e: envelope4,
        p: emailSafe,
        o: {
          duration:      600,
          delay:         600,
        }
      },
      {
        e: envelope4,
        p: emailPhone,
        o: {
          duration:      600,
          delay:         600,
        }
      },
      {
        e: envelope4blue,
        p: hideIt,
        o: {
          duration:      600,
          delay:         600,
        }
      },
      {
        e: text4,
        p: halfHideIt,
        o: {
          duration:      600,
          delay:         600,
        }
      },
      // Scene 5
      {
        e: text5,
        p: showIt,
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
          sequenceQueue: false,
        }
      },
    ];

    // Run animation
    $.Velocity.RunSequence(mailSequence);

    // If Replay is clicked in CTA, start again
    $('.animation .replay').click(function() {
      $.Velocity.RunSequence(mailSequence);
    });
  };
});
