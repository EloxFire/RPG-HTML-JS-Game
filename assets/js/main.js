let audio;
let isChanged = false;
let defaultVolume = 0.05;

window.onload = function(){
  audio = document.getElementById('audio');
  audio.volume = defaultVolume;
}

function muteVolume(){
  audio = document.getElementById('audio');
  audio.pause();
}

function unMuteVolume(){
  audio = document.getElementById('audio');
  audio.play();
}

function newGameHUD(){
  let main = document.getElementById('main');
  let ng = document.getElementById('newGame')
  main.classList.add('d-none');
  ng.classList.replace('d-none', "d-flex");
}

function mainMenuHUD(){
  let main = document.getElementById('main');
  let ng = document.getElementById('newGame')
  ng.classList.replace("d-flex", 'd-none');
  main.classList.replace('d-none', "d-flex");
}
