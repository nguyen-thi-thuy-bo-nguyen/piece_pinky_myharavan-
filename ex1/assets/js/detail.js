// chuyển đổi tab
function openContent(evt, content) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(content).style.display = "block";
    evt.currentTarget.className += " active";
}

document.getElementById("defaultOpen").click();

// // modal image
// var n = document.getElementsByClassName("proImg");

$(".proImg").click(function(event) {
    event.preventDefault();
    var modal = document.getElementById("modalImg");
    var modalImg = document.getElementById("img01");
    var span = modal.firstElementChild;
    modal.style.display = "block";
    modalImg.src = this.src;
    span.onclick = function() {
        modal.style.display = "none";
    };
});
// chuyển đổi slide ảnh

///
$(".select-info label input").click(function() {
    if (!this.checked) this.parentElement.style.borderColor = "#a8b2b7";
    else {
        this.parentElement.style.borderColor = "rgb(255, 115, 128)";
    }
});