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
      translateX:        '10vw',
      translateY:        '32.3vw',
      translateZ:        '10vw',
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
      translateZ:        '4vw',
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
        e: $('.scene-1 .laptop .top'),
        p: {
          rotateX:       '0deg',
        },
      }, {
        e: $('.scene-1 .envelope .red'),
        p: hideIt,
        o: {
          duration:      0,
          sequenceQueue: false,
        },
      }, {
        e: $('.scene-1 .envelope'),
        p: emailLaptop,
        o: {
          duration:      0,
          sequenceQueue: false,
        },
      }, {
        e: $('.scene-1 .laptop .top'),
        p: {
          rotateX:       '90deg',
        },
      }, {
        e: $('.scene-1 .laptop-screen'),
        p: {
          height:        '9.75vw',
          top:           '1.25vw',
        },
        o: {
          duration:      200,
        },
      }, {
        e: $('.scene-1 .phone-screen'),
        p: {
          width:        '7.4vw',
          left:           '0vw',
        },
        o: {
          duration:      200,
          sequenceQueue: false,
        },
      }, {
        e: $('.scene-1 .laptop-screen'),
        p: {
          width:         '15.1vw',
          left:          '1.25vw',
        },
        o: {
          duration:      200,
        },
      }, {
        e: $('.scene-1 .phone-screen'),
        p: {
          height:         '4vw',
          top:          '0vw',
        },
        o: {
          duration:      200,
          sequenceQueue: false,
        },
      }, {
        e: $('.scene-1 .envelope-1 .red'),
        p: showIt,
      }, {
        e: $('.scene-1 .envelope-1'),
        p: emailInbox,
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
      },
    ];

    var aniScene2 = [
      {
        e: $('.scene-2 .laptop .top'),
        p: {
          rotateX:       '0deg',
        },
      }, {
        e: $('.scene-2 .envelope .red'),
        p: hideIt,
        o: {
          duration:      0,
          sequenceQueue: false,
        },
      }, {
        e: $('.scene-2 .envelope .blue'),
        p: hideIt,
        o: {
          duration:      0,
          sequenceQueue: false,
        },
      }, {
        e: $('.scene-2 .envelope .post_it'),
        p: hideIt,
        o: {
          duration:      0,
          sequenceQueue: false,
        },
      }, {
        e: $('.scene-2 .envelope'),
        p: emailLaptop,
        o: {
          duration:      0,
          sequenceQueue: false,
        },
      }, {
        e: $('.scene-2 .laptop .top'),
        p: {
          rotateX:       '90deg',
        },
      }, {
        e: $('.scene-2 .laptop-screen'),
        p: {
          height:        '9.75vw',
          top:           '1.25vw',
        },
        o: {
          duration:      200,
        },
      }, {
        e: $('.scene-2 .phone-screen'),
        p: {
          width:        '7.4vw',
          left:           '0vw',
        },
        o: {
          duration:      200,
          sequenceQueue: false,
        },
      }, {
        e: $('.scene-2 .laptop-screen'),
        p: {
          width:         '15.1vw',
          left:          '1.25vw',
        },
        o: {
          duration:      200,
        },
      }, {
        e: $('.scene-2 .phone-screen'),
        p: {
          height:         '4vw',
          top:          '0vw',
        },
        o: {
          duration:      200,
          sequenceQueue: false,
        },
      }, {
        e: $('.scene-2 .phone-window'),
        p: showIt,
      }, {
        e: $('.scene-2 .laptop-window'),
        p: showIt,
        o: {
          sequenceQueue: false,
        },
      }, {
        e: $('.scene-2 .envelope-2 .blue'),
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
        p: emailUnsafe,
      }, {
        e: $('.scene-2 .envelope-2 .blue'),
        p: hideIt,
        o: {
          duration:      0,
        },
      }, {
        e: $('.scene-2 .envelope-2 .post_it'),
        p: showIt,
        o: {
          duration:      0,
          sequenceQueue: false,
        },
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
      },
      // Second email is sent through unsafe
      {
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
        p: emailSafe,
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
        e: $('.scene-3 .envelope .green'),
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
        e: $('.scene-3 .laptop-screen'),
        p: {
          height:        '9.75vw',
          top:           '1.25vw',
        },
        o: {
          duration:      200,
        },
      }, {
        e: $('.scene-3 .phone-screen'),
        p: {
          width:        '7.4vw',
          left:           '0vw',
        },
        o: {
          duration:      200,
          sequenceQueue: false,
        },
      }, {
        e: $('.scene-3 .laptop-screen'),
        p: {
          width:         '15.1vw',
          left:          '1.25vw',
        },
        o: {
          duration:      200,
        },
      }, {
        e: $('.scene-3 .phone-screen'),
        p: {
          height:         '4vw',
          top:          '0vw',
        },
        o: {
          duration:      200,
          sequenceQueue: false,
        },
      }, {
        e: $('.scene-3 .envelope-1 .green'),
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
      },
    ];

    // Scene trackers
    var sceneRunning1 =  false;
    var sceneRunning2 =  false;
    var sceneRunning3 =  false;

    // Scene Switchers
    $('.sceneStarter1').click(function() {
      allStyles.removeAttr('style')
      $('.sceneStarter3, .sceneStarter2, .sceneStarter3 .btn, .sceneStarter2 .btn').removeClass('active');
      $('.sceneStarter1, .sceneStarter1 .btn').addClass('active');
      $('.scene-3, .scene-2').hide();
      $('.scene-1').show();

      if (sceneRunning1 == false) {
        sceneRunning1 = true;

        $.Velocity.RunSequence(aniScene1);

        // Set a timeout based on the amount of elements in the animation (default 400) before re-enabling the button
        setTimeout(function () {
          sceneRunning1 = false;
        }, aniScene1.length * 400);
      };
    });

    $('.sceneStarter2').click(function() {
      allStyles.removeAttr('style')
      $('.sceneStarter1, .sceneStarter3, .sceneStarter1 .btn, .sceneStarter3 .btn').removeClass('active');
      $('.sceneStarter2, .sceneStarter2 .btn').addClass('active');
      $('.scene-1, .scene-3').hide();
      $('.scene-2').show();

      if (sceneRunning2 == false) {
        sceneRunning2 = true;

        $.Velocity.RunSequence(aniScene2);

        // Set a timeout based on the amount of elements in the animation (default 400) before re-enabling the button
        setTimeout(function () {
          sceneRunning2 = false;
        }, aniScene2.length * 400);
      };
    });

    $('.sceneStarter3').click(function() {
      allStyles.removeAttr('style')
      $('.sceneStarter1, .sceneStarter2, .sceneStarter1 .btn, .sceneStarter2 .btn').removeClass('active');
      $('.sceneStarter3, .sceneStarter3 .btn').addClass('active');
      $('.scene-1, .scene-2').hide();
      $('.scene-3').show();

      if (sceneRunning3 == false) {
        sceneRunning3 = true;

        $.Velocity.RunSequence(aniScene3);

        // Set a timeout based on the amount of elements in the animation (default 400) before re-enabling the button
        setTimeout(function () {
          sceneRunning3 = false;
        }, aniScene3.length * 400);
      };
    });

    // Autoplay
    $('.sceneStarter3').click();
  };
});
