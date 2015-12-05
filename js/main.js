//  Slider

$('.food-slider').slick({
    arrows: false,
    autoplay: true,
    dots: false,
    autoplaySpeed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1
});

$('.food-next').click(function(){
    $('.food-slider').slick('slickNext');
});


$('.reply-slider').slick({
    arrows: false,
    autoplay: true,
    dots: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1
});

$('.reply-nav.prev').click(function(){
    $('.reply-slider').slick('slickPrev');
});

$('.reply-nav.next').click(function(){
    $('.reply-slider').slick('slickNext');
});


$('.carte').tabs();

$("input[type='radio']").ionCheckRadio();

$('.btn-scroll').click(function(){
    var str=$(this).attr('href');
    $.scrollTo(str, 500, {offset: 0});
    return false;
});


//  Modal

$(".btn-modal").fancybox({
    'padding'    : 0,
    'tpl'        : {
        closeBtn : '<a title="Close" class="btn_close" href="javascript:;"></a>'
    }
});
