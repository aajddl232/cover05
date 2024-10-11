$(function () {

    $('.product_slide1').slick({
        arrows: false,
        slidesToShow: 5,
        slidesToScroll: 4,
        //dots: true,
    });


    $('.main_product .tab_content .s01 .arrows .prev').on('click', function () {
        $('.product_slide1').slick('slickPrev')
    });

    $('.main_product .tab_content .s01 .arrows .next').on('click', function () {
        $('.product_slide1').slick('slickNext')
    });




    $('.product_slide2').slick({
        arrows: false,
        slidesToShow: 5,
    });

    $('.main_product .tab_content .s02 .arrows .prev').on('click', function () {
        $('.product_slide2').slick('slickPrev')
    });

    $('.main_product .tab_content .s02 .arrows .next').on('click', function () {
        $('.product_slide2').slick('slickNext')
    });


    $('.product_slide3').slick({
        arrows: false,
        slidesToShow: 5,
    });

    $('.main_product .tab_content .s03 .arrows .prev').on('click', function () {
        $('.product_slide3').slick('slickPrev')
    });

    $('.main_product .tab_content .s03 .arrows .next').on('click', function () {
        $('.product_slide3').slick('slickNext')
    });



    $('.main_product .tab_menu li').on('click', function () {
        let num = $(this).index();
        $('.main_product .tab_content .content').eq(num).addClass('on').siblings().removeClass('on');
        $(this).addClass('on').siblings().removeClass('on');
    })

    $('.main_banner_slide').slick({
        arrows: false,
    });

    $('.main_report .arrows .prev').on('click', function () {
        $('.main_banner_slide').slick('slickPrev')
    });

    $('.main_report .arrows .next').on('click', function () {
        $('.main_banner_slide').slick('slickNext')
    });

    $('.main_product .main_report ').on('click', function () {
        let num = $(this).index();
        $('.main_product .main_report .cover').eq(num).addClass('on').siblings().removeClass('on');
        $(this).addClass('on').siblings().removeClass('on');
    })

})