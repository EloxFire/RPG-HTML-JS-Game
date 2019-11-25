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


// Classe du joueur
class Player{
  constructor(name, gender, hp, sp, exp, grade){
    this.name = name;
    this.gender = gender;
    this.hp = hp;
    this.sp = sp;
    this.exp = exp;
    this.grade = grade;
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
}

function setPlayerInfos(){
  playerName = nameInput.value;
  playerGender = genderInput.value;

  player = new Player(playerName, playerGender, defaultHp, defaultSp, defaultExp, "Heros");

  console.log("Player's name : " + player.getName());
  console.log("Player's gender : " + player.getGender());
  console.log("Player's HP : " + player.getHp());
  console.log("Player's SP : " + player.getSp());
  console.log("Player's experience : " + player.getExp());
  console.log(' ');
  console.log("Player infos were set successfully !");
  console.log(' ');
}
