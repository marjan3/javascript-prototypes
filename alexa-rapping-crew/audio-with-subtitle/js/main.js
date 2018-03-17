// const CANVAS_WIDTH = 400;
// const CANVAS_HEIGHT = 200;
window.onload = function() {
    
  if (!document.createElement('track').track)  {
    alert('<track is not available in your browser.');
  }
  
  var audioPlayer = document.querySelector('.audioPlayer');
  var div1 = document.querySelector('.container > .row > .subtitleText > :first-child');
  var div2 = document.querySelector('.container > .row > .subtitleText > :last-of-type');
  
  var track = audioPlayer.textTracks[0];
  track.mode = 'hidden';
  
  var idx = 0;
  
  track.oncuechange = function(e) {
  
    var cue = this.activeCues[0];
    if (cue) {
      if (idx == 0) {
        div2.className = '';
        div1.classList.remove('on');
        div1.innerHTML = '';
        div1.appendChild(cue.getCueAsHTML());
        div1.classList.add('on');
      } else {
        div1.className = '';
        div2.classList.remove('on');
        div2.innerHTML = '';
        div2.appendChild(cue.getCueAsHTML());
        div2.classList.add('on');
      }
  
      idx = ++idx % 2;
    }
  };
  
    var audio = document.querySelector(".audioPlayer");
    
    audio.play();
    var context = new AudioContext();
    var src = context.createMediaElementSource(audio);
      var analyser = context.createAnalyser();
  
      var canvas = document.querySelector(".audioVisualize");
    //   canvas.width = CANVAS_WIDTH;
    //   canvas.height = CANVAS_HEIGHT;
      var ctx = canvas.getContext("2d");
  
      src.connect(analyser);
      analyser.connect(context.destination);
  
      analyser.fftSize = 256;
  
      var bufferLength = analyser.frequencyBinCount;
      console.log(bufferLength);
  
      var dataArray = new Uint8Array(bufferLength);
  
      var WIDTH = canvas.width;
      var HEIGHT = canvas.height;
  
      var barWidth = (WIDTH / bufferLength) * 2.5;
      var barHeight;
      var x = 0;
  
      function renderFrame() {
        requestAnimationFrame(renderFrame);
  
        x = 0;
  
        analyser.getByteFrequencyData(dataArray);
  
        ctx.fillStyle = "#ffffff";
        ctx.fillRect(0, 0, WIDTH, HEIGHT);
  
        for (var i = 0; i < bufferLength; i++) {
          barHeight = dataArray[i];
          
          var r = barHeight + (25 * (i/bufferLength));
          var g = 250 * (i/bufferLength);
          var b = 50;
  
          ctx.fillStyle = "rgb(" + r + "," + g + "," + b + ")";
          ctx.fillRect(x, HEIGHT - barHeight, barWidth, barHeight);
  
          x += barWidth + 1;
        }
      }
  
      audio.play();
      renderFrame();
    };

  