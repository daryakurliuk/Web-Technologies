function begin() {
    getRequest('GET', 'http://localhost:3000/posts');
}

function getRequest(method, url) {
    var getRequest = new XMLHttpRequest();

    getRequest.open(method, url);
    getRequest.send();
    getRequest.onload = function ()
    {
    if (getRequest.readyState == 4 && getRequest.status == "200")
        {
            var data = JSON.parse(getRequest.responseText);
            printTable(data);  
        }
    }
    getRequest.onerror = function () {
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
    data[userId.name] = parseInt(userId.value, 10);
    data[inpID.name] = parseInt(inpID.value, 10);
    data[inpTitle.name] = inpTitle.value;
    data[inpBody.name] = inpBody.value;

    var postRequest = new XMLHttpRequest();
    postRequest.open('POST', 'http://localhost:3000/posts');
    postRequest.setRequestHeader('Content-Type', 'application/json');
    postRequest.send(JSON.stringify(data));
}

function UpdateData() {

    var idToUpdate = document.getElementById('inpUpdID').value;
    var data = {};

    data[inpUpdUserID.name] = parseInt(inpUpdUserID.value, 10);
    data[inpUpdID.name] = parseInt(inpUpdID.value, 10);
    data[inpUpdTitle.name] = inpUpdTitle.value;
    data[inpUpdBody.name] = inpUpdBody.value;

    var putRequest = new XMLHttpRequest();
    putRequest.open('PUT', 'http://localhost:3000/posts/' + idToUpdate);
    putRequest.setRequestHeader("Content-Type", "application/json");
    putRequest.send(JSON.stringify(data));

}

function DeleteData() {

    var idToDelete = parseInt(document.getElementById('inpDel').value, 10);

    var deleteRequest = new XMLHttpRequest();
    deleteRequest.open("DELETE",'http://localhost:3000/posts/' + idToDelete, true);
    deleteRequest.setRequestHeader('Content-type', 'application/json');
    deleteRequest.send();

    }

