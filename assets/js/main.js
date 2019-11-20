let audio;

window.onload = function(){
  audio = document.getElementById('audio');
  audio.volume = 0.1;
}

function muteVolume(){
  audio = document.getElementById('audio');
  audio.pause();
}

function unMuteVolume(){
  audio = document.getElementById('audio');
  audio.play();
}
