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



var options = {
    useEasing : true,
    useGrouping : false,
    separator : ',',
    decimal : '.'
}

$(".economy").each(function () {

    var block = $(this);
    $(window).scroll(function() {
        var top = block.offset().top;
        var bottom = block.height()+top;
        top = top - $(window).height();
        var scroll_top = $(this).scrollTop();
        if ((scroll_top > top) && (scroll_top < bottom)) {

            var count1 = new countUp("count1", 0, 2, 0, 4, options);
            var count2 = new countUp("count2", 0, 11, 0, 4, options);
            var count3 = new countUp("count3", 0, 2, 0, 4, options);
            var count4 = new countUp("count4", 0, 36, 0, 4, options);

            count1.start();
            count2.start();
            count3.start();
            count4.start();

        } else {
        }
    });
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
    autoplaySpeed: 6000,
    slidesToShow: 1,
    fade: true,
    cssEase: 'ease-in-out',
    slidesToScroll: 1
});

$('.food-next').click(function(){
    $('.food-slider').slick('slickNext');
});


$('.reply-avatar').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false,
    initialSlide: 1,
    asNavFor: '.reply-source',
    dots: true,
    arrows: false
});

$('.reply-source').slick({
    arrows: false,
    autoplay: false,
    dots: false,
    initialSlide: 1,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.slider-nav'
});

$('.reply-nav.prev').click(function(){
    $('.reply-avatar').slick('slickPrev');
});

$('.reply-nav.next').click(function(){
    $('.reply-avatar').slick('slickNext');
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
