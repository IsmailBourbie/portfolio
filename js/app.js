$(document).ready(function () {


    // Preloader
    $(window).on('load', function () {
        setTimeout(function () {
            $(".preloader").fadeOut('slow');
            $('body').css('overflow', 'auto');
        }, 3000)
    });

    // on reload page check the scroll
    if ($(window).scrollTop() >= 470) {
        $("nav.navbar").addClass("navbar-scrolled");
    } else {
        $("nav.navbar").removeClass("navbar-scrolled");
    }

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

    let windowHeight = $(window).height(),
        navbarHeight = $('nav').outerHeight();

    // $('.landing-page').height();
    $('.landing-page').css({
        'min-height': windowHeight - navbarHeight,
        'margin-top': navbarHeight
    });



    // shuffle images
    $('.button-list ul li').click(function () {
        let dataClass = $(this).data('class');
        console.log(dataClass);
        $(this).addClass('active').siblings().removeClass('active');

        if (dataClass == 'all') {
            // $('.shuffle-img > .row > div').css('opacity', '1');
            $('.shuffle-img > .row > div').removeClass('opacity');
        } else {
            $('.shuffle-img > .row > div').addClass('opacity');
            // $('.shuffle-img > .row > div').css('opacity', '.08');
            // $(dataClass).css('opacity', '1');
            $(dataClass).removeClass('opacity');
        }

    });


    // Show Description of works 
    $('.works-item').mouseenter(function () {
        $(this).children('.works-description').fadeIn();

    });

    $('.works-item').mouseleave(function () {
        $(this).children('.works-description').fadeOut();
    });




    // Smooth scroling
    $('.nav-link, .read-more').click(function () {
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 1000);
    });
});