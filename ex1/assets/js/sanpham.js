var viewMove = "grid";

// chuyển đổi các dạng xem
var n = document.querySelectorAll(".view-mode a");

for (var i = 0; i < n.length; i++) {
    n[i].addEventListener("click", function(event) {
        event.preventDefault();
        var k = document.querySelectorAll(".view-mode a.active");
        for (var j = 0; j < k.length; j++) {
            k[j].classList.remove("active");
        }
        this.classList.add("active");
        if (this.className.includes("list")) {
            viewMove = "list";
            document.getElementsByClassName("list-view")[0].style.display = "grid";
            document.getElementsByClassName("grid-view")[0].style.display = "none";
        } else {
            viewMove = "grid";
            document.getElementsByClassName("list-view")[0].style.display = "none";
            document.getElementsByClassName("grid-view")[0].style.display = "grid";
        }
    });
}

// đóng mở item phần bên trái
var attr = document.querySelectorAll(".attribute-icon");
for (var i = 0; i < attr.length; i++) {
    attr[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "grid" || panel.style.display == "") {
            panel.style.display = "none";
        } else {
            panel.style.display = "grid";
        }
    });
}