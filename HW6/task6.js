function begin() {
    getRequest('GET', 'http://localhost:3000/posts');
}

function getRequest(method, url) {
    var xhr = new XMLHttpRequest();

    xhr.open(method, url);
    xhr.send();
    xhr.onload = function ()
    {
    if (xhr.readyState == 4 && xhr.status == "200")
        {
            var data = JSON.parse(xhr.responseText);
            printTable(data);  
        }
    }
    xhr.onerror = function () {
    alert('Ошибка ' + this.status);
    }
}

function printTable(data) {
    var str = "";
    for (var i = 0; i < data.length; i++) {
        str += "<tr><td>" + data[i].userId + "</td>" +
            "<td>" + data[i].id + "</td>" +
            "<td>" + data[i].title + "</td>" +
            "<td>" + data[i].body + "</td></tr>";
    }
    document.getElementById("ttbody").innerHTML = str;

}

function CreateData() {
    var data = {};
    data[inpUserID.name] = parseInt(inpUserID.value, 10);
    data[inpID.name] = parseInt(inpID.value, 10);
    data[inpTitle.name] = inpTitle.value;
    data[inpBody.name] = inpBody.value;


    var postRequest = new XMLHttpRequest();
    postRequest.open('POST', 'http://localhost:3000/posts');
    postRequest.setRequestHeader('Content-Type', 'application/json');
    postRequest.send(JSON.stringify(data));
    console.log(data);
    UpdateData();

}

function UpdateData() {

    var idToUpdate = document.getElementById('inpUpdID').value;
    var data = {};
    data[inpUpdUserID.name] = parseInt(inpUpdUserID.value, 10);
    data[inpUpdID.name] = parseInt(inpUpdID.value, 10);
    data[inpUpdTitle.name] = inpUpdTitle.value;
    data[inpUpdBody.name] = inpUpdBody.value;

    var putRequest = new XMLHttpRequest();
    putRequest.open('PUT', 'http://localhost:3000/posts/1' + idToUpdate);
    putRequest.setRequestHeader("Content-Type", "application/json");
    putRequest.send(JSON.stringify(data));
    console.log(data);


    var request = new XMLHttpRequest();
    request.open('GET', 'http://localhost:3000/posts', true);
    request.setRequestHeader("Content-Type", "application/json");
    request.onload = function () {
        var dataAdd = JSON.parse(request.responseText);
        change(dataAdd);
        console.log(dataAdd);
    };

    request.send();
}

function DeleteData() {
    var idToDelete = parseInt(document.getElementById('inpDel').value, 10);
    var request = new XMLHttpRequest();
    request.open('DELETE', 'http://localhost:3000/posts' + idToDelete);
    request.setRequestHeader("Content-Type", "application/json");
    request.send();

    var request = new XMLHttpRequest();
    request.open('GET', 'http://localhost:3000/posts');
    request.setRequestHeader("Content-Type", "application/json");
    request.onload = function () {
        var data = JSON.parse(request.responseText);
        change(data);
        console.log(data);
    };

}

function change(data) {
    var str = " "
    for (var i = 0; i < data.length; i++) {
        str += "<tr><td>" + data[i].userId + "</td>" +
            "<td>" + data[i].id + "</td>" +
            "<td>" + data[i].title + "</td>" +
            "<td>" + data[i].body + "</td></tr>";
    }

    document.getElementById("ttbody").innerHTML = str;
}