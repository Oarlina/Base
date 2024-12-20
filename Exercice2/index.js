console.log("yes"); // je teste si j'ai reussi a lier js et html

var carres = document.querySelectorAll(".carre");
carres.forEach(carre => { // je defile dans le tableau carres les carre
    carre.addEventListener("click", function() // j'ajoute un  evenement au click
    {
        var copie = document.getElementById("copie");  // je recupere la div copie
        var fond = window.getComputedStyle(carre, null).getPropertyValue("background-color"); // je recupere le backgroudndu carre selectionner
        copie.style.backgroundColor = fond; // je rajoute du fond a la div copie
        copie.innerHTML = fond; // je rajoute a la div copie du texte
        if (fond == "rgb(128, 0, 0)" || fond=="rgb(0, 128, 0)") // si le fond est rouge ou vert
        {
            copie.style.color = 'white'; // je change la couleur de police
        }
        else { //sinon
            copie.style.color = 'black'; // je change la couleur de police
        }
    })
});