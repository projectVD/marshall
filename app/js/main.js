$(function () {

    // Slider settings
    $('.buy__slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<img class="buy__control prev-btn" src="img/prev-icon.svg" alt="prev">',
        nextArrow: '<img class="buy__control next-btn" src="img/next-icon.svg" alt="next">',
        speed: 500,
        fade: true
    });


    // Burger menu
    $('.burger').on('click', function (event) {
        event.preventDefault();
        $(this).toggleClass('burger-active')
        $('.main-menu').toggleClass('menu-active')
    });

    $('.main-menu__item a').on('click', function (event) {
        event.preventDefault();
        $('.main-menu').removeClass('menu-active');
        $('.burger').removeClass('burger-active')

    });

    // Form
    $('#go-form').on('click', function (event) {
        event.preventDefault();
        $('.form-screen').css('display', 'block');
    });

    $('.form-btn').on('click', function (event) {
        $('.form-screen').css('display', 'none');
    });

    $('#form-btn').on('click', function (event) {
        event.preventDefault();
    });


    // Slow scroll
    $('.main-menu').on('click', 'a', function (event) {
        event.preventDefault();
        let id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({ scrollTop: top }, 800);
    });
    $('.main-screen__button').on('click', 'a', function (event) {
        event.preventDefault();
        let id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({ scrollTop: top }, 800);
    });


    // WOW animate
    var wow = new WOW;
    wow.init();

});