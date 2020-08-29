$(document).ready(function() {
    $("#owl-slider").owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 2000,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 1,
            },
        },
    });
});
//
// var numberSell = document.getElementsByClassName("number-sell");

// modal load active
setTimeout(function() {
    $("#modalPrevious").fadeOut("2000");
}, 7000);