function clickCart(obj) {
    var note = document.getElementById("note");
    panel = obj.nextElementSibling;
    obj.style.display = "none";
    panel.style.display = "block";
}

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
var cartRemove = document.getElementsByClassName("cart-remove");
// hàm tính tổng các sản phẩm
function sumMoney() {
    var sum = 0;
    var sumPro = document.querySelectorAll(".table-body.active"); //tìm các phần đang hiển thị

    for (var i = 0; i < sumPro.length; i++) {
        var number = parseInt(sumPro[i].getElementsByClassName("number")[0].value);
        var price = parseInt(
            splitSum(
                sumPro[i].getElementsByClassName("price")[0].innerText.split(",")
            )
        );

        sum = sum + number * price;
    }
    document.getElementById("sum").lastChild.innerText = addSum(sum.toString());
}

for (var i = 0; i < cartRemove.length; i++) {
    cartRemove[i].addEventListener("click", function(event) {
        event.preventDefault();
        var parent = this.closest(".table-body"); // cha lớn nhất
        parent.classList.remove("active");
        sumMoney();
    });
}

function onChange(obj) {
    if (parseInt(obj.value) == 0) {
        obj.closest(".table-body").classList.remove("active");
    } else {
        var price = splitSum(
            obj
            .closest(".table-body")
            .getElementsByClassName("price")[0]
            .innerText.split(",")
        );
        obj
            .closest(".table-body")
            .getElementsByClassName("money")[0].innerText = addSum(
                (price * parseInt(obj.value)).toString()
            );
    }

    sumMoney();
}
sumMoney();