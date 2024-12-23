console.log("yes"); // je teste si j'ai reussi a lier js et html


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
    favori.id = "non"; // je donne a la div l'id non 
    
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
citations.forEach(citation => {
    var ic = citation.children(".favori");
    console.log(citation.id);
    favori.addEventListener("click", function(){
        if (favori.id == "non")
            {
                favori.innerHTML = "<i class='fa-solid fa-heart'></i>";
                favori.id = "oui";
            }else 
            {
                favori.innerHTML = "<i class='fa-regular fa-heart'></i>";
                favori.id="non";
            }
    }); // j'ajoute une fonction click pour mettre un like
});

