$(document).ready(function() {
    $("#owl-example").owlCarousel({
        // loop: true,
        loop: false,
        rewind: true,
        // margin: 0,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 1,
            },

            768: {
                items: 1,
            },
            1000: {
                items: 3,
            },
        },
    });
});