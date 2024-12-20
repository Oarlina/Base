console.log("yes"); // je teste si j'ai reussi a lier js et html

// je cree des fonctions pour pouvoir avoir leur fond 
function clique (id){
    var carre = document.getElementById(id); // je recupere la class carre
    const cssObj = window.getComputedStyle(carre, null); // je recupere le css du carre
    var fond = cssObj.getPropertyValue("background-color"); // je recupere la couleur du fond
    var newDiv = document.getElementById("copie");  // je recupere la div copie

    newDiv.style.backgroundColor=fond; // je change la couleur de fond
    newDiv.innerHTML = fond; // je rajoute a la di copie du texte
    if (fond == "rgb(128, 0, 0)" || fond=="rgb(0, 128, 0)") // si le fond est rouge ou vert
    {
        newDiv.style.color = 'white'; // je change la couleur de police
    }
    else {
        newDiv.style.color = 'black'; // je change la couleur de police
    }
}