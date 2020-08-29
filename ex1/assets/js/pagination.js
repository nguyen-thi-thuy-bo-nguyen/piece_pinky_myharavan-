//active cho phần mục lục
var currentPage = 1;
var pagination = document.querySelectorAll(".number-pagination");
pagination[1].parentElement.classList.add("active");
pagination[pagination.length - 1].parentElement.classList.add("active");
for (var i = 0; i < pagination.length; i++) {
    pagination[i].addEventListener("click", function(event) {
        event.preventDefault();
        var k = document.querySelectorAll(".pagination-product .active");
        for (var j = 0; j < k.length; j++) {
            k[j].classList.remove("active");
        }
        this.parentElement.classList.add("active");

        var previous = pagination[currentPage].parentElement.previousElementSibling;
        var next = pagination[currentPage].parentElement.nextElementSibling;
        if (this.innerText == "<") {
            previous.classList.add("active");
            currentPage = previous.firstElementChild.innerText;
        } else if (this.innerText == ">") {
            next.classList.add("active");
            currentPage = next.firstElementChild.innerText;
        } else {
            currentPage = this.innerText;
        }
        if (currentPage == 1) {
            pagination[0].parentElement.classList.remove("active");
            pagination[pagination.length - 1].parentElement.classList.add("active");
        } else if (currentPage == pagination.length - 2) {
            pagination[0].parentElement.classList.add("active");
            pagination[pagination.length - 1].parentElement.classList.remove(
                "active"
            );
        } else if (currentPage == "<" && currentPage != 1) {} else {
            pagination[0].parentElement.classList.add("active");
            pagination[pagination.length - 1].parentElement.classList.add("active");
        }
    });
}