console.log("yes"); // je verifie que j'ai bien lier mon html et mon js
const element = document.getElementById("carre"); // je recupere l'id de carre
const cssObj = window.getComputedStyle(element, null); // je recupere toutes les informations CSS sur l'id carre


//       Je recupere les informations de l'id carre
const obj = document.getElementsByTagName("div")[0].id; // je recupere le nom de l'id
var bgColor = cssObj.getPropertyValue("background-color"); // je recupere le backgroung color
var colorText = cssObj.getPropertyValue("color"); // je recupere la couleur du texte
var height = cssObj.getPropertyValue("height"); // je recupere la hauteur de l'id
var width = cssObj.getPropertyValue("width"); // je recupere la longeur de l'id
var display = cssObj.getPropertyValue("display"); // je reucpere le display
var police = cssObj.getPropertyValue("font-family"); // je recupere la police 
var taillePolice = cssObj.getPropertyValue("font-size"); // je recupere la police 

// je crée une variable qui regroupe toutes les informations de l'id carre
var infos = ("Class: " + obj) + ("\n- Background-color: "+ bgColor) + ("\n- Color: "+ colorText) + ("\n- Height: "+ height) + ("\n- Width: "+ width) + ("\n- Display: " + display) + ("\n- Display: "+ police + " ( " + taillePolice + " ) ");

element.addEventListener("click", function() // je cree un evenement si je clique sur l'id carre
    {
        alert (infos); // j'afficher l'alerte infos
    });