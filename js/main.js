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