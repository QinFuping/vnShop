$(document).ready(function(){
    //slideshow
    var mySwiper = new Swiper('.category-swiper', {
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        spaceBetween: 30,
        autoplay: 6000,
        loop: true,
        buttonDisabledClass:'mine',
        autoplayDisableOnInteraction: false
    });
    var swiper = new Swiper('.category-slideshow-container', {
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        spaceBetween: 30,
        buttonDisabledClass:'mine'
    });
    //login or sign up
    $('.user-form-nav-list').click(function(){
        var i=$(this).index();
        $(this).removeClass('thisForm').addClass('thisForm').siblings().removeClass('thisForm');
        if(i==0){
            $('.user-text-login').show();
            $('.user-text-signUp').hide();
            $('.user-form-login').show();
            $('.user-form-signUp').hide();
        }else{
            $('.user-text-login').hide();
            $('.user-text-signUp').show();
            $('.user-form-login').hide();
            $('.user-form-signUp').show();
        }
    });
    $('.userGender').click(function(){
        $(this).children('.user-form-sub-rad').addClass('thisRadio');
        $(this).siblings('.userGender').children('.user-form-sub-rad').removeClass('thisRadio');
    });
    $.ms_DatePicker({
        YearSelector: "#sel_year",
        MonthSelector: "#sel_month",
        DaySelector: "#sel_day",
    });
    //login
    $('.userShow1').click(function(){
        $('.user').show();
        $('.user-form-nav-list').eq(0).removeClass('thisForm').addClass('thisForm').siblings().removeClass('thisForm');
        $('.user-text-login').show();
        $('.user-text-signUp').hide();
        $('.user-form-login').show();
        $('.user-form-signUp').hide();
    });
    //sign up
    $('.userShow2').click(function(){
        $('.user').show();
        $('.user-form-nav-list').eq(1).removeClass('thisForm').addClass('thisForm').siblings().removeClass('thisForm');
        $('.user-text-login').hide();
        $('.user-text-signUp').show();
        $('.user-form-login').hide();
        $('.user-form-signUp').show();
    });
    $('#shutForm').click(function(){
        $('.user').hide();
    });
    //document scrolling
    $(document).scroll(function(){
        if($('body')[0].scrollTop>=500){
            $('.cont').css('paddingTop','60px');
            $('.header-form').addClass('search-fixed');
            $('.logo').addClass('logo-hide');
            //nav
            $('.main-nav-wrap').addClass('nav-fixed');
            $('.nav-long').css('display','none');
            $('.nav-short').css('display','block');
        }else{
            $('.cont').css('paddingTop','0px');
            $('.header-form').removeClass('search-fixed');
            $('.logo').removeClass('logo-hide');
            //nav
            $('.main-nav-wrap').removeClass('nav-fixed');
            $('.nav-long').css('display','block');
            $('.nav-short').css('display','none');
        }
    });
    $('.nav-fixed').hover(function () {
        $('.bg').css('display','block');
    },function () {
        $('.bg').css('display','none');
    });
});
