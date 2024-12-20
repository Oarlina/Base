console.log("yes"); // je teste si j'ai reussi a lier js et html


// je cree des fonctions pour pouvoir avoir leur fond
function cyan (){
    var carreC = document.getElementById("cyan"); // je recupere la class carre
    const cssObj = window.getComputedStyle(carreC, null); // je recupere le css du carre
    var fond = cssObj.getPropertyValue("background-color"); // je recupere la couleur du fond
    console.log(fond);
    addElement(fond);
}


function maroon (){
    var carreM = document.getElementById("maroon"); // je recupere la class carre
    const cssObj = window.getComputedStyle(carreM, null); // je recupere le css du carre
    var fond = cssObj.getPropertyValue("background-color"); // je recupere la couleur du fond
    console.log(fond);
    addElement(fond);
}


function vert (){
    var carreV = document.getElementById("vert"); // je recupere la class carre
    const cssObj = window.getComputedStyle(carreV, null); // je recupere le css du carre
    var fond = cssObj.getPropertyValue("background-color"); // je recupere la couleur du fond
    console.log(fond);
    addElement(fond);
}


function jaune (){
    var carreJ = document.getElementById("jaune"); // je recupere la class carre
    const cssObj = window.getComputedStyle(carreJ, null); // je recupere le css du carre
    var fond = cssObj.getPropertyValue("background-color"); // je recupere la couleur du fond
    console.log(fond);
    addElement(fond);
}


function addElement(fond){
    const newDiv = document.createElement("div"); // je cree une nouvelle div
    newDiv.style.width="200px"; // je rajoute une longueur de 200 pixels
    newDiv.style.height="200px"; // je reojoute une hauteur de 200 pixels
    newDiv.style.backgroundColor=fond; // je change la couleur de fond   
    const newContent = document.createTextNode(fond); // je rajoute le fond en texte
    const currentDiv = document.getElementById("carres");
    document.body.insertBefore(newDiv, currentDiv);
}