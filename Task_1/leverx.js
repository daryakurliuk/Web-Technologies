var main = document.getElementById("content_id");
var card = document.getElementsByClassName("card")[0];
console.log(main);
console.log(card);
for (var i = 0; i < 11; i++) {
        var element = card.cloneNode(true);
        main.appendChild(element);
}
   