/*////////////////////////////////////////////*/
/* Program name : The Stolen Plans            */
/* Program author : Enzo 'EloxFire Avagliano' */
/* Program creation date : Nov-21-19          */
/*                                            */
/* Program version : 1.0                      */
/*////////////////////////////////////////////*/


// Player Variables
let player;
let playerName;
let playerGender;
let playerMindset;

// Game variables
let gameDifficulty;
let defaultHp = 20;
let defaultSp = 20;
let defaultExp = 0;

// DOM
let nameInput = document.getElementById('playerName');
let genderInput = document.getElementById('playerGender');
let mainContainer = document.getElementById('mainContainer');

let playerSPField = document.getElementById('playerSPField');
let playerExpField = document.getElementById('playerExpField');
let playerSelectedWeaponField = document.getElementById('playerSelectedWeapon');
let chapter = document.getElementById('chapter');
let locationText = document.getElementById('location');
let text = document.getElementById('text');


// Classe du joueur
class Player{
  constructor(name, gender, hp, sp, exp, grade, weapon){
    this.name = name;
    this.gender = gender;
    this.hp = hp;
    this.sp = sp;
    this.exp = exp;
    this.grade = grade;
    this.weapon = weapon;
  }

  getName(){
    return this.name;
  }
  getGender(){
    return this.gender;
  }
  getHp(){
    return this.hp;
  }
  getSp(){
    return this.sp;
  }
  getExp(){
    return this.exp;
  }
  getGrade(){
    return this.grade;
  }
  getCurrentWeapon(){
    return this.weapon;
  }
}

function setPlayerInfos(){
  playerName = document.getElementById('playerName').value;
  playerGender = document.getElementById('playerGender').value;
  player = new Player(playerName, playerGender, defaultHp, defaultSp, defaultExp, "Heros", "none");

  console.log("Player's name : " + player.getName());
  console.log("Player's gender : " + player.getGender());
  console.log("Player's HP : " + player.getHp());
  console.log("Player's SP : " + player.getSp());
  console.log("Player's experience : " + player.getExp());
  console.log(' ');
  console.log("Player infos were set successfully !");
  console.log(' ');
  // window.location.href = 'cinematic.html';
}

function initPage(){

  let main = document.getElementById('cinematic');
  let scene = document.getElementById('scene1');
  main.classList.replace('d-flex', 'd-none');
  scene.classList.replace('d-none', "d-flex");

  console.log("Player's name : " + playerName);
  console.log("Player's gender : " + player.getGender());
  console.log("Player's HP : " + player.getHp());
  console.log("Player's SP : " + player.getSp());
  console.log("Player's experience : " + player.getExp());
  console.log(' ');
  console.log("Player infos were set successfully !");
  console.log(' ');


  document.getElementById('playerNameField').innerHTML = "Player's name : ";
  document.getElementById('playerHPField').innerHTML = "Player's HP : " + player.getHp();
  playerSPField.innerHTML = "Player's SP : " + player.getSp();
  playerExpField.innerHTML = "Player's Exp : " + player.getExp();
  playerSelectedWeaponField.innerHTML = "Selected weapon : " + player.getCurrentWeapon();
  chapter.innerHTML = "Chapter 1";
  locationText.innerHTML = "Hangar 54";
}
