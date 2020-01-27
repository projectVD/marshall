$(function () {
    $('.buy__slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<img class="buy__control prev-btn" src="img/prev-icon.svg" alt="prev">',
        nextArrow: '<img class="buy__control next-btn" src="img/next-icon.svg" alt="next">',
        speed: 500,
        fade: true
    });

});