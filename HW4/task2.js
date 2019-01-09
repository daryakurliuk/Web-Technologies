back.onclick = function() {
    document.location.href = "index.html"
}

flexbox.onclick = function() {
document.getElementById("body").innerHTML = "<div class='container'><div class='flex_1_row'><div class='row_1_item red ff-item'></div><div class='row_1_item orange fs-item'></div></div><div class='flex_2_row'><div class='row_2_item green'></div></div><div class='flex_3_row'><div class='row_3_item brown'></div><div class='row_3_item blue ts-item'></div><div class='row_3_item purple'></div></div></div>";
}