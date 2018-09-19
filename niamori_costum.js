
$(document).ready(function () {
//    if ($('.photo_image_slider img').length) {
//        $('.photo_image_slider img').first().click();
//    }

    $('.categories_title').click(function () {
        $(this).toggleClass('opened');
        $(this).next('div').slideToggle();
    });
    var sliderh = $('.gw_slide img').height();
    $('.cool_images').css('height', sliderh + 'px');
//    
//    $('.categories_title').click(function(){
//        $(this).toggleClass('opened');
//        $('.cat_list_Items').slideToggle();
//    });



    if ($(window).width() > 767) {

        $('.header').css(
                'height', $('.header_mid').outerHeight() + 'px'
                );
    }
    if ($(window).width() > 767 && $(window).scrollTop() > 100) {

        $('.header_mid').stop(false, false).animate({
            'padding': '5px 0'
        }, 300);
        $('.image_logo img').stop(false, false).animate({
            'height': '44px'
        }, 300);

    }


//    $('.lang_switcher_block').mouseenter(function () {
//        $(this).find('a').css('display', 'block');
//    });
//    $('.lang_switcher_block').mouseleave(function () {
//        $(this).find('a').css('display', 'none');
//        $('.activelang').show();
//    });

});
$(window).resize(function () {
    var sliderh = $('.gw_slide img').height();
    $('.cool_images').css('height', sliderh + 'px');
});
$(window).scroll(function () {

    if ($(window).width() > 767 && $(window).scrollTop() > 100) {

        $('.header_mid').stop(false, false).animate({
            'padding': '10px'
        }, 300);
        $('.image_logo img').stop(false, false).animate({
            'height': '50px'
        }, 300);
        $('.header_right,.lang_switcher_block ').stop(false, false).animate({
            'margin': '6px 0 0'
        }, 300);
        $('.image_logo ').stop(false, false).animate({
            'padding': '3px 0 0 0'
        }, 300);

        $('.socials_top').stop(false, false).animate({
            'margin-top': '14px'
        }, 300);

    } else {
        $('.header_mid').stop(false, false).animate({
            'padding': '15px 0'
        }, 300);
        $('.image_logo img').stop(false, false).animate({
            'height': '105px'
        }, 300);
        $('.image_logo ').stop(false, false).animate({
            'padding': ' 0'
        }, 300);
        $('.header_right,.lang_switcher_block ').stop(false, false).animate({
            'margin': '30px 0 0 '
        }, 300);
        $('.socials_top').stop(false, false).animate({
            'margin-top': '35px'
        }, 300);
    }



});
$(document).ready(function () {
    $(function () {
//        slidersize();
        $('.owl-carousel').owlCarousel({
            loop: true,
            margin: 30,
            nav: true,
            navText: false,
            dots: false,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 3
                },
                1000: {
                    items: 4
                }
            }
        });

    });
});
