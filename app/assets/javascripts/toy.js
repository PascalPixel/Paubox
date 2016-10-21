// On Turbolinks load, not on Ready.
$( document ).on('turbolinks:load', function() {

  // Use Modernizr to test if browser supports 3D, if not, show fallback (done in CSS already).
  if ($('.toy').length && $('.preserve3d').length) {

    // Pre-set elements to variables
    var allStyles        = $('.toy div[style]');
    var allVelocity      = $('.toy .velocity-animating');
    var texts            = $('.toy .scenes');
    var text             = $('.toy .scene');
    var popups1          = $('.toy .scene-1');
    var popups2          = $('.toy .scene-2');
    var popups3          = $('.toy .scene-3');
    var line1            = $('.toy .line-1');
    var line2            = $('.toy .line-2');
    var line3            = $('.toy .line-3');
    var line4            = $('.toy .line-4');
    var line5            = $('.toy .line-5');
    var line6            = $('.toy .line-6');
    var laptopTop        = $('.toy .laptop .top');
    var phoneWindow      = $('.toy .phone-window');
    var laptopWindow     = $('.toy .laptop .laptop-window');
    var envelope         = $('.toy .envelope');
    var envelope1        = $('.toy .envelope-1');
    var envelope1blue    = $('.toy .envelope-1 .blue');
    var envelope1red     = $('.toy .envelope-1 .red');
    var envelope2        = $('.toy .envelope-2');
    var envelope2blue    = $('.toy .envelope-2 .blue');
    var envelope2red     = $('.toy .envelope-2 .red');

    // Variables for the location of email travelling back and forth
    var emailLaptop = {
      translateX:        '9vw',
      translateY:        '33.4vw',
      translateZ:        '11.5vw',
      rotateX:           '-90deg',
      rotateY:           '0deg',
      rotateZ:           '0deg',
      scale:             1,
    };
    var emailInbox = {
      translateX:        '44.2vw',
      translateY:        '39.5vw',
      translateZ:        '8vw',
      rotateX:           '0deg',
      rotateY:           '0deg',
      rotateZ:           '90deg',
    };
    var emailSafe = {
      translateX:        '65.5vw',
      translateY:        '37.7vw',
      translateZ:        '8vw',
      rotateX:           '0deg',
      rotateY:           '0deg',
      rotateZ:           '45deg',
    };
    var emailUnsafe = {
      translateX:        '44.5vw',
      translateY:        '58.7vw',
      translateZ:        '8vw',
      rotateX:           '0deg',
      rotateY:           '0deg',
      rotateZ:           '45deg',
    };
    var emailOutbox = {
      translateX:        '64vw',
      translateY:        '58vw',
      translateZ:        '8vw',
      rotateX:           '0deg',
      rotateY:           '0deg',
      rotateZ:           '0deg',
    };
    var emailPhone = {
      translateX:        '64.5vw',
      translateY:        '84.6vw',
      translateZ:        '8vw',
      rotateX:           '0deg',
      rotateY:           '0deg',
      rotateZ:           '0deg',
    };
    var moveUp = {
      translateZ:        '8vw',
    };
    var moveDown = {
      translateZ:        '0vw',
    };
    var showIt = {
      opacity:           1,
    };
    var hideIt = {
      opacity:           0,
    };

    var aniScene1 = [
      {
        e: envelope,
        p: emailLaptop,
        o: {
          duration:      0,
          delay:         0,
          sequenceQueue: false,
        }
      },
      {
        e: laptopTop,
        p: {
          rotateX:       '0deg',
        },
        o: {
          delay:         0,
          sequenceQueue: false,
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
        p: moveDown,
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
    ];

    var aniScene2 = [
      {
        e: envelope,
        p: emailLaptop,
        o: {
          duration:      0,
          delay:         0,
          sequenceQueue: false,
        }
      },
      {
        e: laptopTop,
        p: {
          rotateX:       '0deg',
        },
        o: {
          delay:         0,
          sequenceQueue: false,
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
        e: envelope1,
        p: moveUp,
        o: {
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
        p: emailUnsafe,
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
    ];

    // Scene 3
    var aniScene3 = [
      {
        e: envelope,
        p: emailLaptop,
        o: {
          duration:      0,
          delay:         0,
          sequenceQueue: false,
        }
      },
      {
        e: laptopTop,
        p: {
          rotateX:       '0deg',
        },
        o: {
          delay:         0,
          sequenceQueue: false,
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
        e: envelope2blue,
        p: showIt,
        o: {
          delay:         600,
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
    ];

    // Run toy
    $.Velocity.RunSequence(aniScene3);

    // Scene Switchers
    $('.sceneStarter1').click(function() {
      allStyles.removeAttr('style');

      $('.sceneStarter2, .sceneStarter3').removeClass('active');
      $(this).addClass('active');

      $('.scene-2, .scene-3').fadeOut();
      $('.scene-1').fadeIn();

      $.Velocity.RunSequence(aniScene1);
    });

    $('.sceneStarter2').click(function() {
      allStyles.removeAttr('style');

      $('.sceneStarter1, .sceneStarter3').removeClass('active');
      $(this).addClass('active');

      $('.scene-1, .scene-3').fadeOut();
      $('.scene-2').fadeIn();

      $.Velocity.RunSequence(aniScene2);
    });

    $('.sceneStarter3').click(function() {
      allStyles.removeAttr('style')

      $('.sceneStarter1, .sceneStarter2').removeClass('active');
      $(this).addClass('active');

      $('.scene-1, .scene-2').fadeOut();
      $('.scene-3').fadeIn();

      $.Velocity.RunSequence(aniScene3);
    });
  };
});
