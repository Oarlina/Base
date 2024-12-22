console.log("yes"); // je teste si j'ai reussi a lier js et html

// alert(quotes);

console.log(quotes);


for (let quote in quotes) { // je parcours les citations

    var div = document.createElement("div"); // je cree une nouvelle div
    div = document.createTextNode(quotes[quote]); // je lui rajoute du texte
    div += document.createTextNode(quote); // et un deuxieme texte
    console.log(div);
    console.log(quote + ':' + quotes[quote]);
   }

// tab.forEach(quote => {
//     console.log(quote);
// });