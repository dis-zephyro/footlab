$(document).ready(function() {

    // Анимация
    var Android = navigator.userAgent.search(/Android/i);
    var iPhone = navigator.userAgent.search(/iPhone/i);
    var iPad = navigator.userAgent.search(/iPad/i);
    if(Android != -1 || iPhone != -1 || iPad != -1) {

    } else {


        $(".scroll").each(function () { // анимация по скролу(используйте этот) достаточно добавить анимируемому блоку класс 'scroll' а css анимацию писать так: '.animated.класс_блока'
            var block = $(this);
            $(window).scroll(function() {
                var top = block.offset().top;
                var bottom = block.height()+top;
                top = top - $(window).height();
                var scroll_top = $(this).scrollTop();
                if ((scroll_top > top) && (scroll_top < bottom)) {
                    if (!block.hasClass("animated")) {
                        block.addClass("animated");
                    }
                } else {
                    block.removeClass("animated");
                }
            });
        });
        $('head').append('<link rel="stylesheet" type="text/css" href="css/animation.css" />'); //подключение файла animation.css если не мобильник
    }
});

//Калькулятор

$(".calc form").change(function() {
    var totalSum = 3750;
    var count = parseInt($('select').val());
    var dinner =($('input[name="dinner"]').val());
    var slice = ($('input[name="slice"]').val());

    console.log(count);
    console.log(dinner);
    console.log(slice);
    console.log('----------');
    totalSum = parseInt(totalSum * count * dinner * slice + 1);
    console.log(totalSum);
    console.log('==========');

    $(".order-form-summary span").text(totalSum);
});

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
