function moveScroller() {
  var move = function() {
    //alert(window.innerWidth);
    if (window.innerWidth > 1080) {
      var st = $(window).scrollTop();
      var ot = $("#scroller-anchor").offset().top;
      var s = $("#scroller");
      if(st > ot) {
        s.css({
          position: "fixed",
          top: "0px"
        });
      } else {
        if(st <= ot) {
          s.css({
            position: "relative",
            top: ""
          });
        }
      }
    }
    else {
      $("#scroller").css({
            position: "relative",
            top: ""
          });
    }
  };
  $(window).scroll(move);
  $(window).resize(move);
  move();
}


// fix for iOS zoom on rotation
$(function() {
  if (navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i)) {
      var viewportmeta = document.querySelector('meta[name="viewport"]');
      if (viewportmeta) {
          viewportmeta.content = 'width=device-width, minimum-scale=1.0, maximum-scale=1.0, initial-scale=1.0';
          document.body.addEventListener('gesturestart', function () {
              viewportmeta.content = 'width=device-width, minimum-scale=0.25, maximum-scale=1.6';
          }, false);
      }
  }
});