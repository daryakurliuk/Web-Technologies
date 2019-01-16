for (var i = 0; i < 10; i++) {
    var el = document.createElement("div");
    el.classList.add("list-item");
    el.innerHTML = '<img src="img_2.jpg" class="list-img"><div class="name">Dasha</div>';
    var cont = document.getElementById("list");
    cont.appendChild(el);    
}

for (var i = 0; i < 20; i++) {
    var el = document.createElement("div");
    el.classList.add("message");
    el.innerHTML = '<img src="img_2.jpg" class="message-img"><div class="message-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus repellendus iste facere libero itaque eveniet. Nemo laborum, maiores et accusamus inventore doloremque pariatur, quisquam laudantium explicabo libero dolores, consequatur repellendus.</div>';
    var cont = document.getElementById("messages");
    cont.appendChild(el);    
}