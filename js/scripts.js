$(document).ready(function () {

    // Сортировка
    $('.button-lnk').click(function(){
        if (!$(this).parents('.button-sort').hasClass('active')) {
            $(this).parents('.button-sort').addClass('active');
            $(this).parents('.button-sort').find('ul').slideDown();
        } else {
            $(this).parents('.button-sort').removeClass('active');
            $(this).parents('.button-sort').find('ul').slideUp();
        };
        return false;
    });


    // Отрытие меню
    $('.menu-open').click(function(){
        if (!$(this).hasClass('active')) {
            $(this).addClass('active');
            $('.body').animate({'left' : -240 + 'px'});
            $('.menu-main').animate({'right' : 0 + 'px'});
        } else {
            $(this).removeClass('active');
            $('.body').animate({'left' : 0 + 'px'});
            $('.menu-main').animate({'right' : -240 + 'px'});
        }
        
        return false;
    })

    // Добавить в Избранное
    $('.favorites').click(function(){
        $(this).toggleClass('active');
        return false;
    });

    // Raiting
    $('.catalog_tovar_raiting').each(function(){
        var value = $(this).attr('data-raiting');
        $(this).rating({
            fx: 'float',
            image: 'img/ico/stars2.png',
            minimal: 0,
            readOnly: true,
            callback: function(responce) {}
        });
    });

    // Raiting
    $('.raiting-big').each(function(){
        var value = $(this).attr('data-raiting');
        $(this).rating({
            fx: 'full',
            image: 'img/ico/stars3.png',
            minimal: 0,
            readOnly: false,
            callback: function(responce) {}
        });
    });
    $('.raiting-big').hover(function(){
        $(this).rating({
            fx: 'full',
            image: 'img/ico/stars3.png',
            minimal: 0,
            readOnly: false,
            callback: function(responce) {}
        });
    })

    // Добовление в сравнение
    $('.srovneniyu-no').click(function(){
        $(this).hide();
        $(this).parent('div').find('.srovneniyu-ok').show();
        $(this).parents('.srovneniyu').addClass('active');
        var srovneniyuNamber = $('.srovneniyu.active').length;
        $('.srovneniyu-lnk').fadeIn();
        $('.srovneniyu-lnk span').html(srovneniyuNamber);
    });
    $('.srovneniyu-ok').click(function(){
        $(this).hide();
        $(this).parent('div').find('.srovneniyu-no').show();
        $(this).parents('.srovneniyu').removeClass('active');
        var srovneniyuNamber = $('.srovneniyu.active').length;
        $('.srovneniyu-lnk').fadeIn();
        $('.srovneniyu-lnk span').html(srovneniyuNamber);
    });
    $('.srovneniyu-close').click(function(){
        $('.srovneniyu-lnk').fadeOut();
        return false;
    })
    // Сообщить о появлении
    $('.availability-no').click(function(){
        $(this).hide();
        $(this).parent('div').find('.availability-ok').show();
    });
    $('.availability-ok').click(function(){
        $(this).hide();
        $(this).parent('div').find('.availability-no').show();
    });

    photoNameHeight();
    $(window).resize(function(){
        $('.phone-header').css({'height' : 'auto'});
        photoNameHeight();
    });


    // Акардион
    $('.condition-h, .condition-item-img').click(function(){
        if (!$(this).parents('.condition-item').hasClass('active')) {
            $(this).parents('.condition-item').addClass('active');
            $(this).parents('.condition-item').find('.condition-cont').slideDown();
        } else {
            $(this).parents('.condition-item').removeClass('active');
            $(this).parents('.condition-item').find('.condition-cont').slideUp();
        }
    });

    // Карзина
    $('.basket-n-plus').click(function(){
        var basketNamber = $(this).parents('.basket-n').find('.basket-n-inp').val();
        basketNamber = ++basketNamber;
        $(this).parents('.basket-n').find('.basket-n-inp').val(basketNamber);
        return false;
    });
    $('.basket-n-minus').click(function(){
        var basketNamber = $(this).parents('.basket-n').find('.basket-n-inp').val();
        if(basketNamber > 0) {
            basketNamber = --basketNamber;
            $(this).parents('.basket-n').find('.basket-n-inp').val(basketNamber);
        };
        return false;
    });
    $('.phone-detals-lnk').click(function(){
        $(this).parent('div').find('.phone-detals-open').fadeIn();
        return false;
    });
    $('.phone-detals .phone-detals-open a').click(function(){
        var linkClick = $(this).html();
        $(this).parents('.phone-detals-open').find('a').removeClass('active');
        $(this).addClass('active');
        $(this).parents('.phone-detals').find('.phone-detals-lnk').html(linkClick);
        $(this).parents('.phone-detals-open').fadeOut();
        return false;
    });
    $('.payment-info-box a').click(function(){
        $(this).parents('.payment-info').find('.phone-detals-open').fadeIn();
        return false;
    });
    $('.payment-info .phone-detals-open a').click(function(){
        var linkClick = $(this).parent('p').html();
        $(this).parents('.phone-detals-open').find('a').removeClass('active');
        $(this).addClass('active');
        $(this).parents('.payment-info').find('.payment-info-box').html(linkClick);
        $(this).parents('.phone-detals-open').fadeOut();
        $('.payment-info-box a').click(function(){
            $(this).parents('.payment-info').find('.phone-detals-open').fadeIn();
            return false;
        });
        return false;
    });


    //Custom select - http://ivaynberg.github.io/select2/
    $('.select-wrapper select').each(function(){
        if( !$(this).parents('.select-wrapper').hasClass('no-border') && !$(this).parents('.select-wrapper').hasClass('big-size') ){
            $(this).select2();
        }else if(  $(this).parents('.select-wrapper').hasClass('big-size') ){
            $(this).select2({
                dropdownCssClass: 'big-size'
            });
        }else{
            $(this).select2({
                dropdownCssClass: 'no-border',
                dropdownAutoWidth: 'auto'
            });
        }
    });

    // tabs
    $('.basket-reg-tab a').click(function(){
        var tabIndex = $(this).attr('href');
        $('.basket-reg-item').hide();
        $('.search-tab').hide();
        $(tabIndex).show();
        $(this).parents('ul').find('li').removeClass('active');
        $(this).parents('li').addClass('active');
        return false;
    });

    $('.checkbox-tab input').click(function(){
        var checkboxActive = $('.checkbox-tab').find('input:checked').attr('rel');
        $('.checkbox-tab-item').hide();
        $('.checkbox-tab-item').eq(checkboxActive).show();
        console.log(checkboxActive);
    });

    $('.search-tab:first').show();

    // Tovar
    $('.tovar-detal-lnk a').click(function(){
        $(this).parents('.tovar-detal-lnk').find('li').removeClass('active');
        $(this).parent('li').addClass('active');
        return false;
    });


    // corusel
    if($('.srovneniyu-column-cont').length) {
        $(".srovneniyu-column-cont").carouFredSel({
            circular: false,
            infinite: false,
            auto    : false,
            scroll  : {
                items           : 1,
                duration        : 1000,
                timeoutDuration : 2000
            },
            responsive  : true,
            items       : 2,
            prev    : {
                button  : ".srovneniyu-prev",
                key     : "left"
            },
            next    : {
                button  : ".srovneniyu-next",
                key     : "right"
            },
            swipe: {
              onMouse: true,
              onTouch: true
            }
        })
    }



    
});

$(window).load(function(){
    $('.condition-cont').hide();
    srovneniyu();
    $(window).resize(function(){
        $('.srovneniyu-item, .srovneniyu-phone-height').css({'height' : 'auto'});
        srHN_act = 0;
        srovneniyu();
    });
    $(".slider ul").carouFredSel({
        responsive  : true,
        scroll      : {
            fx          : "crossfade"
        },
        items       : {
            visible     : 1,
            width       : 640,
            height      : "50%"
        },
        pagination  : ".slider-pag"
    });
});



function photoNameHeight(){
    $('.phone-cat-border').each(function(){
        var phoneName = $(this).find('.phone-cat-i');
        var phoneNameH1 = phoneName.eq(0).find('.phone-header').height();
        var phoneNameH2 = phoneName.eq(1).find('.phone-header').height();
        if (phoneNameH1 > phoneNameH2) {
            phoneName.find('.phone-header').height(phoneNameH1);
        } else {
            phoneName.find('.phone-header').height(phoneNameH2);
        }

    })
};

function srovneniyu(){
    var srovneniyuBody = $('.srovneniyu-over').width() / 2;
    $('.srovneniyu-column').width(srovneniyuBody);
    var srovneniyuLength = $('.srovneniyu-column').length;
    var srovneniyuWidth = srovneniyuLength * srovneniyuBody + 15;
    $('.srovneniyu-column-cont').width(srovneniyuWidth);
    // var srovneniyuNext = 0;
    // $('.srovneniyu-column-cont').css({'left' : 0});
    // $('.srovneniyu-next').click(function(){
    //     srovneniyuNext = ++srovneniyuNext;
    //     if ((srovneniyuLength - 1) > srovneniyuNext) {
    //         var srovneniyuNextN = -1 * srovneniyuNext * srovneniyuBody;
    //         $('.srovneniyu-column-cont').animate({'left' : srovneniyuNextN});
    //         console.log(srovneniyuNextN);
    //     } else {
    //         srovneniyuNext = srovneniyuLength - 2;
    //     };
    //     console.log(srovneniyuNext);
    //     return false;
    // });
    // $('.srovneniyu-prev').click(function(){
    //     srovneniyuNext = --srovneniyuNext;
    //     if (srovneniyuNext > -1) {
    //         var srovneniyuNextN = -1 * srovneniyuNext * srovneniyuBody;
    //         $('.srovneniyu-column-cont').css({'left' : srovneniyuNextN});
    //         console.log(srovneniyuNextN);
    //     } else {
    //        srovneniyuNext = 0; 
    //     };
    //     console.log(srovneniyuNext);
    //     return false;
    // });

    var phoneHeight = 0;
    $('.srovneniyu-phone-height').each(function(){
        var phoneHeightI = $(this).height();
        if(phoneHeightI > phoneHeight) {
            phoneHeight = phoneHeightI;
        };
    });
    $('.srovneniyu-phone-height').css({'height' : phoneHeight});
    var phoneHeadHeight = 0;
    $('.srovneniyu-header').each(function(){
        var phoneHeightI = $(this).height();
        if(phoneHeightI > phoneHeadHeight) {
            phoneHeadHeight = phoneHeightI;
        };
    });
    $('.srovneniyu-header').css({'height' : phoneHeadHeight});
    srHN = $('.srovneniyu-column:first .srovneniyu-item').length;

    // Сровнение
    $('.srovneniyu-equal a').click(function(){
        if (!$(this).hasClass('active')) {
            $('.srovneniyu-h, .srovneniyu-height, .srovneniyu-item, .tovar-button.phone-cat-row').hide();
            $(this).addClass('active');
        } else {
            $('.srovneniyu-h, .srovneniyu-height, .srovneniyu-item, .tovar-button.phone-cat-row').show();
            $(this).removeClass('active');
        };
        return false;
    });

    srovneniyuItem();   


    
};

var srHN;
var srHN_act = 0;
function srovneniyuItem(){
    srHeight = 0;
    $('.srovneniyu-column').each(function(){
        var srHeightAct = $(this).find('.srovneniyu-item').eq(srHN_act).height();
        if(srHeightAct > srHeight) {srHeight = srHeightAct};
    });
    $('.srovneniyu-column').each(function(){
        $(this).find('.srovneniyu-item').eq(srHN_act).height(srHeight);
    });
    $('.srovneniyu-head').find('.srovneniyu-height').eq(srHN_act).height(srHeight);
    srHN_act = ++srHN_act;
    if (srHN > srHN_act) {
        srovneniyuItem()
    } else {
        var srovneniyuOver = $('.srovneniyu-column:last').height() + 40;
        $('.srovneniyu-over').height(srovneniyuOver)
    };
};

$(document).mouseup(function (e){
    // Закрытие попапа мини
    var container = $(".phone-detals-open"); 
        if (!container.is(e.target) && container.has(e.target).length === 0){
        $(".phone-detals-open").fadeOut();
        popupStatusMin = 0;
    };
    var container2 = $(".button-sort"); 
        if (!container2.is(e.target) && container2.has(e.target).length === 0){
        $(".button-sort ul").slideUp();
        $('.button-sort').removeClass('active');
        popupStatusMin = 0;
    };


    
});

