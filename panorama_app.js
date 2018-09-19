
$(document).ready(function () {
    $('.responsive-menu').click(function () {
        $(this).toggleClass('close');
        $('.mainmenu').slideToggle(400, function () {
            $(this).toggleClass('expand').css('display', '');
            console.log($('.expand').css('display'));
        });
    });

    $(".article-menu, .rightside").click(function () {
        console.log(132);
        $(".rightside").toggleClass('open');
    });

//    $('.cool_images, .gw_slide_fix').height($(".gw_slide_fix img").height());
//
//    $(window).resize(function () {
//        $('.cool_images, .gw_slide_fix').height($(".gw_slide_fix img").height());
//    });
    var sliderh = $('.gw_slide img').height();
    $('.cool_images').css('height', sliderh + 'px');

    $('.categories_title').click(function () {
        $(this).toggleClass('opened');
        $(this).next('div').slideToggle();
    });
//scrollze
    window.sr = ScrollReveal({reset: false});
    sr.reveal('.photo_image, .modarticle_item');
    //sr.reveal('.front-item', {duration: 500}, 50);


    var fooReveal = {
        delay: 200,
        distance: '190px',
        origin: 'left',
        easing: 'ease-in-out',
        rotate: {z: 0},
        scale: 1.1
    };
    var fooReveal1 = {
        delay: 200,
        distance: '190px',
        origin: 'right',
        easing: 'ease-in-out',
        rotate: {z: 0},
        scale: 1.1
    };
    //sr.reveal('.image_logo', fooReveal);

//    $('.photo_image').click(function(){
//        $(this).find('a').click();
//    });
    $('.contact_page input, .contact_page textarea').focus(function () {
        $(this).css({
            border: '2px solid #8dd8f8',
            boxShadow: '0 0 5px #8dd8f8'
        });
    });
    $('.contact_page input, .contact_page textarea').blur(function () {
        $(this).css({
            border: '1px solid #D8D8D8',
            borderBottom: '2px solid #8dd8f8',
            boxShadow: 'none'
        });
    });


//    get search form
    $('body').find('.search-icon').click(function () {
        $('.search').css('display', 'block');
//        $('#all').addClass('blur');
    });

    $('.search-bg').click(function () {
        $('.search').css('display', 'none');
//        $('#all').removeClass('blur');
    });

    //$('input, textarea').focus().css('borderBottom', '2px solid #8dd8f8');

    $('.article .page_title, .rightside .simple-menu span, .project-description ul li').append('<sup>2</sup>');

    $('.article_socials a').prepend('<svg><rect height="40" width="40" fill="transparent" /></svg>');
    $('.soc_print a').wrap('<span></span>');

//    $('.slider_text_in, .slider_arrow').wrap('<div class="container"></div>');


// Watch Video Button

    $('.watch_video').find('.module_title').click(function () {

        $(this).siblings('.module_body').css('display', 'flex');
    });

    $('.watch_video').find('.close_btn').click(function () {
        $(this).parent('.module_body').hide();
    });



$(window).scroll(function (event) {
    $('.free_content1').css({'background-position-Y': 0 + (window.pageYOffset * 0.02) + '%'});
});

});


var slider_height = $('#slider img').height();
$(window).resize(function () {
    $('.cool_images').height(slider_height);

});


