// console.log("yes"); // je teste si j'ai reussi a lier js et html


for (let quote in quotes) 
{ // je parcours les citations

    var div = document.createElement("div"); // je cree une nouvelle div
    var q = document.createElement("q"); // je cree un nouveau paragraphe
    var p = document.createElement("p"); // je cree un deuxieme paragraphe
    var favori = document.createElement("div"); // je cree un deuxieme div pour le favori du favori
    
    div.className = "citation"; // je donne a la div la class citation (gerer en css)
    q.className = "text"; // je donne a la citation la class text (gerer en css)
    p.className = "auteur"; // je donne au paragraphe la class auteur (gerer en css)
    favori.className = "favori"; // je donne a la div la class favori (gerer en css)
    favori.classList.add("non"); // je rajoute une class a favori 
    
    titre= document.createTextNode(quotes[quote]); // je rajoute du textre au premier paragraphe
    q.appendChild(titre); // je met la citation dans un paragraphe
    div.appendChild(q); // je rajoute a div l'enfant q
    
    auteur= document.createTextNode(quote); // je rajoute du textre au premier paragraphe
    p.appendChild(auteur); // je met la citation dans un paragraphe
    div.appendChild(p); // je rajoute a div l'enfant p
    
    var icon = "<i class='fa-regular fa-heart'></i>";
    favori.innerHTML = icon; // je rajoute du texte a favori
    div.appendChild(favori); // je rajoute a div l'enfant favori
    
    document.body.appendChild(div); // je rajoute la div au body
}

var citations = document.querySelectorAll(".citation");  // je recupere un tableau de toutes les citations
citations.forEach(citation => 
{ // je parcours le tableau des citations
    var enfant = citation.children[2].children[0]; // je déclare l'enfant de citation: le i
    var enfantDiv = citation.children[2]; // je declare l'enfant de citation: div

    if (localStorage.getItem(citation.children[1].textContent) !== null) //si l'element est dans le local storage
    {
        enfant.classList ="fa-solid fa-heart"; // je change le coeur en favori
    }

    enfant.addEventListener("click", function()
    { // je rajoute un evenement a enfant
        if (enfantDiv.className == "favori non") // si la div enfant a comme class non
            {
                enfant.classList ="fa-solid fa-heart"; // je change le coeur
                enfantDiv.className = "favori oui"; // je change la class
                localStorage.setItem(citation.children[1].textContent, citation.children[0].textContent); // je rajout l'auteur et le texte dans le local storage
            }else //sinon
            {
                enfant.classList = "fa-regular fa-heart"; // je change le coeur
                enfantDiv.className="favori non"; // je change la class
                localStorage.removeItem(citation.children[1].textContent); // je supprime la citation avec l'auteur
            }
    }); // j'ajoute une fonction click pour mettre un like
});
    
