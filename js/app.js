$(document).ready(function () {




    // on reload page check the scroll
    if ($(window).scrollTop() >= 470) {
        $("nav.navbar").addClass("navbar-scrolled");
    } else {
        $("nav.navbar").removeClass("navbar-scrolled");
    }
    // else if (lastScrolTop > scrollTop) {
    //     navbarElement.animate({ top: "0" }, 30);
    // }

    // On scroll show the nav bar
    let lastScrolTop = 0;
    $(window).on('scroll', function () {
        // console.log($(window).scrollTop());
        let scrollTop = $(this).scrollTop();
        let navbarElement = $("nav.navbar");
        if (scrollTop >= 100 && scrollTop < 470) {
            navbarElement.addClass("navbar-scrolled");
        } else if (scrollTop >= 470) {
            if (lastScrolTop > scrollTop) {
                navbarElement.css({ top: '0px' })
            } else {
                navbarElement.css({ top: '-110px' })
            }
        } else {
            navbarElement.removeClass("navbar-scrolled");
        }

        lastScrolTop = scrollTop;
    });


    // Landing page height

    var windowHeight = $(window).height();

    // $('.landing-page').height();
    $('.landing-page').css('min-height', windowHeight);



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


    // Show Description of works 
    $('.works-item').mouseenter(function () {
        $(this).children('.works-description').show(200);

    });

    $('.works-item').mouseleave(function () {
        $(this).children('.works-description').hide(200);
    });




    // Smooth scroling
    $('.nav-link, .read-more').click(function () {
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 1000);
    });
});