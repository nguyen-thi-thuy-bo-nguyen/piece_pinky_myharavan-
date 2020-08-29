var index = 1;
showLarge(index);

function currentItem(n, evt) {
    evt.preventDefault();
    showLarge((index = n));
}

function showLarge(n) {
    var i;
    var slides = document.getElementsByClassName("slieImage");
    var dots = document.getElementsByClassName("smallImg");
    if (n > slides.length) {
        index = 1;
    }
    if (n < 1) {
        index = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[index - 1].style.display = "block";
    dots[index - 1].className += " active";
}