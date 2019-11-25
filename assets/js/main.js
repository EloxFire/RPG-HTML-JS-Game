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
  let mainTitle = document.getElementById('mainTitle');
  let mainSubtitle = document.getElementById('mainSubtitle');
  let buttonContainerOne = document.getElementById('buttonContainerOne');
  let buttonContainerTwo = document.getElementById('buttonContainerTwo');
  let buttonContainerThree = document.getElementById('buttonContainerThree');

  // Changement des textes
  mainTitle.innerHTML = "New Game";
  mainSubtitle.innerHTML = "Set the principals attributes of your game.";
  buttonContainerOne.innerHTML = " ";
  buttonContainerTwo.innerHTML = " ";
  buttonContainerThree.innerHTML = " ";

  buttonContainerOne.classList.add('col-12');
  buttonContainerTwo.classList.add('col-12');
  buttonContainerThree.classList.add('col-12');

  buttonContainerOne.innerHTML = "<form><div class='form-group'><label for='playerName'>Caracter Name :</label><input type='text' class='form-control' id='playerName' placeholder='Enter you player's name'></div>";
  buttonContainerTwo.innerHTML = "<div class='form-group'><label for='playerGender'>Caracter Gender :</label><select class='form-control' id='playerGender'><option>Male</option><option>Female</option></select></div>";
  buttonContainerThree.innerHTML = "<div class='form-group'><label for='playerMindset'>Caracter Mindset :</label><select class='form-control' id='playerMindset'><option>(Soon)</option><option>Feature under development</option></select></div><button type='button' onclick='setPlayerInfos();' class='btn btn-outline-light btn-lg mt-5'> <a href='cinematic.html'>Start Game</a> </button></div></form>";

}

function mainMenuHUD(){
  let mainTitle = document.getElementById('mainTitle');
  let mainSubtitle = document.getElementById('mainSubtitle');
  let buttonContainerOne = document.getElementById('buttonContainerOne');
  let buttonContainerTwo = document.getElementById('buttonContainerTwo');
  let buttonContainerThree = document.getElementById('buttonContainerThree');

  // Changement des textes
  mainTitle.innerHTML = "The Stolen Plans";
  mainSubtitle.innerHTML = "A game made by Enzo Avagliano.";
  buttonContainerOne.innerHTML = " ";
  buttonContainerTwo.innerHTML = " ";
  buttonContainerThree.innerHTML = " ";

  buttonContainerOne.classList.add('col-12');
  buttonContainerTwo.classList.add('col-12');
  buttonContainerThree.classList.add('col-12');

  buttonContainerOne.innerHTML = "<button class='btn btn-outline-light btn-lg' type='button' name='button' onclick='newGameHUD();'> <a href='#'>NEW GAME</a> </button><small>Start a new game, from the begining of the story.</small>";
  buttonContainerTwo.innerHTML = "<button class='btn btn-outline-light btn-lg' type='button' name='button' onclick=''> <a href='#'>CONTINUE</a> </button><small>Continue an existing game, from an existing save.</small>";
  buttonContainerThree.innerHTML = "<button class='btn btn-outline-light btn-lg' type='button' name='button' onclick=''> <a href='#'>SETTINGS</a> </button><small>Access the settings of the game (Volume, etc...).</small>";

}
