var newDiv = document.createElement("div");
var name = prompt("Write your username", "Username");
if (/[0-9]/.test(name)) {
    for(var i = 0; i<name.length; i++) {
        if(name[i+1]) {
            console.log(name[i].toUpperCase());
            newDiv.innerHTML += name[i].toUpperCase();
            }
    }
}
else {
    newDiv.innerHTML = name.split("").reverse().join("");
}
var container = document.getElementById("container");
container.appendChild(newDiv);