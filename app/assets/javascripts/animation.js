$(document).ready(function() {
  if ($('.animation').length) {
    text1 =              $('.animation .text-1');
    text2 =              $('.animation .text-2');
    text3 =              $('.animation .text-3');
    text4 =              $('.animation .text-4');
    laptopTop =          $('.animation .laptop .top');
    envelope =           $('.animation .envelope');
    text1.css({
      display:           'none',
      position:          'absolute',
      opacity:           '0',
      top:               '0',
    });
    text2.css({
      display:           'none',
      position:          'absolute',
      opacity:           '0',
      top:               '0',
    });
    text3.css({
      display:           'none',
      position:          'absolute',
      opacity:           '0',
      top:               '0',
    });
    text4.css({
      display:           'none',
      position:          'absolute',
      opacity:           '0',
      top:               '0',
    });
    var mailSequence = [
      {
        e: text1,
        p: {
          display:       'block',
          opacity:       '1',
        },
        o: {
          duration:      '600',
          delay:         '600',
        }
      }, {
        e: laptopTop,
        p: {
          translateX:    '0',
          translateY:    '0',
          translateZ:    '1vw',
          rotateX:       '90deg',
          rotateY:       '0deg',
          rotateZ:       '0deg',
        },
        o: {
          sequenceQueue: 'false',
          duration:      '600',
          delay:         '600',
        }
      }, {
        e: envelope,
        p: {
          opacity:       '1',
        },
        o: {
          duration:      '300',
          delay:         '300',
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
          duration:      '600',
          delay:         '300',
        }
      }
    ];
    $.Velocity.RunSequence(mailSequence);
  }
});
