// shim layer with setTimeout fallback
window.requestAnimFrame = (function(){
    return  window.requestAnimationFrame       ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame    ||
            function( callback ){
              window.setTimeout(callback, 1000 / 60);
            };
  })();
  
  var canvas = document.getElementById('draw-pad');
  var context = canvas.getContext('2d');
  var x = 10; //canvas.width / 2;
  var y = canvas.height / 2;
  //todo set text
  var txt = 'All I need\'s a little love in my life';
  var w = 0;
  var clearH = 40;
  var clearY = 5;
  var clearX = 8;
  var stopFlag = false;
  var animRequestId = -1;
  
  context.font = 'bold 2em sans-serif';
  // textAlign aligns text horizontally relative to placement
  context.textAlign = 'left';
  // textBaseline aligns text vertically relative to font style
  context.textBaseline = 'middle';
  context.lineWidth = 4;
  context.strokeStyle = 'black';
  
  function runText() {
  //   console.log('Run text', w);
    if (w > 500) {
      context.clearRect(clearX, clearY, w, clearH);
      w = 0;
    }
    if (w === 0) {
      context.fillStyle = 'lightblue';
      context.strokeText(txt, x, y);
      context.fillText(txt, x, y);
      context.fillStyle = 'red';
    }
    
    context.save();
    context.beginPath();
    context.clearRect(clearX, clearY, w, clearH);
    context.rect(clearX, clearY, w, clearH);
    context.clip();
    context.strokeStyle = 'white';
    context.strokeText(txt, x, y);
    context.fillText(txt, x, y);
    context.restore();
    
    w++;
    if (!stopFlag) {
        animRequestId = requestAnimFrame(runText);
    }
  }

  function playAudio() {
      var audio = document.getElementById('audioSource');
      audio.play();
  }

  function stopAudio() {
    var audio = document.getElementById('audioSource');
    audio.pause();
  }

  function stopKaraoke() {
    stopFlag = true;
    stopAudio();
  }

  function playKaraoke() {
    stopFlag = false;
    //play the audio
    playAudio();
    //run the text
    runText();
  }
  
  //runText();
  