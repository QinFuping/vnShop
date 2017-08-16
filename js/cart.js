/**
 * Created by Administrator on 2017/8/15.
 */
$(document).ready(function(){
    var dropdown_flag = true;
    $('#dropdown-button').bind('click', dropdownShow);
    $('#dropdown-menu>li').bind('click', dropdownShut);
    function dropdownShow(event) {
        event.stopPropagation();
        if (dropdown_flag) {
            $('#dropdown-menu').css('display', 'block');
        } else {
            $('#dropdown-menu').css('display', 'none');
        }
        dropdown_flag = !dropdown_flag;
    }
    $(document).bind('click', dropdownShut2);
    function dropdownShut() {
        $('#dropdown-value').text($(this).text());
        var ws = $('#dropdown-button').width() + 26;
        $('.dropdown-container>input').css('paddingLeft', ws + 'px');
        $('#dropdown-menu').css('display', 'none');
        dropdown_flag = true;
    }
    function dropdownShut2() {
        $('#dropdown-menu').css('display', 'none');
        dropdown_flag = true;
    }
    $('.history-cont-wrap').css({
        top:$('.header')[0].offsetHeight+'px'
    });
    $('.history').hover(function(){
        $('.history>div').css('display','block');
        $('.history-cont-wrap').css('display','block');
    },function(){
        $('.history-cont-wrap').css('display','none');
        $('.history>div').css('display','none');
    });
    $('.history-cont-wrap').hover(function(){
        $('.history>div').css('display','block');
        $('.history-cont-wrap').css('display','block');
    },function(){
        $('.history-cont-wrap').css('display','none');
        $('.history>div').css('display','none');
    });
//navigation
    $('.comNav').hover(function(){
        $('.bg').css('display','block');
    },function(){
        $('.bg').css('display','none');
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
    //slideshow of recommend
    var slide1 = new Swiper('.recommend-products', {
        nextButton: '.recommend-next',
        prevButton: '.recommend-prev',
        spaceBetween: 0,
        buttonDisabledClass:'mine'
    });
});
