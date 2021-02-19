new WOW().init();

$(document).ready(function() {
    $(".burger-button").click(function() {
        $(".menu-burger-list-cont").slideToggle(500);
        $(".menu-burger-list-cont").css("display", "flex");
    });
});
$(".main-scroll").click(function() {
    $('html, body').animate({
        scrollTop: $("#section2").offset().top
    }, {
        duration: 500,
        easing: "swing"
    });
});