// hàm để mở menu-mobile
function over() {
    var panel = document.getElementsByClassName("content-menu-column");
    if (panel[0].style.display === "block") {
        panel[0].style.display = "none";
    } else {
        panel[0].style.display = "block";
    }
}
// mở các menu-mobile con
var acc = document.getElementsByClassName("mobile-trigger");

for (var i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
            this.innerHTML = "+";
        } else {
            panel.style.display = "block";
            this.innerHTML = "-";
        }
    });
}
// mở giỏ hàng menu-large
document
    .getElementById("cart-info")
    .firstElementChild.addEventListener("click", function() {
        this.nextElementSibling.classList.toggle("active");
    });
document.getElementById("cart-choose").classList.add("active");

function splitSum(sum) {
    var cut = "";
    for (var j = 0; j < sum.length; j++) {
        cut += "" + sum[j];
    }
    return cut;
}

function addSum(sum) {
    var sum1 = "";

    var h = sum.length % 3;
    var k = Math.floor(sum.length / 3);
    if (h > 0) {
        sum1 = sum.substring(0, h) + ",";
        sum = sum.substring(h);
    }

    for (var j = 0; j < sum.length - 3; j += 3) {
        sum1 += sum.substring(j, j + 3) + ",";
    }
    return sum1 + sum.substring(sum.length - 3);
}

// sự kiện click vào xóa sản phẩm
var moveCart = document.getElementsByClassName("move-pro");

function cartBuy() {
    var cartEmpty = document.querySelectorAll("#cart-choose ul>li.active");
    if (cartEmpty.length == 0) {
        document.getElementById("cart-choose").classList.remove("active");
        document.getElementById("cart-empty").classList.add("active");
    }
    var total = 0;
    var money = 0;
    var number = 0;
    var totalNumber = 0;
    for (var j = 0; j < cartEmpty.length; j++) {
        money = splitSum(
            cartEmpty[j].getElementsByClassName("money")[0].innerText.split(",")
        );
        number = splitSum(
            cartEmpty[j].getElementsByClassName("number")[0].innerText.split(",")
        );
        total += money * number;
        totalNumber++;
    }
    document.getElementById("cart-out").innerText = totalNumber;
    document.getElementById("total").innerText = addSum(total.toString());
}
for (var i = 0; i < moveCart.length; i++) {
    moveCart[i].closest("li").classList.add("active");
    moveCart[i].addEventListener("click", function() {
        this.closest("li").classList.remove("active");
        cartBuy();
    });
}
cartBuy();

function load() {
    var top = 76;
    document.querySelectorAll(".background-menu  .content-menu");

    document.querySelectorAll(".background-menu  .content-menu")[0].style.left =
        100 + window.innerWidth / 10 + "px";
}
load();

window.addEventListener(
    "resize",
    function() {
        load();
    },
    true
);

var mybutton = document.getElementById("topScroll");
mybutton.addEventListener("click", function() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100
    ) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

document.getElementById("searchMenu").addEventListener("click", function() {
    document.getElementById("search").style.display = "block";
});
var display = 0;
document
    .getElementById("search")
    .getElementsByTagName("input")[0]
    .addEventListener("click", function() {
        document.getElementById("search").style.display = "block";
        display = 1;
    });
document.getElementById("search").addEventListener("click", function() {
    document.getElementById("search").style.display = "none";
});