$(document).ready(function () {

    // Landing page height

    var windowHeight = $(window).height(),
        navHeight = $('.navbar').innerHeight();

    $('.landing-page').height(windowHeight - navHeight);
});