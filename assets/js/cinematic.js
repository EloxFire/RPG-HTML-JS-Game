let main = document.getElementById('mainContainer');
let index = 0;

function cinematic(){
  if(index == 0){
    main.innerHTML = " ";
    main.innerHTML = "<div data-aos='fade-in' class='d-block text-center'> <div> <h1 class='h1'>25 février 2039</h1> </div><div data-aos='fade-in' class='container'> <p style='font-size: 1.2em;'>Ce jour restera dans les livres d'histoires et gravé à jamais dans l'esprit de tout etre humain. <br>C'est en ce jour que tous les scientifiques de la planète se mirrent d'accord sur un chose épouventable : <strong>La fin imminente du monde tel que nous le connaissons</strong>. <br><br>Cette information est à partir de ce jour en breaking news dans le monde entier et les prédictions annoncés ne sont pas belles à entendre... </p></div></div>";
    index = 1;
  }else if(index == 1){
    main.innerHTML = "";
    index = 2;
  }else if(index == 2){
    main.innerHTML = " ";
    main.innerHTML = "";
  }
}
