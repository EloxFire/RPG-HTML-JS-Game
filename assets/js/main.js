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

function showCinematic(){
  let main = document.getElementById('newGame');
  let cine = document.getElementById('cinematic');
  main.classList.replace('d-flex', 'd-none');
  cine.classList.replace('d-none', "d-flex");
}


function changeScene(oldScene, newScene){
  toNone = document.getElementById(oldScene);
  toFlex = document.getElementById(newScene);

  toNone.classList.remove('d-flex');
  toNone.classList.add('d-none');
  toFlex.classList.remove('d-none');
  toFlex.classList.add('d-flex');
}
