// On Turbolinks load, not on Ready.
$( document ).on('turbolinks:load', function() {

  // Use Modernizr to test if browser supports 3D, if not, show fallback (done in CSS already).
  if ($('.toy').length && $('.preserve3d').length) {

    // Pre-set elements to variables
    var allStyles        = $('div[style]');
    var allVelocity      = $('.velocity-animating');
    var texts            = $('.toy .scenes');
    var text             = $('.toy .scene');
    var text1            = $('.toy .scene-1');
    var text2            = $('.toy .scene-2');
    var text3            = $('.toy .scene-3');
    var line1            = $('.toy .line-1');
    var line2            = $('.toy .line-2');
    var line3            = $('.toy .line-3');
    var line4            = $('.toy .line-4');
    var line5            = $('.toy .line-5');
    var line6            = $('.toy .line-6');
    var foregroundRed    = $('.toy .foreground .red');
    var foregroundBlue   = $('.toy .foreground .blue');
    var backgroundRed    = $('.toy .background .red');
    var backgroundBlue   = $('.toy .background .blue');
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
    var envelope3        = $('.toy .envelope-3');
    var envelope3blue    = $('.toy .envelope-3 .blue');
    var envelope3red     = $('.toy .envelope-3 .red');
    var envelope4        = $('.toy .envelope-4');
    var envelope4blue    = $('.toy .envelope-4 .blue');
    var envelope4red     = $('.toy .envelope-4 .red');
    var envelope5        = $('.toy .envelope-5');
    var envelope5blue    = $('.toy .envelope-5 .blue');
    var envelope5red     = $('.toy .envelope-5 .red');
    var envelope6        = $('.toy .envelope-6');
    var envelope6blue    = $('.toy .envelope-6 .blue');
    var envelope6red     = $('.toy .envelope-6 .red');

    // Move locations into variables
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
      translateZ:        '10vw',
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
      translateZ:        '10vw',
      rotateX:           '0deg',
      rotateY:           '0deg',
      rotateZ:           '0deg',
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
    var hideIt = {
      opacity:           0,
    };
    var lineDanger = {
      borderColor:   '#FF447F',
    };
    var lineInfo = {
      borderColor:   '#80A2ED',
    };
    var linePrimary = {
      borderColor:   '#0247DC',
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
        e: line1,
        p: lineInfo,
        o: {
          sequenceQueue: false,
        }
      },
      {
        e: line2,
        p: lineInfo,
        o: {
          sequenceQueue: false,
        }
      },
      {
        e: line3,
        p: lineInfo,
        o: {
          sequenceQueue: false,
        }
      },
      {
        e: line4,
        p: lineInfo,
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
        e: line1,
        p: linePrimary,
        o: {
          sequenceQueue: false,
        }
      },
      {
        e: line2,
        p: linePrimary,
        o: {
          sequenceQueue: false,
        }
      },
      {
        e: line3,
        p: linePrimary,
        o: {
          sequenceQueue: false,
        }
      },
      {
        e: line4,
        p: linePrimary,
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
    ];

    // Run toy
    $('.sceneStarter1').addClass('active');
    $('.scene-1').fadeIn();
    $.Velocity.RunSequence(aniScene1);

    // Scene Switcher
    var scene1Clicked = false;
    $('.sceneStarter1').click(function() {
      if (scene1Clicked == false) {
        scene1Clicked = true;
        allVelocity.velocity('stop', true);
        allStyles.removeAttr('style');
        $('.sceneStarter2, .sceneStarter3').removeClass('active');
        $(this).addClass('active');
        $('.scene-1').fadeIn();
        $('.scene-2').fadeOut();
        $('.scene-3').fadeOut();
        $.Velocity.RunSequence(aniScene1);
        setTimeout(function() {
          scene1Clicked = false;
        }, 2000);
      };
    });
    var scene2Clicked = false;
    $('.sceneStarter2').click(function() {
      if (scene2Clicked == false) {
        scene2Clicked = true;
        allVelocity.velocity('stop', true);
        allStyles.removeAttr('style');
        $('.sceneStarter1, .sceneStarter3').removeClass('active');
        $(this).addClass('active');
        $('.scene-1').fadeOut();
        $('.scene-2').fadeIn();
        $('.scene-3').fadeOut();
        $.Velocity.RunSequence(aniScene2);
        setTimeout(function() {
          scene2Clicked = false;
        }, 2000);
      };
    });
    var scene3Clicked = false;
    $('.sceneStarter3').click(function() {
      if (scene3Clicked == false) {
        scene3Clicked = true;
        allVelocity.velocity('stop', true);
        allStyles.removeAttr('style')
        $('.sceneStarter1, .sceneStarter2').removeClass('active');
        $(this).addClass('active');
        $('.scene-1').fadeOut();
        $('.scene-2').fadeOut();
        $('.scene-3').fadeIn();
        $.Velocity.RunSequence(aniScene3);
        setTimeout(function() {
          scene3Clicked = false;
        }, 2000);
      };
    });

    // Popups
    // $('.toy .dot').click(function(){
    //   if ($(this).parent().hasClass('active')) {
    //     $(this).parent().removeClass('active');
    //   } else {
    //     $('.toy .dot').parent().removeClass('active');
    //     $(this).parent().addClass('active');
    //   }
    // });
  };
});
