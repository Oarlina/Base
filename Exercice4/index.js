console.log("yes"); // je teste si j'ai reussi a lier js et html

var icons = document.querySelectorAll(".icon"); // je recupere un tableau des icon

icons.forEach(icon => { // je parcours le tableau des icons
    icon.addEventListener("click", function() 
    {
        var newDiv;
        if(icon.classList.contains('styleToggle')) // si ma class carre est active 
        {
            icon.classList.remove('styleToggle'); // je la desactive
            var parent = icon.parentNode; // je declare le parent de icon
            parent.parentNode.style.backgroundColor = "rgb(204, 204, 200)"; // je change le background du parent du parent du icon
            var parent = icon.parentNode; // je declare le parent de icon
            document.getElementById("newDiv").remove(); // je cherche la div newDiv et je la supprime
        }
        else // sinon
        {
            icon.classList.add('styleToggle'); // je l'active
            const obj = icon.id; // je recupere le nom de l'id
            newDiv = document.createElement("div"); // je cree une nouvelle div
            newDiv.id = "newDiv";
            newDiv.style.height ="50px";
            newDiv.style.width ="100px";
            icon.appendChild(newDiv);  // je met le div dans icon
            newDiv.innerHTML = obj; // je donne a la nouvel div du texte
            var bgc = window.getComputedStyle(icon, null).getPropertyValue("background-color");  // je cherche le background d'icon 
            var parent = icon.parentNode; // je declare le parent de icon
            parent.parentNode.style.backgroundColor = bgc; // je change le background du parent du parent du icon
        }
    })
});