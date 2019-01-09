var newDiv = document.createElement("div");
var name = prompt("Write your username", "Username");
if (/[0-9]/.test(name)) {
    for(var i = 0; i<name.length; i++) {
        if(i%2 == 0) {
            console.log(name[i].toUpperCase());
            newDiv.innerHTML += name[i].toUpperCase();
            if(name[i+1]) newDiv.innerHTML += name[i+1].toLowerCase();
        }
    }
}
else {
newDiv.innerHTML = name;
}
var container = document.getElementById("container");
container.appendChild(newDiv);