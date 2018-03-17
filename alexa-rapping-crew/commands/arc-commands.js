


var socket = io.connect();
var slider;
jQuery(function ($) {
  //handle the requests
  socket.on('arc.voicemessage', function (data) {
      switch (data.cmd) {
        case "beat":
          //load the beats
          break;
        case "play":
          playKaraoke();
          break;
        case "stop":
          stopKaraoke();
          break;
        case "begin":
          slider.reloadSlider();
          break;                
      }
  });
});