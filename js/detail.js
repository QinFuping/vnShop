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
    //image of parameter
    $('.parameter-slide').hover(function(){
        var i=$(this).index();
        $(this).removeClass('thisImgNav').addClass('thisImgNav').siblings('.parameter-slide').removeClass('thisImgNav');
        $('.parameter-bigImg-li').eq(i).removeClass('thisImg').addClass('thisImg').siblings('.parameter-bigImg-li').removeClass('thisImg');
    });
    //select type
    $('#parameter-type').text($('.parameter-types-sub').eq(0).text());
    $('.parameter-types-sub').click(function(){
        $('#parameter-type').text($(this).text());
        $(this).removeClass('thisType').addClass('thisType').parent('li').siblings('li').children('.parameter-types-sub').removeClass('thisType');
    });
    //recommend-swiper
    var swiper001=new Swiper('.detail-recommend-products', {
        nextButton: '.recommend-next',
        prevButton: '.recommend-prev',
        spaceBetween: 0,
        buttonDisabledClass:'mine'
    })
    //digital show and hidden
    var digitalFlag=true;
    $('.digital-show>p').click(function(){
        if(digitalFlag){
            $('.digital-table-wrapper').css('height','initial');
            $(this).siblings('.digital-show-bg').css('display','none');
            $(this).text('Thu Gọn Nội Dung');
        }else{
            $('.digital-table-wrapper').css('height','450px');
            $(this).siblings('.digital-show-bg').css('display','block');
            $(this).text('Xem Thêm Nội Dung');
        }
        digitalFlag=!digitalFlag;
    });
    //slideshow of detail's photos
    var swiper001=new Swiper('.detail-photo-l', {
        nextButton: '.dp-next',
        prevButton: '.dp-prev',
        spaceBetween: 0
    })
    $('.detail-photo-sub').click(function(){
        var i=$(this).index();
        $(this).removeClass('thisPhoto').addClass('thisPhoto').siblings('.detail-photo-sub').removeClass('thisPhoto');
        var swiper001 = new Swiper('.detail-photo-l', {
            nextButton: '.dp-next',
            prevButton: '.dp-prev',
            spaceBetween: 0,
            initialSlide: i
        });
    });
    //detail show and hidden
    var detailFlag=true;
    $('.detail-cont-show>p').click(function(){
        if(detailFlag){
            $('.detail-cont-wrapper').css('height','initial');
            $(this).siblings('.digital-show-bg').css('display','none');
            $(this).text('Thu Gọn Nội Dung');
        }else{
            $('.detail-cont-wrapper').css('height','560px');
            $(this).siblings('.digital-show-bg').css('display','block');
            $(this).text('Xem Thêm Nội Dung');
        }
        detailFlag=!detailFlag;
    });
    //input
    $('.detail-ask-text,.user-form-sub>input').focus(function(){
        $(this).css('box-shadow','0 0 14px rgba(0,127,240,.3)');
    });
    $('.detail-ask-text,.user-form-sub>input').blur(function(){
        $(this).css('box-shadow','0 0 14px rgba(0,127,240,0)');
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
    //magnifier
    $('#parameter-bigImg-container').mousemove(function(e){
        $('#magnifier-slide').css('display','block');
        $('#magnifier').css('display','block');
        $('#magnifier>img')[0].src=$('.thisImg>img')[0].src;
        var e=event||window.event;
        var boxW=$(this).height();
        var sw=$('#magnifier-slide').height()/2;
        var sl=parseInt((e.pageX-$(this).offset().left)-sw);
        var st=parseInt((e.pageY-$(this).offset().top)-sw);
        if(sl<0){
            sl=0;
        }
        if(sl>(boxW-sw*2)){
            sl=boxW-sw*2;
        }
        if(st<0){
            st=0;
        }
        if(st>(boxW-sw*2)){
            st=boxW-sw*2;
        }
        $('#magnifier-slide').css({
            left: sl+'px',
            top: st+'px'
        });
        var k=$('#magnifier').height()/$('#magnifier-slide').height();
        $('#magnifier>img').css({
            top:-(st*k)+'px',
            left:-(sl*k)+'px'
        });
    });
    $('#parameter-bigImg-container').mouseout(function(){
        $('#magnifier-slide').css('display','none');
        $('#magnifier').css('display','none');
    });
    //quantity
    $('.quantity-less').click(function(){
        var i=$('#quantity').val();
        i--;
        if(i<1){
            i=1;
        }
        $('#quantity').val(i);
    });
    $('.quantity-add').click(function(){
        var i=$('#quantity').val();
        i++;
        if(i>99){
            i=99;
        }
        $('#quantity').val(i);
    });
    $('#quantity').blur(function(){
        var i=$('#quantity').val();
        if(i<1){
            i=1;
        }
        if(i>99){
            i=99;
        }
        $('#quantity').val(i);
    });
});
