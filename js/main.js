$(function () {
    'use strict';
    // navbar
    $('.navbar ul li .nav-link').hover(function(){
   $(this).css( "color","yellow");
});
  $('.navbar ul li .nav-link').mouseleave(function(){
   $(this).css( "color","white");
});
    // second nav
    $('.second-nav a').hover(function(){
        $(this).css("color","yellow")
    })
        $('.second-nav a').mouseleave(function(){
        $(this).css("color","white")
    })
 // display button
        $('.new-aflam .col-8 .o').hover(function(){
    $('.new-aflam .col-8 .one').css("display","block");
    });
      $('.new-aflam .col-8 ').mouseleave(function(){
    $('.new-aflam .col-8 .one').css("display","none");
    });
        $('.new-aflam .col-8 .tw').hover(function(){
    $('.new-aflam .col-8 .two').css("display","block");
    });
      $('.new-aflam .col-8 ').mouseleave(function(){
    $('.new-aflam .col-8 .two').css("display","none");
    });
        $('.new-aflam .col-8 .th').hover(function(){
    $('.new-aflam .col-8 .three').css("display","block");
    });
      $('.new-aflam .col-8 ').mouseleave(function(){
    $('.new-aflam .col-8 .three').css("display","none");
    });
    $('.new-aflam .col-8 .f').hover(function(){
    $('.new-aflam .col-8 .four').css("display","block");
    });
      $('.new-aflam .col-8 ').mouseleave(function(){
    $('.new-aflam .col-8 .four').css("display","none");
    });
    $('.more').on("click",function(){
        $('.hide').css("display","block");
        $('.more').css("display","none");
    });
  // scroll bottom
    
    $(window).scroll(function() {
    if ($(window).scrollTop() > 100) {
      $('.up').css("display","block");
    } else {
      $('.up').css("display","none");
    }
  });

    $('.up').on("click",function(){
        $(window).scrollTop(0);
        return false;
    });
});
