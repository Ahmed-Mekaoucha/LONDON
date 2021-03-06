/*global document, window, $*/
$(document).ready(function () {
    'use strict';
    // Variables Start
    var tablist = $('.information .container.bigscreen ul li'),
        tablistS = $('.information .container.smallscreen ul li');
    // Variables End
    // List Item show in mobile view
    $('.list-item').on('click', function () {
        $(this).toggleClass('fa-bars fa-times').next('ul').slideToggle();
    });

    // Scroll to the next section botton
    $('.fa-angle-double-down').on('click', function () {
        $('html, body').animate({
            scrollTop: $('.features').offset().top
        }, 1000);
    });

    // Switch between full width & center imageg at galery section
    $('.galswi').on('click', function () {
        if ($(this).text() === 'Full width') {
            $(this).text('Center');
        } else {
            $(this).text('Full width');
        }
        $(this).next().toggleClass('container');
    });

    // Hide image popup
    $('.image-show').click(function () {
        $(this).fadeOut('slow');
    });

    $('.image-show div').click(function (e) {
        e.stopPropagation();
    });

    // Show image popup
    $('.image').each(function () {
        $(this).click(function () {
            $('.image-show div img').attr('src', $(this).attr('src'));
            $('.image-show').fadeIn('slow');
            $('.image-show div').css({
                'margin-top': ($(window).height() - $('.image-show div').height()) / 2
            });
        });
    });

    // Make The length of the Paragraph The same of the small one
    $('.revision .container .pararea p').each(function () {
        $(this).html($(this).html().slice(0, 190) + ' <a href=\'#\'>Read More!</a>');
    });


    // Start Tabes list
    tablist.each(function () {
        $(this).on('click', function () {
            $(this).addClass('selected').siblings().removeClass('selected');
            $('.' + $(this).text()).show().siblings('div').hide();
        });
    });

    tablistS.each(function () {
        $(this).on('click', function () {
            $(this).next('div').slideToggle('slow');
            $('.information .container.smallscreen div').not($(this).next('div')).slideUp('slow');
        });
    });




















});
