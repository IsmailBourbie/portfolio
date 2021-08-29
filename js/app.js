$(document).ready(function () {

    // Landing page height

    var windowHeight = $(window).height(),
        navHeight = $('.navbar').innerHeight();

    $('.landing-page').height(windowHeight - navHeight);


    // shuffle images
    $('.button-list ul li').click(function () {
        let dataClass = $(this).data('class');
        console.log(dataClass);
        $(this).addClass('active').siblings().removeClass('active');

        if (dataClass == 'all') {
            $('.shuffle-img > .row > div').css('opacity', '1');
        } else {
            $('.shuffle-img > .row > div').css('opacity', '.08');
            $(dataClass).css('opacity', '1');
        }

    });
});