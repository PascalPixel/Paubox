// On Turbolinks load, not on Ready.
$( document ).on('turbolinks:load', function() {

  // Use Modernizr to test if browser supports 3D, if not, show fallback (done in CSS already).
  if ($('.toy').length && $('.preserve3d').length) {

    // Pre-set elements to variables
    var allStyles        = $('.toy div[style]');
    var allVelocity      = $('.toy .velocity-animating');
    var scene1           = $('.scene-1');
    var scene2           = $('.scene-2');
    var scene3           = $('.scene-3');

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
      translateZ:        '5vw',
      rotateX:           '0deg',
      rotateY:           '0deg',
      rotateZ:           '90deg',
    };
    var emailSafe = {
      translateX:        '65.5vw',
      translateY:        '37.7vw',
      translateZ:        '5vw',
      rotateX:           '0deg',
      rotateY:           '0deg',
      rotateZ:           '45deg',
    };
    var emailUnsafe = {
      translateX:        '44.5vw',
      translateY:        '58.7vw',
      translateZ:        '5vw',
      rotateX:           '0deg',
      rotateY:           '0deg',
      rotateZ:           '45deg',
    };
    var emailOutbox = {
      translateX:        '64vw',
      translateY:        '58vw',
      translateZ:        '5vw',
      rotateX:           '0deg',
      rotateY:           '0deg',
      rotateZ:           '0deg',
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
        e: $('.scene-3 .laptop .top'),
        p: {
          rotateX:       '0deg',
        },
      }, {
        e: $('.scene-3 .envelope .blue'),
        p: hideIt,
        o: {
          duration:      0,
          sequenceQueue: false,
        },
      }, {
        e: $('.scene-3 .envelope .red'),
        p: hideIt,
        o: {
          duration:      0,
          sequenceQueue: false,
        },
      }, {
        e: $('.scene-3 .envelope'),
        p: emailLaptop,
        o: {
          duration:      0,
          sequenceQueue: false,
        },
      }, {
        e: $('.scene-3 .laptop .top'),
        p: {
          rotateX:       '90deg',
        },
      }, {
        e: $('.scene-3 .envelope-1 .blue'),
        p: showIt,
      }, {
        e: $('.scene-1 .envelope-1'),
        p: emailInbox,
      }, {
        e: $('.scene-1 .envelope-1 .blue'),
        p: hideIt,
        o: {
          sequenceQueue: false,
        },
      }, {
        e: $('.scene-1 .envelope-1 .red'),
        p: showIt,
        o: {
          sequenceQueue: false,
        },
      }, {
        e: $('.scene-1 .envelope-1'),
        p: moveDown,
      }, {
        e: $('.scene-1 .envelope-1'),
        p: moveUp,
      }, {
        e: $('.scene-1 .envelope-1'),
        p: emailSafe,
      }, {
        e: $('.scene-1 .envelope-1'),
        p: emailOutbox,
      }, {
        e: $('.scene-1 .envelope-1'),
        p: moveDown,
      }, {
        e: $('.scene-1 .envelope-1'),
        p: moveUp,
      }, {
        e: $('.scene-1 .envelope-1'),
        p: emailPhone,
      }, {
        e: $('.scene-3 .envelope-2 .blue'),
        p: showIt,
      }, {
        e: $('.scene-1 .envelope-2'),
        p: emailInbox,
      }, {
        e: $('.scene-1 .envelope-2 .blue'),
        p: hideIt,
        o: {
          sequenceQueue: false,
        },
      }, {
        e: $('.scene-1 .envelope-2 .red'),
        p: showIt,
        o: {
          sequenceQueue: false,
        },
      }, {
        e: $('.scene-1 .envelope-2'),
        p: moveDown,
      }, {
        e: $('.scene-1 .envelope-2'),
        p: moveUp,
      }, {
        e: $('.scene-1 .envelope-2'),
        p: emailSafe,
      }, {
        e: $('.scene-1 .envelope-2'),
        p: emailOutbox,
      }, {
        e: $('.scene-1 .envelope-2'),
        p: moveDown,
      }, {
        e: $('.scene-1 .envelope-2'),
        p: moveUp,
      }, {
        e: $('.scene-1 .envelope-2'),
        p: emailPhone,
      },
    ];

    var aniScene2 = [
      {
        e: $('.scene-3 .laptop .top'),
        p: {
          rotateX:       '0deg',
        },
      }, {
        e: $('.scene-3 .envelope .red'),
        p: hideIt,
        o: {
          duration:      0,
          sequenceQueue: false,
        },
      }, {
        e: $('.scene-3 .envelope .blue'),
        p: hideIt,
        o: {
          duration:      0,
          sequenceQueue: false,
        },
      }, {
        e: $('.scene-3 .envelope'),
        p: emailLaptop,
        o: {
          duration:      0,
          sequenceQueue: false,
        },
      }, {
        e: $('.scene-3 .laptop .top'),
        p: {
          rotateX:       '90deg',
        },
      }, {
        e: $('.scene-3 .envelope-2 .blue'),
        p: showIt,
      }, {
        e: $('.scene-2 .envelope-2'),
        p: emailInbox,
      }, {
        e: $('.scene-2 .envelope-2'),
        p: moveDown,
      }, {
        e: $('.scene-2 .envelope-2'),
        p: moveUp,
      }, {
        e: $('.scene-2 .envelope-2'),
        p: emailSafe,
      }, {
        e: $('.scene-2 .envelope-2'),
        p: emailOutbox,
      }, {
        e: $('.scene-2 .envelope-2'),
        p: moveDown,
      }, {
        e: $('.scene-2 .envelope-2'),
        p: moveUp,
      }, {
        e: $('.scene-2 .envelope-2'),
        p: emailPhone,
      }, {
        e: $('.scene-2 .envelope-2'),
        p: {
          translateZ:    '0vw',
          scale:         0.5,
        },
      }, {
        e: $('.scene-2 .line-5'),
        p: showIt,
        o: {
          sequenceQueue: false,
        },
      }, {
        e: $('.scene-2 .line-6'),
        p: showIt,
        o: {
          sequenceQueue: false,
        },
      }, {
        e: $('.scene-2 .envelope-1 .blue'),
        p: showIt,
      }, {
        e: $('.scene-2 .envelope-1'),
        p: emailInbox,
      }, {
        e: $('.scene-2 .envelope-1'),
        p: moveDown,
      }, {
        e: $('.scene-2 .envelope-1'),
        p: moveUp,
      }, {
        e: $('.scene-2 .envelope-1 .blue'),
        p: hideIt,
        o: {
          sequenceQueue: false,
        },
      }, {
        e: $('.scene-2 .envelope-1 .red'),
        p: showIt,
        o: {
          sequenceQueue: false,
        },
      }, {
        e: $('.scene-2 .envelope-1'),
        p: emailUnsafe,
      }, {
        e: $('.scene-2 .envelope-1'),
        p: emailOutbox,
      }, {
        e: $('.scene-2 .envelope-1'),
        p: moveDown,
      }, {
        e: $('.scene-2 .envelope-1'),
        p: moveUp,
      }, {
        e: $('.scene-2 .envelope-1'),
        p: emailPhone,
      },
    ];

    // Scene 3
    var aniScene3 = [
      {
        e: $('.scene-3 .laptop .top'),
        p: {
          rotateX:       '0deg',
        },
      }, {
        e: $('.scene-3 .envelope .blue'),
        p: hideIt,
        o: {
          duration:      0,
          sequenceQueue: false,
        },
      }, {
        e: $('.scene-3 .envelope'),
        p: emailLaptop,
        o: {
          duration:      0,
          sequenceQueue: false,
        },
      }, {
        e: $('.scene-3 .laptop .top'),
        p: {
          rotateX:       '90deg',
        },
      }, {
        e: $('.scene-3 .envelope-1 .blue'),
        p: showIt,
      }, {
        e: $('.scene-3 .envelope-1'),
        p: emailInbox,
      }, {
        e: $('.scene-3 .envelope-1'),
        p: moveDown,
      }, {
        e: $('.scene-3 .envelope-1'),
        p: moveUp,
      }, {
        e: $('.scene-3 .envelope-1'),
        p: emailSafe,
      }, {
        e: $('.scene-3 .envelope-1'),
        p: emailOutbox,
      }, {
        e: $('.scene-3 .envelope-1'),
        p: moveDown,
      }, {
        e: $('.scene-3 .envelope-1'),
        p: moveUp,
      }, {
        e: $('.scene-3 .envelope-1'),
        p: emailPhone,
      }, {
        e: $('.scene-3 .envelope-2 .blue'),
        p: showIt,
      }, {
        e: $('.scene-3 .envelope-2'),
        p: emailInbox,
      }, {
        e: $('.scene-3 .envelope-2'),
        p: moveDown,
      }, {
        e: $('.scene-3 .envelope-2'),
        p: moveUp,
      }, {
        e: $('.scene-3 .envelope-2'),
        p: emailSafe,
      }, {
        e: $('.scene-3 .envelope-2'),
        p: emailOutbox,
      }, {
        e: $('.scene-3 .envelope-2'),
        p: moveDown,
      }, {
        e: $('.scene-3 .envelope-2'),
        p: moveUp,
      }, {
        e: $('.scene-3 .envelope-2'),
        p: emailPhone,
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
