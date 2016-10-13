$(document).ready(function() {
  if ($(".animation").length) {
    // text1 = $('.animation .text-1');
    // text2 = $('.animation .text-2');
    // text3 = $('.animation .text-3');
    // text4 = $('.animation .text-4');
    // laptop = $('.animation .laptop');
    // laptop.css({
    //   display: 'block',
    //   top: '45%',
    //   left: '35%',
    //   width: '30%',
    //   height: '50%',
    //   position: 'absolute',
    //   opacity: 1
    // });
    animation = function() {
      // sequence = [
      //   {
      //     e: text1,
      //     p: {
      //       opacity: 1
      //     },
      //     o: {
      //       duration: 800,
      //       delay: 1500
      //     }
      //   }, {
      //     e: laptop,
      //     p: {
      //       zIndex: 1
      //     },
      //     o: {
      //       sequenceQueue: false
      //     }
      //   }
      // ];
      // return $.Velocity.RunSequence(sequence);
    };
    animationStarted = false;
    scrollAnimation = function() {
      if (!animationStarted) {
        if ($('.animation').visible()) {
          animationStarted = true;
          return animation();
        }
      }
    };
    $(window).scroll(function() {
      return scrollAnimation();
    });
    return scrollAnimation();
  }
});
