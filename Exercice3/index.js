console.log("Yes"); // je teste si j'ai reussi a lier js et html

var carres = document.querySelectorAll(".carre"); // je recupere carres sous forme de tableau

carres.forEach(carre => { // je defile dans le tableau 
    carre.addEventListener("click", function() // j'ajoute un  evenement au click
    {
        if(carre.classList.contains('styleToggle')) // si ma class carre est active 
        {
            carre.classList.remove('styleToggle'); // je la desactive
            
        }
        else // sinon
        {
            carre.classList.add('styleToggle'); // je l'active
        }
    })
});
