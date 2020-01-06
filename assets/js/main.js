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

// Game variables
let gameDifficulty;
let defaultHp = 20;
let defaultSp = 20;


// Classe du joueur
class Player{
  constructor(name, hp, sp, weapon){
    this.name = name;
    this.hp = hp;
    this.sp = sp;
    this.weapon = weapon;
  }

  setHp(number){
    this.hp = number;
  }

  setSp(number2){
    this.sp = number2;
  }

  getName(){
    return this.name;
  }
  getHp(){
    return this.hp;
  }
  getSp(){
    return this.sp;
  }
  getCurrentWeapon(){
    return this.weapon;
  }
}

function changeScene(oldScene, newScene){
  toNone = document.getElementById(oldScene);
  toFlex = document.getElementById(newScene);

  toNone.classList.remove('d-flex');
  toNone.classList.add('d-none');
  toFlex.classList.remove('d-none');
  toFlex.classList.add('d-flex');

  console.log("Transition : " + oldScene + " -> " + newScene);
}

function getRandomNumberSoldats(min, max){
  return Math.floor(Math.random() * (max - min) + min);
}

function checkClickedButtonLeger(){
  player.setHp(45);
  player.setSp(15);
  scene02();
}

function checkClickedButtonLourd(){
  player.setHp(30);
  player.setSp(30);
  scene02();
}

function attaquerSoldats(){
  console.log("Attaque en cours !");

  let degats = getRandomNumberSoldats(0, 5);
  console.log("Degats recus : " + degats);
  player.setHp(player.getHp() - degats);
  console.log("Attaque Terminée !");
  document.getElementById('stats-hp-scene03').innerHTML = "HP : " + player.getHp();
  document.getElementById('dialog-text-scene03').innerHTML = "Etant donné votre supériorité numérique, et votre armement supérieur, vous parvenez a neutraliser les 3 hommes sans soucis, vous prenez malgré tout " + degats + " points de dégats.";
}

function fouillerLotissementScene04(){
  console.log("Fouille en cours...");
  document.getElementById('dialog-text-scene04').innerHTML = "Aie !<br>Il s'avère que ce lotissement abandonné est un terrain miné. Après quelques instant, vous entendez une explosion, suivie d'une autre, puis d'un autre encore.<br>La première à cuasé une reaction en chaine !<br>Vous êtes piégés, vous ne pouvez vous en sortir.<br> Vous mourrez instantanément.";
  document.getElementById('choices-container-scene04').innerHTML = "<h1>GAME OVER</h1><button class='btn btn-outline-light btn-lg' type='button' onclick='document.location.reload(true);'>Retour au menu</button>"
  player.setHp(0);
  player;setSp(0);
  document.getElementById('stats-hp-scene04').innerHTML = "HP : " + player.getHp();
  document.getElementById('stats-hp-scene04').innerHTML = "SP : " + player.getSp();
}

function intro_01(){
  // Creation du joueur
  playerName = document.getElementById('playerName').value;
  player = new Player(playerName, defaultHp, defaultSp, "none");

  changeScene('body-container', 'intro-01');
  console.log('Nom du joueur : ' + playerName);

  document.getElementById('title-intro-01').innerHTML = "Introduction";
  document.getElementById('text-intro-01').innerHTML = "Le monde va mal...<br>L'humanité est au bord de l'extinction. Des embarcations spatiales ont étés construites, tout est prêt. Mais les partisants d'une secte ne croyant pas à la survie de l'espèce humaine ont lancés leur dernière attaque il y a 12h, et les plans de vols des vaisseaux spaciaux censé enmener les Hommes vers leur nouvelle maison ont été volés. Sans ces plans de vol, l'humaniter ne pourra pas quitter la Terre. Vous etes le seul a pouvoir verifier l'autenticité de ces plans, stockés sur disques durs...<br>Saurez-vous les récupérer à temps, en évitant de mourir ?";
}

function scene01(){
  changeScene('intro-01', 'scene01');

  document.getElementById('stats-name-scene01').innerHTML = "Pseudo : " + player.getName();
  document.getElementById('stats-hp-scene01').innerHTML = "HP : " + player.getHp();
  document.getElementById('stats-sp-scene01').innerHTML = "SP : " + player.getSp();

  document.getElementById('dialog-text-scene01').innerHTML = "Vous apprenez que vous devez accompagner l'équipe armée chargée de retrouver les disques durs que vous devrez décrypter, on vous propose deux méthodes d'équipement, vous devez choisir."
}

function scene02(){
  changeScene('scene01', 'scene02');

  document.getElementById('stats-name-scene02').innerHTML = "Pseudo : " + player.getName();
  document.getElementById('stats-hp-scene02').innerHTML = "HP : " + player.getHp();
  document.getElementById('stats-sp-scene02').innerHTML = "SP : " + player.getSp();

  document.getElementById('dialog-text-scene02').innerHTML = "Des informateurs aliés rapportent à votre equipe que les disques durs se trouvent dans un coffre fort dans l'avant poste 471, le QG des partisants de l'extinction.<br>Vous finissez de vous préparer, faites vos derniers aurevoirs et puis partez, avec vos compagnons armés.";
}

function scene03(){
  changeScene('scene02', 'scene03');

  document.getElementById('stats-name-scene03').innerHTML = "Pseudo : " + player.getName();
  document.getElementById('stats-hp-scene03').innerHTML = "HP : " + player.getHp();
  document.getElementById('stats-sp-scene03').innerHTML = "SP : " + player.getSp();

  document.getElementById('dialog-text-scene03').innerHTML = "Apres quelques heures de route sans encombres, vous arrivez aux abords d'un petit camp enemi, 3 hommes sont la, assis, il discutent, armes a la main.<br>La nuit ne va pas tarder a tomber, mais aimeriez récupérer les vivres de ces hommes.<br>Vous etes 5 donc en supériorité numérique.<br>Choisissez vous de les attaquer ?";
}

function contexteAvantScene04(){
  document.getElementById('dialog-text-scene03').innerHTML = "Vous décidez collectivement de passer votre chemin, vous contournez le camp, sans un bruit, et vous vous remetez en marche jusqu'à la nuit tombée, avant de faire un camp et de vous endormir a la vue des étoiles.";
}

function scene04(){
  changeScene('scene03', 'scene04');

  document.getElementById('stats-name-scene04').innerHTML = "Pseudo : " + player.getName();
  document.getElementById('stats-hp-scene04').innerHTML = "HP : " + player.getHp();
  document.getElementById('stats-sp-scene04').innerHTML = "SP : " + player.getSp();

  document.getElementById('dialog-text-scene04').innerHTML = "Vous vous réveillez, c'est le second jour, il est tôt.<br>Vous vous remetez en route, puis, sur votre chemin, vous croisez un lotissement abandoné.<br>Vous arreter et fouiller les ruines ?";
}

function contexteAvantScene05(){
  document.getElementById('dialog-text-scene04').innerHTML = "Vous avez bien fait de passer votre chemin !<br>Si vous étiez aller fouiller ce fameux lotissement, vous seriez mort dans une explosion en chaîne car ce terrain était miné :)";
}

function scene05(){
  changeScene('scene04', 'scene05');

  document.getElementById('stats-name-scene05').innerHTML = "Pseudo : " + player.getName();
  document.getElementById('stats-hp-scene05').innerHTML = "HP : " + player.getHp();
  document.getElementById('stats-sp-scene05').innerHTML = "SP : " + player.getSp();

  document.getElementById('dialog-text-scene05').innerHTML = "L'avant poste 471 est à encore deux jours de marche et les choses se compliquent !<br>Vous vous faites surprendre par une horde de sectaires anti-humanité ! Ils sont clairement en plus grand nombre que vous !<br>Vous avez trois solutions !";
}

function scene05Suicide(){
  document.getElementById('dialog-text-scene05').innerHTML = "VRAIMENT ?! VOUS ÊTES PAS SERIEUX ! HONTE SUR VOUS !<br>Vous vous suicidez...";
  document.getElementById('choices-container-scene05').innerHTML = "<h1>GAME OVER</h1><button class='btn btn-outline-light btn-lg' type='button' onclick='document.location.reload(true);'>Retour au menu</button>";
  player.setHp(0);
  player;setSp(0);
  document.getElementById('stats-hp-scene05').innerHTML = "HP : " + player.getHp();
  document.getElementById('stats-hp-scene05').innerHTML = "SP : " + player.getSp();
  document.getElementById('next-button-scene05').classList.add('d-none');
}

function negociationScene05(){
  document.getElementById('dialog-text-scene05').innerHTML = "Vous tentez une négociation... Vos assaillants sont perplexes, mais, grâce à cette petite conversation, deux de vos hommes ont pus se faufiller, et prendre l'avantage du terrain, ils commence a tirer !<br>Vous avez réussi à avoir l'effet de surprise ! Ce qui vous permet de surpasser les membres de la secte ! Vous sortez de ce combat gravement bléssés mais en vie, vous pouvez continuer votre aventure !";
  player.setHp(player.getHp() - (player.getHp()-20));
  player.setSp(player.getSp() - (player.getSp()-15));
  document.getElementById('stats-hp-scene05').innerHTML = "HP : " + player.getHp();
  document.getElementById('stats-hp-scene05').innerHTML = "SP : " + player.getSp();
}

function attaqueScene05(){
  document.getElementById('dialog-text-scene05').innerHTML = "Vous tentez d'attaquer de face ! Les balles pleuvent ! Toute votre équipe est gravelent bléssée...<br>Mais tout à coup, plus rien, tout s'arrete, le silence.<br>Un membre de la secte se met à parler :<br>Vous êtes à la recherche des plans de vol n'est-ce pas ? Et bien sachez que votre avanture s'arrete la !<br>Vous êtes désormais prisoniers de guerre, et n'essayez pas de fuir, vous en mourriez..<br>Vous pouvez dire adieu, à votre vie, vous périrez avec nous, sur cette même planette.";
  document.getElementById('choices-container-scene05').innerHTML = "<h1>GAME OVER</h1><button class='btn btn-outline-light btn-lg' type='button' onclick='document.location.reload(true);'>Retour au menu</button>";
  document.getElementById('next-button-scene05').classList.add('d-none');
  player.setHp(player.getHp() - (player.getHp()-5));
  player.setSp(0);
  document.getElementById('stats-hp-scene05').innerHTML = "HP : " + player.getHp();
  document.getElementById('stats-sp-scene05').innerHTML = "SP : " + player.getSp();
}

function scene06(){
  changeScene('scene05', 'scene06');

  document.getElementById('stats-name-scene06').innerHTML = "Pseudo : " + player.getName();
  document.getElementById('stats-hp-scene06').innerHTML = "HP : " + player.getHp();
  document.getElementById('stats-sp-scene06').innerHTML = "SP : " + player.getSp();

  document.getElementById('dialog-text-scene06').innerHTML = "Des maisons sont en vu ! Vous reconnaissez aussi un drapeau des gouvernements réunifiés ! C'est une très bonne nouvelle !<br>Vous marchez avec votre équipe, en direction de ce quartier de la capitale..<br>Vous arrivez chez une habitante qui vous offre hospitalité, vous pouvez vous soigner !";
}

function healScene06(){
  document.getElementById('stats-name-scene06').innerHTML = "Pseudo : " + player.getName();
  player.setHp(defaultHp);
  player.setSp(defaultSp);
  document.getElementById('stats-hp-scene06').innerHTML = "HP : " + player.getHp();
  document.getElementById('stats-sp-scene06').innerHTML = "SP : " + player.getSp();

  document.getElementById('dialog-text-scene06').innerHTML = "Vous vous êtes bien reposés, vous etes pret a repartir !<br>Le couple qui vous a acceuilli vous préviens néanmoins :<br>Des groupes de membres de la secte sont sur le chemin de l'avant-poste 471...<br>Faites attention.";
}

function scene07(){
  changeScene('scene06', 'scene07');

  document.getElementById('stats-name-scene07').innerHTML = "Pseudo : " + player.getName();
  document.getElementById('stats-hp-scene07').innerHTML = "HP : " + player.getHp();
  document.getElementById('stats-sp-scene07').innerHTML = "SP : " + player.getSp();

  document.getElementById('dialog-text-scene07').innerHTML = "Le couple vous aviez prévenus, vous trouvez sur le chemin un tas d'hommes et de femmes armés, mais apparement ils morts sur le chemin, il ont surement été tués lors d'un raid aérien du gouvernement.";
}

function disguiseScene07(){
  document.getElementById('dialog-text-scene07').innerHTML = "Vous vous déguisez, les habits sont en relatif bon état et vous vont plutôt bien aussi, ce sera surement un atout pour rentrer dans la forteresse qu'est l'avant-poste 471.";
}

function contecteAvantScene08(){
  document.getElementById('dialog-text-scene07').innerHTML = "Vous ne vous déguisez pas...<br>Peut être le regretterez vous ?";
}

function scene08(){
  changeScene('scene07', 'scene08');

  document.getElementById('stats-name-scene08').innerHTML = "Pseudo : " + player.getName();
  document.getElementById('stats-hp-scene08').innerHTML = "HP : " + player.getHp();
  document.getElementById('stats-sp-scene08').innerHTML = "SP : " + player.getSp();

  document.getElementById('dialog-text-scene08').innerHTML = "En fouillant une des personnes décédées, vous trouvez un sac qui à l'air remplis, ce qui se trouve dedans pourait être intéréssant...";
}

function openSacScene08(){
  document.getElementById('dialog-text-scene08').innerHTML = "Super ! Vous ouvrez le sac et y trouvez un badge magnétique, vous reconnaissez tout de suite l'insigne des hauts placés de la secte !<br>Un coup de chance !<br>Autre chose est visible mais solidement soudé sous un objet cubique : Un trouveau de clé, très probablement celui de la prison de la secte ! Vous essayez de l'attraper, mais, quelque chose de bizarre se trame, vous tendez l'oreille...<br>Non vous ne revez pas ! C'est bien le détonateur d'une bombe artisanale !";
}

function  contexteAvantScene09(){
  document.getElementById('dialog-text-scene08').innerHTML = "Vous sentez le mauvais présage, vous décidez de ne plus rien toucher.";
  changeScene('scene08', 'scene09');
}

function scene09(){
  changeScene('scene08', 'scene09');

  document.getElementById('stats-name-scene09').innerHTML = "Pseudo : " + player.getName();
  document.getElementById('stats-hp-scene09').innerHTML = "HP : " + player.getHp();
  document.getElementById('stats-sp-scene09').innerHTML = "SP : " + player.getSp();

  document.getElementById('dialog-text-scene09').innerHTML = "Que faire ?";
}

function throwBagScene09(){
  document.getElementById('dialog-text-scene09').innerHTML = "Vous jettez le sac a temps avant que celle-ci n'explose mais vous êtes souflé par l'explosion et êtes légèrement bléssé...<br>Vous perdez 10 points de vie et 5 points de défence."
  player.setHp(player.getHp() - 10);
  player.setSp(player.getSp() - 5);
  document.getElementById('stats-hp-scene09').innerHTML = "HP : " + player.getHp();
  document.getElementById('stats-sp-scene09').innerHTML = "SP : " + player.getSp();
}

function notThrowBagScene09(){
  document.getElementById('choices-container-scene05').innerHTML = "<h1>GAME OVER</h1><button class='btn btn-outline-light btn-lg' type='button' onclick='document.location.reload(true);'>Retour au menu</button>";
  player.setHp(0);
  player;setSp(0);
  document.getElementById('stats-hp-scene09').innerHTML = "HP : " + player.getHp();
  document.getElementById('stats-hp-scene09').innerHTML = "SP : " + player.getSp();
  document.getElementById('next-button-scene09').classList.add('d-none');
  document.getElementById('dialog-text-scene09').innerHTML = "Vous tenez de désamorser la bombe, mais c'est trop tard, elle vous explose en main.<br>Vous êtes mort. Vos cohéquipiers ne pourront pas décrypter les disques durs... Tout espoir est perdu."
}

function scene10(){
  changeScene('scene09', 'scene10');

  document.getElementById('stats-name-scene10').innerHTML = "Pseudo : " + player.getName();
  document.getElementById('stats-hp-scene10').innerHTML = "HP : " + player.getHp();
  document.getElementById('stats-sp-scene10').innerHTML = "SP : " + player.getSp();

  document.getElementById('dialog-text-scene10').innerHTML = "Enfin ! Vous arrivez devant l'avant poste 471...<br>Il n'y a personne devant, aucune résistance, vous parvenez même a rentrer grace au badge que vous avez trouvé plus tôt !<br>Une fois a l'intérieur, c'est une découverte étonante et choquante que vous découvrez...";
}

function end(){
  changeScene('scene10', 'outro');
  document.getElementById('title-outro').innerHTML = "The End";
  document.getElementById('text-outro').innerHTML = "C'est la fin de la première partie du jeu 'The Stolen Plans', écrit et développé par Enzo AVAGLIANO";
}
