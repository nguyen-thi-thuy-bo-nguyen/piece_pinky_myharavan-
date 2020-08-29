window.addEventListener("scroll", function() {
    n = document.getElementsByClassName("background");
    for (var i = 0; i < n.length; i++) {
        if (window.pageYOffset - n[i].offsetTop > -600) {
            yPos = -(window.pageYOffset - n[i].offsetTop) / 10;
            if (n[i].className.includes("type-cake-body ")) {
                yPos *= 5;
                n[i].style.backgroundPosition = "0 " + yPos + "px";
            } else if (n[i].className.includes("breadcrumb ")) {
                // yPos *= -5;
                n[i].style.backgroundPosition = "50% " + yPos + "px";
            } else {
                n[i].style.backgroundPosition = "50% " + yPos + "px";
            }
        }
    }
});