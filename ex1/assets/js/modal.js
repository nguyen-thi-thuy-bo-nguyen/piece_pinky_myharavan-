var close = document.getElementsByClassName("close");
var modal;
// add sự kiện đóng cho close
for (var j = 0; j < close.length; j++) {
    close[j].addEventListener("click", function(event) {
        event.preventDefault();
        this.closest(".modal").style.display = "none";
    });
}
// add sự kiện click cho nút mua ngay
var buttonBuy = document.querySelectorAll(".buttonBuy");

for (var i = 0; i < buttonBuy.length; i++) {
    buttonBuy[i].addEventListener("click", function(event) {
        event.preventDefault();
        modal = document.getElementById("modalProduct");
        modal.style.display = "block";
        var windowY = window.pageYOffset;
        modal.getElementsByClassName("modal-content")[0].style.marginTop =
            windowY + 100 + "px";
    });
}
// add sự kiện click cho nút con mắt
var detail = document.querySelectorAll(".detail-pro");
for (var i = 0; i < detail.length; i++) {
    detail[i].addEventListener("click", function(event) {
        event.preventDefault();
        modal = document.getElementById("modalDetail");
        modal.style.display = "block";
        var windowY = window.pageYOffset;
        modal.getElementsByClassName("modal-content")[0].style.marginTop =
            windowY + 100 + "px";
    });
}