$(function() {
  var intervalId;

  $(window).load(function() {
    $("html,body").animate({scrollTop: 0}, 100);
  });

  scrollStep = function() {
    window.scrollBy(0, 1);
    if($(window).scrollTop() + $(window).height() == $(document).height()) {
      alert("bottom!");
      clearInterval(intervalId);
    }
  }

  window.onkeydown = function(evt) {
    if (evt.keyCode == 32) {
      if (!intervalId) {
        intervalId = setInterval(scrollStep, 5);
        console.log('started')
      } else {
        clearInterval(intervalId);
        intervalId = null;
        console.log('stopped')
      }
    }
    return false;
  }
});
