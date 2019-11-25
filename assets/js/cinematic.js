let main = document.getElementById('mainContainer');
let index = 0;

function cinematic(){
  if(index == 0){
    main.innerHTML = " ";
    main.innerHTML = "<div data-aos='fade-in' class='d-block text-center'> <div> <h1 class='h1'>25 février 2039</h1> </div><div data-aos='fade-in' class='container'> <p style='font-size: 1.2em;'>Ce jour restera dans les livres d'histoires et gravé à jamais dans l'esprit de tout etre humain. <br>C'est en ce jour que tous les scientifiques de la planète se mirrent d'accord sur un chose épouventable : <strong>La fin imminente du monde tel que nous le connaissons</strong>. <br><br>Cette information est à partir de ce jour en breaking news dans le monde entier et les prédictions annoncés ne sont pas belles à entendre... </p></div></div>";
    index = 1
  }else if(index == 1){
    main.innerHTML = " ";
    main.innerHTML = "<div data-aos='fade-in' class='d-block text-center'> <div> <h1 class='h1'>Année 2041</h1> </div><div data-aos='fade-in' class='container'> <p style='font-size: 1.2em;'>Les résultats des prédictions de la fin du monde se sont affinés, maintenant une date précise nous à été révélée.<br>Nous avons passé, il y a environ 3ans, un point de non-retour en termes de pollution atmosphérique et de taux de radioactivité. Le réchauffement climatique est en phase incontrolable et ne peut plus être renversé.<br>Dans ces conditions, rien n'ira en mieux et une date supplémentaire nous a été transmise.<br>Passé 2069, plus aucun être vivant ne pourrat supporter les conditions de vies de la Terre, certaines personnes présenterons des symptômes biens plus tôt néamoins.<br><br>Nous n'avons pas le choix, nous devons quitter notre chère Terre.</p></div></div>";
    index = 2;
  }else if(index == 2){
    main.innerHTML = " ";
    main.innerHTML = "<div data-aos='fade-in' class='d-block text-center'> <div> <h1 class='h1'>Année 2045</h1> </div><div data-aos='fade-in' class='container'> <p style='font-size: 1.2em;'>Durant les 6 dernières années, un effort mondial s'est mis en place; les gouvernements du monde entier se sont rencontrés et ont évoqué les possibilités.<br>Le monde s'entraide, et se met d'accord; dans l'ensemble...<br>Deux 'camps' se forment : <strong>Les 'éclaireurs', qui ont la volonté, et l'espoir. Ces derniers participent à cet effort mondial et veulent quitter la Terre.</strong>, de l'autre coté il y a <strong>les 'pirates', qui eux n'ont plus d'espoir et ont décider d'accepter leur sort. Ils cherchent par tous les moyens de sotpper les eclaireurs de quitter la Terre.</strong><br><br>La construction des premiers vaisseaux inter-planétaires afin d'enmener les quelques 8 Miliards d'habitants de la Terre vers 'V645 CEN B', autrement connue sous le nom de Proxima B, déinie comme nouveau berceau et refuge de l'humanité.</p></div></div>";
    index = 3;
  }else if(index == 3){
    main.innerHTML = " ";
    main.innerHTML = "<div data-aos='fade-in' class='d-block text-center'> <div> <h1 class='h1'>Année 2054</h1> </div><div data-aos='fade-in' class='container'> <p style='font-size: 1.2em;'>Une année noire...<br>Personne ne s'en était douté...<br>Les pirates ont menés une grande offensive et ont produit de nombreux dégâts, matériels principalement, mais plus de 5800 personnes sont décédés durant ces attaques simultanées.<br>46 vaisseaux qui étaient en phase de finalisation ont été détruits.<br>La construction a recommencé...</p></div></div>";
    index = 4;
  }else if(index == 4){
    main.innerHTML = " ";
    main.innerHTML = "<div data-aos='fade-in' class='d-block text-center'> <div> <h1 class='h1'>Année 2062</h1> </div><div data-aos='fade-in' class='container'> <p style='font-size: 1.2em;'>Ca y est, les autorités préparent la population à partir.<br>Les règles dont plutôt strictes : pas plus d'une valise par personne, mais c'est le prix a payer pour pouvoir survivre à la fin de notre monde.<br><br>Le départ est prévu pour 2067. Le GMU (Gouvernement Mondial Unifié) souhaite garder cette marge de 2 ans afin de ne pas avoir a deplacer des populations trop touchés par les maladies dues au climat devenu hostile de la Terre.</p></div></div>";
    index = 5;
  }else if(index == 5){
    main.innerHTML = " ";
    main.innerHTML = "<div data-aos='fade-in' class='d-block text-center'> <div> <h1 class='h1'>2066 - Present Day</h1> </div><div data-aos='fade-in' class='container'> <p style='font-size: 1.2em;'>Ce matin j'ai été appelé en urgence. Les disques durs contenant les programmes de navigation des vaisseaux éclaireurs ont été volés !<br>Je suis demandé pour accompagner l'equipe tactique chargé de les retrouver.<br><br>Pourquoi, me direz-vous ? Pourquoi moi ?<br>Parce que je suis la personne qui a développé les signatures numériques et les algorithmes de cryptage qui prouvent l'autenticité de ces programmes de navigation.<br>Et je suis le seul a pouvoir les identifier, car je suis le seul a les connaitre par coeur, il n'existe qu'une seule autre version de ces morceaux de code, et ils sont dans ma tête.</p></div></div>";
    index = 6;
  }

}
